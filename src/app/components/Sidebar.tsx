import styles from '../styles/Sidebar.module.css';
interface SidebarProps {
  className?: string;
}
export default function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={className}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarBox}>
          <h2>Tech Stack</h2>
          <div className={styles.section}>
            <h4>Frontend Development</h4>
            <div className={styles.skill}>
              <span>JavaScript</span>
            </div>
            <div className={styles.skill}>
              <span>Angular 14</span>
            </div>
            <div className={styles.skill}>
              <span>Bootstrap 4.6</span>
            </div>
            <div className={styles.skill}>
              <span>React.js</span>
            </div>
            <div className={styles.skill}>
              <span>TypeScript</span>
            </div>
            <div className={styles.skill}>
              <span>Next.js</span>
            </div>
            <div className={styles.skill}>
              <span>Redux</span>
            </div>
            <div className={styles.skill}>
              <span>Tailwind CSS</span>
            </div>
            <div className={styles.skill}>
              <span>Angular Material</span>
            </div>
            <div className={styles.skill}>
              <span>Tailwind CSS</span>
            </div>
            <div className={styles.skill}>
              <span>HTML5</span>
            </div>
            <div className={styles.skill}>
              <span>CSS3</span>
            </div>
          </div>
          <div></div>
          <div className={styles.section}>
            <h4>Design Tools</h4>
            <div className={styles.skill}>
              <span>Figma</span>
            </div>
            <div className={styles.skill}>
              <span>Photoshop</span>
            </div>
            <div className={styles.skill}>
              <span>CorelDRAW</span>
            </div>
            <div className={styles.skill}>
              <span>Adobe XD</span>
            </div>
          </div>
          <div className={styles.section}>
            <h4>Tools & Technologies</h4>
            <div className={styles.skill}>
              <span>Git</span>
            </div>
            <div className={styles.skill}>
              <span>Jira</span>
            </div>
            <div className={styles.skill}>
              <span>Express.js</span>
            </div>
            <div className={styles.skill}>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
