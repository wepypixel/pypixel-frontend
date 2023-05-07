import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/BlogPostList.module.css";
import { format } from "date-fns";
import { RxDotFilled } from "react-icons/rx";
import Link from 'next/link'
import Image from "next/image";

export default function BlogPostList({ initialPosts, currentPage, totalPages }) {
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [posts, setPosts] = useState(initialPosts);

  const handlePageChange = (pageNumber) => {
    setCurrentPageState(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/posts?page=${currentPageState}`
        );
        setPosts(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPageState]);

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
  

  return (
    <div className={styles["posts-list-container"]}>
      <div className={styles["posts-grid-container"]}>
        {posts.slice(3).map((post) => (
          <div key={post.id} className={styles["posts-grid-item"]}>
            <Link href={`/post/${post.slug}`} className={styles["blog-post-hero-link"]}>
              <Image
                src={"http://127.0.0.1:8000" + post.cover_image}
                className={styles["post-grid-item-img"]}
                alt={post.title}
                width={500}
                height={500}
              />
              <div className={styles["grid-post-date-div"]}>
                <RxDotFilled className={styles["dot-icon"]} />
                <p className={styles["post-date"]}>
                  {format(
                    new Date(post.updated_on.substring(0, 10)),
                    "dd MMMM yyyy"
                  )}
                </p>
              </div>
              <h2 className={styles["grid-card-post-title"]}>
              {truncateString(post.title, 70)}
              </h2>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles["prev-next-btn-div"]}>
        <button
          className={styles["previous-btn"]}
          onClick={() => handlePageChange(currentPageState - 1)}
          disabled={currentPageState == 1}
        >
          &#x2190;&nbsp;Previous
        </button>
        <button
          className={styles["next-btn"]}
          onClick={() => handlePageChange(currentPageState + 1)}
          disabled={currentPageState == totalPages}
        >
          Next&nbsp;&rarr;
        </button>
      </div>
    </div>
  );
}

