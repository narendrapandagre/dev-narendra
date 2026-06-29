import styles from '../styles/Sidebar.module.css';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiFigma,
  SiCoreldraw,
  SiGit,
  SiJira,
  SiExpress,
  SiPostgresql,
} from 'react-icons/si';
import { Image, PenTool } from 'lucide-react';
import { IconType } from 'react-icons';

interface SidebarProps {
  className?: string;
}

interface Skill {
  name: string;
  icon: IconType | typeof Image;
}

const techStack: Record<string, Skill[]> = {
  "Frontend Development": [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Redux", icon: SiRedux },
    { name: "Angular 14", icon: SiAngular },
    { name: "Angular Material", icon: SiAngular },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap 4.6", icon: SiBootstrap },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss },
  ],
  "Design Tools": [
    { name: "Figma", icon: SiFigma },
    { name: "Adobe XD", icon: PenTool },
    { name: "Photoshop", icon: Image },
    { name: "CorelDRAW", icon: SiCoreldraw },
  ],
  "Tools & Technologies": [
    { name: "Git", icon: SiGit },
    { name: "Jira", icon: SiJira },
    { name: "Express.js", icon: SiExpress },
    { name: "PostgreSQL", icon: SiPostgresql },
  ],
};

export default function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={className}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarBox}>
          <h2>Tech Stack</h2>
          {Object.entries(techStack).map(([category, skills]) => (
            <div className={styles.section} key={category}>
              <h4>{category}</h4>
              {skills.map(({ name, icon: Icon }) => (
                <div className={styles.skill} key={name}>
                  <Icon size={16} className={styles.skillIcon} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}