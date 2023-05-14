import axios from "axios";
import { format } from "date-fns";
import { useEffect } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import Head from "next/head";
import { RxDotFilled } from "react-icons/rx";
import styles from "../../styles/BlogPostDetail.module.css";
import gridStyles from "../../styles/BlogPostList.module.css";
import Image from "next/image";
import * as ga from "../../lib/ga";
import { useRouter } from 'next/router'

export default function Post({ blogPost, relatedPosts, popularPosts }) {
  const description = blogPost ? blogPost.meta_description : "";
  const sanitizedContent = DOMPurify.sanitize(blogPost.content);
  const router = useRouter()

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    let truncated = str.slice(0, num + 1);
    let lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace === -1) {
      lastSpace = num;
    }
    return truncated.slice(0, lastSpace) + "...";
  }

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={styles["blog-post-detail-screen-body"]}>
      <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles["blog-post-detail-upper-body"]}>
        <main className={styles["blog-post-detail-main"]}>
          <p className={styles["blog-post-detail-category"]}>
            {blogPost.category.name}
          </p>
          <h1 className={styles["blog-post-detail-title"]}>{blogPost.title}</h1>
          <h4 className={styles["blog-post-detail-published-date"]}>
            <AiFillClockCircle className={styles["clock-icon"]} /> Published on{" "}
            {format(
              new Date(blogPost.updated_on.substring(0, 10)),
              "dd MMMM yyyy"
            )}
          </h4>
          <Image
            src={blogPost.cover_image}
            className={styles["blog-post-detail-img"]}
            alt={blogPost.title}
            width={1000}
            height={1000}
            priority
          />

          <div
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            className={styles["blog-post-content"]}
          ></div>
        </main>

        <aside>
          <h1>Related Posts</h1>
          {relatedPosts.slice(0, 5).map((post) => {
            if (post.id != blogPost.id) {
              return (
                <div key={post.id} className={styles["related-post-div"]}>
                  <Link
                    href={`/post/${post.slug}`}
                    className={gridStyles["blog-post-hero-link"]}
                  >
                    <Image
                      src={post.cover_image}
                      className={styles["related-posts-img"]}
                      alt={post.title}
                      width={500}
                      height={500}
                    />
                    <div className={gridStyles["grid-post-date-div"]}>
                      <RxDotFilled className={gridStyles["dot-icon"]} />
                      <p className={gridStyles["post-date"]}>
                        {format(
                          new Date(post.updated_on.substring(0, 10)),
                          "dd MMMM yyyy"
                        )}
                      </p>
                    </div>
                    <h2 className={gridStyles["grid-card-post-title"]}>
                      - {truncateString(post.title, 70)}
                    </h2>
                  </Link>
                </div>
              );
            }
          })}
        </aside>
      </div>

      <section className={gridStyles["posts-list-container"]}>
        <h1 className={styles["popular-posts-heading"]}>
          Popular Posts in {blogPost.category.name}
        </h1>
        <div className={gridStyles["posts-grid-container"]}>
          {popularPosts.slice(0, 12).map((post) => {
            if (post.id != blogPost.id) {
              return (
                <div key={post.id} className={gridStyles["posts-grid-item"]}>
                  <Link
                    href={`/post/${post.slug}`}
                    className={gridStyles["blog-post-hero-link"]}
                  >
                    <Image
                      src={post.cover_image}
                      className={gridStyles["post-grid-item-img"]}
                      alt={post.title}
                      width={500}
                      height={500}
                    />
                    <div className={gridStyles["grid-post-date-div"]}>
                      <RxDotFilled className={gridStyles["dot-icon"]} />
                      <p className={gridStyles["post-date"]}>
                        {format(
                          new Date(post.updated_on.substring(0, 10)),
                          "dd MMMM yyyy"
                        )}
                      </p>
                    </div>
                    <h2 className={gridStyles["grid-card-post-title"]}>
                      -{truncateString(post.title, 70)}
                    </h2>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const slug = context.params.slug;

  const blogPostResponse = await axios.get(
    `https://pypixel.com/api/post/${slug}`
  );
  const blogPost = blogPostResponse.data;
  const relatedPostsResponse = await axios.get(
    `https://pypixel.com/api/category/${blogPostResponse.data.category.name}`
  );
  const relatedPosts = relatedPostsResponse.data.results;
  const popularPostsResponse = await axios.get(
    `https://pypixel.com/api/popular/${blogPostResponse.data.category.name}`
  );
  const popularPosts = popularPostsResponse.data;

  return {
    props: {
      blogPost,
      relatedPosts,
      popularPosts,
      slug,
    },
  };
}
