// src/components/BlogCard.tsx
import styles from '../styles/BlogCard.module.css';

export default function BlogCard() {
  return (
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
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>

      {/* Latest Post */}
      <div className={styles.post}>
        <div className={styles.postIcon}>
          <i className="fa fa-file-alt" aria-hidden="true"></i>
        </div>
        <div className={styles.details}>
          <h4>Why SOLID Matters – From Fundamentals to Real-World</h4>
          <p>
            Learn the SOLID principles not as rules to memorize but from first principles—
            understand the why behind clean code.
          </p>
          <div className={styles.meta}>
            <span className={styles.tag}>development</span>
            <div className={styles.extra}>
              <span><i className="fa fa-clock"></i> 4m</span>
              <span><i className="fa fa-calendar"></i> Aug 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className={styles.footer}>
        <button className={styles.button}>
          Read All Posts <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
