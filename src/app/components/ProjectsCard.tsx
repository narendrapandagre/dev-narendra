"use client"; 
// src/components/ProjectsCard.tsx
import { useRouter } from 'next/navigation';
import styles from '../styles/ProjectsCard.module.css';
interface ProjectsCardProps {
  className?: string;
};
import projects from "../projects/projectsData";

export default function ProjectsCard({ className }: ProjectsCardProps) {
  const router = useRouter();

  return (
    <div className={className}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.icon}>
            <i className="fa fa-folder" aria-hidden="true"></i>
          </div>
          <div style={{ width: '80%' }}>
            <h3>Projects</h3>
            <p>My latest work</p>
          </div>
          <div onClick={() => router.push("/projects")} className={styles.viewAllBtn}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>

        {/* Projects List */}
        <div className={styles.projects}>
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className={styles.projectItem}
              onClick={() => router.push(`/projects/${project.slug}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`/${project.image}`}
                alt={project.title}
                className={styles.thumbnail}
              />
              <div className={styles.details}>
                <h4>
                  {project.title}{" "}
                  {project.featured && <i className="fa fa-star"></i>}
                </h4>
                <p>{project.desc}</p>
                <div className={styles.meta}>
                  <span className={styles.tag}>{project.type}</span>
                  <span className={styles.year}>
                    <i className="fa fa-calendar"></i>{" "}
                    {project.date.replace("Aug ", "")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div>
          <button
            className={styles.button}
            onClick={() => router.push("/projects")}
          >
            View All Projects{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
