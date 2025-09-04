import styles from "./ProjectDetails.module.css";
import projectsData from "../projectsData";
import { Calendar, EyeIcon, GiftIcon, File, Code,Zap, Sparkles, Target,Trophy, TimerIcon , Lightbulb, CircleCheck } from "lucide-react";

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className={styles.container}>❌ Project Not Found</div>;
  }

  return (
    <div className={styles.container}>
      {/* Back Button */}
      <div className={styles.topSpacing}>
        <div className={styles.back}>
          <a href="/projects">← Back to Projects</a>
        </div>
        <div className={styles.status}>
          {project.featured && <span className={styles.featured}>⭐ Featured</span>}
        </div>
      </div>

      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.meta}>
            <span className={styles.badge}>{project.type}</span>
            <span className={styles.date}>
              <Calendar size={14}/>  {project.date}
            </span>
          </div>
          <div className={styles.headerDetails}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.desc}>{project.desc}</p>
            <div className={styles.btnDiv}>
              {/* onClick={() => window.open(`https://${project.slug}.narendran.dev`, "_blank")} */}
              <button className={`${styles.btn} ${styles.primary}`}><EyeIcon size={18}/> View Live Project</button>
              <button className={`${styles.btn} ${styles.secondary}`}><GiftIcon size={18}/> View Source Code</button>
            </div>
          </div>
        </div>
        <div className={styles.imageBox}>
          <img src={`/${project.image}`} alt={project.title} />
        </div>
      </header>

    <div className={styles.divider}>
        <div className={styles.leftDivider}>
           {/* Overview */}
            <section className={styles.section}>
              <h2><File className={styles.icons} size={18}/> Project Overview</h2>
              <p>{project.overview}</p>
            </section>

            {/* Key Features */}
            <section className={styles.section}>
              <h2><Zap className={styles.icons} size={18}/> Key Features</h2>
              <ul>
                {project.features.map((f, i) => (
                  <li key={i}><CircleCheck size={14}/> {f}</li>
                ))}
              </ul>
            </section>

            

            {/* Timeline */}
            <section className={styles.section}>
              <h2><TimerIcon className={styles.icons} size={18}/> Timeline</h2>
              <ul>
                {project.timeline.map((t, i) => (
                  <li key={i}><CircleCheck size={14}/> {t.phase} – {t.duration}</li>
                ))}
              </ul>
            </section>

            {/* Achievements */}
            <section className={styles.section}>
              <h2><Trophy className={styles.icons} size={18}/> Achievements</h2>
              <ul>{project.achievements.map((a, i) => <li key={i}><CircleCheck size={14}/> {a}</li>)}</ul>
            </section>

            {/* Challenges */}
            <section className={styles.section}>
              <h2><Target className={styles.icons} size={18}/> Challenges</h2>
              <ul>{project.challenges.map((c, i) => <li key={i}><CircleCheck size={14}/> {c}</li>)}</ul>
            </section>

            {/* Next Steps */}
            <section className={styles.section}>
              <h2>Next Steps</h2>
              <ul>{project.nextSteps.map((n, i) => <li key={i}><CircleCheck size={14}/> {n}</li>)}</ul>
            </section>
        </div>
        <div className={styles.rightDivider}>
            {/* Technologies + Metrics Side by Side */}
              <section className={styles.section}>
                <h2><Code className={styles.icons} size={16}/> Technologies Used</h2>
                <p><b>Frontend</b></p>
                  <div style={{marginBottom: "1rem", display: "flex", flexWrap: "wrap", marginTop: "0.5rem"}}>
                    {Object.entries(project.technologies.frontend).map(([t, f]) => (
                      <span className={styles.skillTag} key={t}>
                        {f}
                      </span>
                    ))}
                    {/* <span style={{fontSize: "0.9rem", color: "#666"}}> (and more...)</span> */}
                  </div>

                <p><b>Backend</b></p>
                  <div style={{marginBottom: "1rem", display: "flex", flexWrap: "wrap", marginTop: "0.5rem"}}>
                    {Object.entries(project.technologies.backend).map(([t, f]) => (
                      <span className={styles.skillTag} key={t}>
                        {f}
                      </span>
                    ))}
                    {/* <span style={{fontSize: "0.9rem", color: "#666"}}> (and more...)</span> */}
                  </div>
              </section>

              <section className={styles.section}>
                <h2><Sparkles className={styles.icons} size={16} /> Project Metrics</h2>
                <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
                  {Object.entries(project.metrics).map(([k, v]) => (
                    <li key={k} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <span><b> {k}:</b></span> <span style={{textAlign:'right'}}> {v}</span>
                    </li>
                  ))}
                </ul>
              </section>

            {/* Roles */}
            <section className={styles.section}>
              <h2>Roles</h2>
              <ul>{project.roles.map((r, i) => <li key={i}><CircleCheck size={14}/> {r}</li>)}</ul>
            </section>
        </div>
    </div>
     
    </div>
  );
}
