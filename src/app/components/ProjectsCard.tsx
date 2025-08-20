// src/components/ProjectsCard.tsx
import styles from '../styles/ProjectsCard.module.css';
interface ProjectsCardProps {
  className?: string;
}
export default function ProjectsCard({ className }: ProjectsCardProps) {
  return (
    <div className={className}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <i className="fa fa-folder" aria-hidden="true"></i>
          </div>
          <div style={{ width: '80%' }}>
            <h3>Projects</h3>
            <p>My latest work</p>
          </div>
          <div>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>

        <div className={styles.projects}>
          {/* Project 1 */}
          <div className={styles.projectItem}>
            <img src="/cryptovault.webp" alt="CryptoVault" className={styles.thumbnail} />
            <div className={styles.details}>
              <h4>CryptoVault – Enterprise-Grade Encryption <i className="fa fa-star"></i></h4>
              <p>A secure, client-side encryption and decryption tool.</p>
              <div className={styles.meta}>
                <span className={styles.tag}>other</span>
                <span className={styles.year}><i className="fa fa-calendar"></i> 2025</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectItem}>
            <img src="/cryptovault.webp" alt="Form Builder" className={styles.thumbnail} />
            <div className={styles.details}>
              <h4>Low Code Form Builder <i className="fa fa-star"></i></h4>
              <p>Designed and built a modular low-code form builder.</p>
              <div className={styles.meta}>
                <span className={styles.tag}>web app</span>
                <span className={styles.year}><i className="fa fa-calendar"></i> 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className={styles.button}>
            View All Projects <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      </div>
  );
}
