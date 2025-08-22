// src/app/resume/page.tsx
import styles from './Resume.module.css';
import Link from 'next/link';
import {Code, Settings, CircleCheck, Building, Calendar, Mail, Phone, MapPin, Star, Briefcase, Wrench, Book, Award } from "lucide-react";

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
          <a href="/narendrapandagre.pdf" download className={styles.download}>
            ⬇ Download PDF
          </a>
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
            Experienced UI Developer and Web Designer with 10+ years of expertise in creating
            visually stunning, functional, and user-friendly websites. Skilled in front-end
            development, responsive design, and UI/UX best practices. Passionate about
            delivering high-quality digital experiences that leave a lasting impact on users
            and clients.
          </p>
        </section>

        {/* Experience */}
        <section className={styles.card}>
          <h2><Briefcase size={16}/> Professional Experience</h2>
          <div className={styles.job}>
            <div className={styles.jobHeader}>
              <div>
                <h3>Front-End Developer & UI Developer</h3>
                <p><strong><Building size={16}/> Engineer Philosophy Web Services Pvt. Ltd. | Indore, India</strong></p>
              </div>
              <div>
                <span><Calendar size={16}/> March 2017 – Present</span>
              </div>
            </div>
            
            <ul>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Developed and maintained dynamic web applications using Angular,
                      TypeScript, and Bootstrap.
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>
                      Worked closely with clients to understand requirements and create user-centric designs.
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>
                      Designed responsive interfaces that performed seamlessly across all devices and screen sizes.
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>
                      Conducted usability testing and refined designs based on real user feedback.
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>
                      Translated Figma prototypes into pixel-perfect, high-quality code following best practices.
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>
                      Built dashboards used by 500+ users, improved analysis by 20%.
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <p>Technologies Used:</p>
            <div className={styles.tags}>
              <span>Angular</span> <span>React</span> <span>Next.js</span> <span>JavaScript</span>
              <span>AngularJS</span><span>TypeScript</span><span>Boostrap</span>
              <span>Mapbox</span><span>HMTL5</span>
              <span>CSS3</span><span>PhotoShop</span><span>GIT</span><span>Jira</span>
            </div>
          </div>


          <div className={styles.job}>
            <div className={styles.jobHeader}>
              <div>
                <h3>Web Designer and Graphic Designer</h3>
                <p><strong><Building size={16}/> SSV Technologis Web Services Pvt. Ltd. | Indore, India</strong></p>
              </div>
              <div>
                <span><Calendar size={16}/> Dec 2014 – March 2017</span>
              </div>
            </div>
            <ul>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Designed clean, modern website layouts using Adobe Photoshop (PSD).</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span> Converted PSD designs into fully responsive HTML pages using HTML5, CSS3,
and Bootstrap.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Designed responsive websites using HTML, CSS, Bootstrap for 25+ clients.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Ensured cross-browser compatibility and mobile responsiveness
during development.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Collaborated with developers and project managers to meet client
design requirements and deadlines.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Followed best practices for semantic HTML and organized CSS
structure.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Worked on multiple client projects, delivering pixel-perfect frontend
implementations.</span>
                  </div>
                </div>
              </li>
            </ul>
            <p>Technologies Used:</p>
            <div className={styles.tags}>
              <span>Adobe Photoshop (PSD)</span><span>HTML5</span><span>CSS3</span>
              <span>Bootstrap</span><span>Corel Draw</span><span>WordPress</span>
            </div>
        </section>
          </div>

        {/* Skills */}
        <section className={styles.card}>
          <h2><Code size={16}/> Technical Skills</h2>
          <div className={styles.skillsGrid}>
            <div>
              <h4><Settings size={16}/> Frontend Development</h4>
              <div className={styles.tags}>
                <span>React.js</span><span>Next.js</span>
                <span>Angular</span> <span>JavaScript</span>
                <span>TypeScript</span><span>Tailwind CSS</span>
                <span>Bootstrap 4.6</span><span>Angular Material</span>
                <span>Mapbox</span><span>HTML5</span><span>CSS3</span>
                <span>SASS</span>
                <span>Responsive Design</span><span>Cross-browser Compatibility</span>
                <span>UI/UX Best Practices</span><span>Angular CLI</span>
              </div>
            </div>
            
            <div>
              <h4><Settings size={16}/> UI/UX & Design</h4>
              <div className={styles.tags}>
                <span>Figma</span><span>Responsive Design</span><span>Accessibility</span>
                <span>Adobe Photoshop</span><span>Cross-browser Compatibility</span>
                <span>UI/UX Best Practices</span><span>Wireframing</span>
                <span>Prototyping</span><span>Graphic Design</span>
                <span>Corel Draw</span><span>Web Design</span>
              </div>
            </div>

            <div>
              <h4><Settings size={16}/> Tools & Technologies</h4>
              <div className={styles.tags}>
                <span>Git & GitHub</span><span>Jira</span>
                <span>REST APIs</span>
              </div>
            </div>

            <div>
              <h4><Settings size={16}/> Performance & Optimization</h4>
              <div className={styles.tags}>
                <span>Git & GitHub</span><span>Jira</span>
                <span>REST APIs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className={styles.card}>
          <h2>🚀 Notable Projects</h2>
          <div className={styles.project}>
            <div className={styles.jobHeader}>
              <div>
                <h3>Xpower Platform - Xcellen.com</h3>
                <p><strong><Building size={16}/> Front-End Developer & UI Developer</strong></p>
              </div>
              <div>
                <span><Calendar size={16}/> March 2017 – Present</span>
              </div>
            </div>
            
            <ul>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Developed responsive and interactive user interfaces for Xpower, a sales force effectiveness platform for the life sciences industry, using Angular 14, HTML, CSS and JavaSript</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Territory Management (Feb 2023 - Present): Built geospatial dashboards with
                    Mapbox and data tables with ag Grid, improving territory optimization and
                    analysis.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span> Customer Targeting (June 2020 - Present): Designed data-driven UI
                      components using Plotly Charts and UI Grid, enhancing customer
                      segmentation strategies.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Sales Target Setting (STS) (June 2020 - Feb 2023): Created intuitive interfaces
                    with Angular JS and JavaScript, streamlining sales target allocation.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span> Sales Incentive Planning (SIP) (Feb 2023 - Aug 2024): Developed incentive
                      planning features with Node.js and Bootstrap 4.6, boosting sales motivation/</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span> Managed code versioning with Git (GitHub) and tracked project progress using
                      Jira in an Agile environment.
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span> Integrated frontend with backend APIs using Node.js, ensuring seamless
                      functionality.
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Achievements: Improved user experience through optimized UI designs and
                        delivered projects on time.
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <p>Technologies Used:</p>
            <div className={styles.tags}>
              <span>Angular</span> <span>React</span> <span>Next.js</span> <span>JavaScript</span>
              <span>AngularJS</span><span>TypeScript</span><span>Boostrap</span>
              <span>Mapbox</span><span>HMTL5</span>
              <span>CSS3</span><span>PhotoShop</span><span>GIT</span><span>Jira</span>
            </div>
          </div>
          
          <div className={styles.project}>
            <div className={styles.jobHeader}>
              <div>
                <h3>IGIS MAP - Interactive Web Maps</h3>
                <p><strong><Building size={16}/> Web Designer and UI Developer</strong></p>
              </div>
              <div>
                <span><Calendar size={16}/> March 2017 – Jun 2020</span>
              </div>
            </div>
            <ul>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Description: Tool which makes beautiful interactive web maps with
