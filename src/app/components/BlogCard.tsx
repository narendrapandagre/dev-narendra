"use client";

import Link from "next/link";
import blogs from "../blog/blogs"; // yeh aapke blogs.ts ka path hai
import styles from "../styles/BlogCard.module.css";

interface BlogCardProps {
  className?: string;
}

export default function BlogCard({ className }: BlogCardProps) {
  // sirf latest 2 posts
  const latestPosts = blogs.slice(0, 2);

  return (
    <div className={className}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.iconTitle}>
            <div className={styles.icon}>
              <i className="fa fa-book" aria-hidden="true"></i>
            </div>
            <div>
              <h3>Blog</h3>
              <p>Latest thoughts</p>
            </div>
          </div>
          <Link href="/blog" className={styles.viewAllBtn}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </Link>
        </div>

        {/* Latest Posts */}
        <div className={styles.post}>
          {latestPosts.map((post) => (
            <div key={post.id} className={styles.postItem}>
              <div className={styles.postIcon}>
                <i className="fa fa-file-alt" aria-hidden="true"></i>
              </div>
              <div className={styles.details}>
                <Link href={`/blog/${post.slug}`}>
                  <h4>{post.title}</h4>
                </Link>
                <p>{post.desc}</p>
                <div className={styles.meta}>
                  <span className={styles.tag}>{post.tags[0]}</span>
                  <div className={styles.extra}>
                    <span>
                      <i className="fa fa-clock"></i> 4m
                    </span>
                    <span>
                      <i className="fa fa-calendar"></i> {post.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className={styles.footer}>
          <Link href="/blog">
            <button className={styles.button}>
              Read All Posts <i className="fa fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
