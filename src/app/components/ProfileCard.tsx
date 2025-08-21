// src/components/ProfileCard.tsx
import styles from '../styles/ProfileCard.module.css';
interface ProfileCardProps {
  className?: string;
}
export default function ProfileCard({ className }: ProfileCardProps) {
  return (
     <div className={className}>
      <div className={styles.card}>
        <div className={styles.one}>
          <div className={styles.profile}>
            <div>
              <img
                src="/avatar.png"
                alt="Profile"
                className={styles.avatar}
              />
            </div>
            <div>
              <h2>Narendra Pandagre</h2>
              <p>narendrapanda22@gmail.com</p>
              <p>Frontend Developer | Open to projects</p>
            </div>
          </div>
          <div className={styles.links}>
            <div>
              <a href="/resume">Resume</a> | <a href="#">About Me</a>
            </div>
          </div>
        </div>
        
        <div className={styles.two}>
          <p className={styles.ptext}>I build <span>Frontend</span></p>
          <p>Hello, I'm Narendra! A 35 year old developer based in Indore - India.</p>
          <div className={styles.taglineContainer}>
            <p className={styles.tagline}>"I make divs align like stars in a constellation."</p>
            <p className={styles.status}>
              <span></span>
              Open to interesting projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
