// src/components/ConnectCard.tsx
import styles from '../styles/ConnectCard.module.css'
interface ConnectCardProps {
  className?: string;
}
export default function ConnectCard({ className }: ConnectCardProps) {
  return (
    <div className={className}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h3>Let's Connect</h3>
          <p>Let's work together</p>
          <button className={styles.hire}>
            <i className={`fas fa-briefcase ${styles.icon}`} />
            Hire Me
          </button>

          <button className={styles.contact}>
            <i className={`far fa-envelope ${styles.icon}`} />
            Contact
          </button>
        </div>
        
        <div className={styles.icons}>
          <p>Follow & Connect</p>
          <a href="https://linkedin.com" target="_blank">
            <i className={`fab fa-linkedin ${styles.icon}`} />
          </a>
          <a href="https://github.com" target="_blank">
            <i className={`fab fa-github ${styles.icon}`} />
          </a>
          <a href="https://twitter.com" target="_blank">
            <i className={`fab fa-twitter ${styles.icon}`} />
          </a>
          <a href="mailto:example@email.com">
            <i className={`fas fa-envelope ${styles.icon}`} />
          </a>
        </div>
        
      </div>
    </div>
  )
}
