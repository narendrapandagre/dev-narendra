// src/app/components/Experience.tsx
import styles from '../styles/Experience.module.css';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: "Front-End Developer & UI Developer",
    company: "Engineer Philosophy Web Services Pvt. Ltd.",
    duration: "March 2017 – Present",
    location: "Indore, India",
    points: [
      "Built scalable Angular & React interfaces for Xpower, a sales force effectiveness platform for the life sciences industry.",
      "Developed geospatial dashboards and data visualizations using Mapbox, ag-Grid, and Plotly Charts.",
      "Built dashboards used by 500+ users, improving analysis efficiency by 20%.",
    ],
  },
  {
    role: "Web Designer",
    company: "SSV Technologies",
    duration: "Dec 2014 – Feb 2017",
    location: "Indore, India",
    points: [
      "Designed and developed responsive websites for 25+ clients using HTML, CSS, and Bootstrap.",
      "Converted Photoshop (PSD) designs into pixel-perfect, fully responsive HTML pages.",
      "Created wireframes, mockups, and prototypes to present design concepts to clients.",
    ],
  },
];

export default function Experience({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconBox}>
            <Briefcase size={20} />
          </div>
          <div>
            <h2>Experience</h2>
            <p className={styles.subtitle}>My professional journey</p>
          </div>
        </div>

        <div className={styles.timeline}>
          {experienceData.map((item, i) => (
            <div className={styles.timelineItem} key={i}>
              <div className={styles.timelineMarker}>
                <span className={styles.dot}></span>
                {i !== experienceData.length - 1 && <span className={styles.line}></span>}
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.roleHeader}>
                  <h3>{item.role}</h3>
                  <span className={styles.duration}>{item.duration}</span>
                </div>
                <p className={styles.companyLine}>
                  {item.company} · {item.location}
                </p>
                <ul className={styles.points}>
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewMoreWrapper}>
          <a href="/about" className={styles.viewMoreLink}>
            View Full Experience →
          </a>
        </div>
      </div>
    </div>
  );
}