powerful functionality that convey value and insights.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span> Responsibilities: Designed and developed custom websites using
Angular 8, Angular 14, HTML, CSS, JavaScript, Bootstrap 4.6, and Angular Material, created wireframes, mockups, and prototypes.
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobText}>
                  <div>
                    <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
                  </div>
                  <div>
                    <span>Tools: Photoshop, Visual Studio.</span>
                  </div>
                </div>
              </li>
            </ul>
            <p>Technologies Used:</p>
            <div className={styles.tags}>
              <span>Adobe Photoshop (PSD)</span><span>HTML5</span><span>CSS3</span>
              <span>Bootstrap</span><span>Corel Draw</span><span>WordPress</span>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className={styles.education}>
          <h2><Book size={16}/> Education</h2>
          <div className={styles.educationBox}>
            <div className={styles.jobHeader}>
              <div>
                <h3>Master of Commerce (M.Com)</h3>
                <p><strong><Building size={16}/> Barkatullah University, Bhopal</strong></p>
                <p>Government Jaywanti Haksar P.G. College, Betul (M.P.)</p>
              </div>
              <div>
                <span><Calendar size={16}/> 2012 – 2014</span>
              </div>
            </div>
            <div className={styles.jobHeader}>
              <div>
                <h3>Bachelor of Commerce (B.Com)</h3>
                <p><strong><Building size={16}/> Barkatullah University, Bhopal</strong></p>
                <p>VVM - Vivekanand Vigyan Mahavidyalaya, Betul (M.P.)</p>
              </div>
              <div>
                <span><Calendar size={16}/> 2008 – 2011</span>
              </div>
            </div>
          </div>
          <div className={styles.educationBox}>
            <div className={styles.jobHeader}>
              <div>
                <h3>Higher Secondary School Certificate (HSSC - XII)</h3>
                <p><strong><Building size={16}/> M.P. Board, Bhopal</strong></p>
                <p>Sanjeevani Higher Secondary School, Betul (M.P.)</p>
              </div>
              <div>
                <span><Calendar size={16}/> 2006 – 2008</span>
              </div>
            </div>
            <div className={styles.jobHeader}>
              <div>
                <h3>Secondary School Certificate (SSC - X)</h3>
                <p><strong><Building size={16}/> M.P. Board, Bhopal</strong></p>
                <p>Subhash School, Betul (M.P.)</p>
              </div>
              <div>
                <span><Calendar size={16}/> 2003 – 2006</span>
              </div>
            </div>
          </div>
        </section>


        {/* Awards */}
        <section className={styles.card}>
          <h2><Award size={16}/> Certifications & Awards</h2>
          <div className={styles.certified}>
            <div className={styles.jobHeader}>
              <div>
                <h3>Certified Web Designer and Graphic Designer</h3>
                <p><strong><Building size={16}/> Arise Multimedia</strong></p>
              </div>
              <div>
                <span><Calendar size={16}/> 2014</span>
              </div>
            </div>
            <div className={styles.jobText}>
              <div>
                <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
              </div>
              <div>
                <span>Gained expertise in web design principles, including layout, typography, and color theory.</span>
              </div>
            </div>

            <div className={styles.jobText}>
              <div>
                <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
              </div>
              <div>
                <span>Designed and implemented responsive websites using HTML5, CSS3, and JavaScript.</span>
              </div>
            </div>

            <div className={styles.jobText}>
              <div>
                <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
              </div>
              <div>
                <span>Created UI assets, logos, and branding materials using Photoshop and CorelDRAW.</span>
              </div>
            </div>

            <div className={styles.jobText}>
              <div>
                <CircleCheck style={{ stroke: "green", fill: "none" }} width={16} height={16} />
              </div>
              <div>
                <span>Completed real-world projects combining web design and graphic design best practices.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>This resume was generated on August 16, 2025 · Last updated August 18, 2025</p>
        </footer>
      </div>
    </div>
  );
}
