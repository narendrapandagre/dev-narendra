// src/app/resume/page.tsx
import styles from './Resume.module.css';
import Link from 'next/link';
import { Calendar, Mail, Phone, MapPin, Star, Briefcase, Wrench, Book, Award } from "lucide-react";

export default function Resume() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <div className={styles.titleBlock}>
            <Link href="/" className={styles.back}>← Back to Home</Link>
            <h1>Narendra - Resume</h1>
            <span>📄 Version 2024.1</span> <span>📅 Updated Jun 2025</span>
          </div>
          <div className={styles.meta}>
            <button className={styles.download}>⬇ Download PDF</button>
          </div>
      </div>
      <div className={styles.content}>
        {/* Header */}
        <header className={`${styles.info} ${styles.card}`}>
          <div className={styles.titleBlock}>
            <h1>NARENDRA PANDAGRE</h1>
            <p>Frontend Developer</p>
          </div>
          <div className={styles.contact}>
            <span><Mail size={14}/> narendrapanda22@gmail.com</span>
            <span><Phone size={14}/> +91-9691293919</span>
            <span><MapPin size={14}/> Indore, India</span>
            <span>🌐 dev-narendra.vercel.app</span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className={styles.card}>
          <h2><Star size={16}/> Professional Summary</h2>
          <p>
            Frontend Developer with 10+ years of expertise in building enterprise-grade applications. 
            Proven track record in microservices architecture, low-code/no-code platforms. 
            Recently architected a microservices-based Lead Management System...
          </p>
        </section>

        {/* Experience */}
        <section className={styles.card}>
          <h2><Briefcase size={16}/> Professional Experience</h2>
          <div className={styles.job}>
            <h3>Software Engineer 2</h3>
            <p><strong>Axeno Consulting Pvt. Ltd.</strong> | Apr 2022 – Present</p>
            <ul>
              <li>Designed and developed a microservices-based Lead Management System...</li>
              <li>Engineered BPM system with custom workflows...</li>
              <li>Built drag-and-drop Form Builder with React & Node.js...</li>
            </ul>
            <div className={styles.tags}>
              <span>React</span><span>Next.js</span><span>TypeScript</span><span>Node.js</span><span>MongoDB</span>
            </div>
          </div>
          <div className={styles.job}>
            <h3>Software Engineer Intern</h3>
            <p><strong>8 Work India</strong> | Apr 2021 – Dec 2021</p>
            <ul>
              <li>Built real-time Notification System...</li>
              <li>Implemented Upsell Plan Recommendation module...</li>
            </ul>
            <div className={styles.tags}>
              <span>React</span><span>JavaScript</span><span>REST APIs</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className={styles.card}>
          <h2><Wrench size={16}/> Technical Skills</h2>
          <div className={styles.skillsGrid}>
            <div>
              <h4>Frontend Development</h4>
              <div className={styles.tags}>
                <span>React.js</span><span>Next.js</span><span>TypeScript</span><span>HTML</span><span>CSS</span>
              </div>
            </div>
            <div>
              <h4>Backend Development</h4>
              <div className={styles.tags}>
                <span>Node.js</span><span>Express</span><span>MongoDB</span><span>Prisma ORM</span>
              </div>
            </div>
            <div>
              <h4>UI/UX & Design</h4>
              <div className={styles.tags}>
                <span>Figma</span><span>Responsive Design</span><span>Accessibility</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className={styles.card}>
          <h2>🚀 Notable Projects</h2>
          <div className={styles.project}>
            <h3>Low Code / No Code Form Builder <span>(Jan 2024)</span></h3>
            <p>Engineered a modular drag-and-drop form builder platform...</p>
            <div className={styles.tags}>
              <span>React</span><span>Redux</span><span>REST APIs</span>
            </div>
          </div>
          <div className={styles.project}>
            <h3>Business Process Manager <span>(Aug 2023)</span></h3>
            <p>Designed and developed an end-to-end Case Management System...</p>
            <div className={styles.tags}>
              <span>Node.js</span><span>PostgreSQL</span><span>Prisma</span>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className={styles.card}>
          <h2><Book size={16}/> Education</h2>
          <ul>
            <li>
              <strong>Master of Commerce (M.Com)</strong> - Barkatullah University, Bhopal (2012–2014)  
              <div className={styles.tags}><span>VVM - Vivekanand Vigyan Mahavidyalaya, Betul (M.P.)</span></div>
            </li>
            <li>
              <strong>Bachelor of Commerce (B.Com)</strong> - Barkatullah University, Bhopal (2008–2011)  
              <div className={styles.tags}><span>Government Jaywanti Haksar P.G. College, Betul (M.P.)</span></div>
            </li>
            <li>
              <strong>Higher Secondary School Certificate (HSSC - XII)</strong> - M.P. Board, Bhopal (2006–2008)  
              <div className={styles.tags}><span>Sanjeevani Higher Secondary School, Betul (M.P.)</span></div>
            </li>
            <li>
              <strong>Secondary School Certificate (SSC - X)</strong> - M.P. Board, Bhopal (2003–2006)  
              <div className={styles.tags}><span>Subhash School, Betul (M.P.)</span></div>
            </li>
          </ul>
        </section>


        {/* Awards */}
        <section className={styles.card}>
          <h2><Award size={16}/> Certifications & Awards</h2>
          <ul>
            <li>Passionate Performer Award - Axeno Consulting</li>
            <li>Pat on the Back - Axeno Consulting</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>This resume was generated on August 16, 2025 · Last updated August 18, 2025</p>
        </footer>
      </div>
    </div>
  );
}
