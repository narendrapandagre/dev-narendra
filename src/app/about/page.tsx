import Image from "next/image";
import styles from "./About.module.css";
import Link from 'next/link';
import {Target, Palette, Code, Zap, Briefcase, Settings, CircleCheck, Building, Calendar, Mail, Phone, MapPin, Star, Wrench, Book, Award } from "lucide-react";

export default function About() {
  return (
    <div className={styles.container}>
      {/* Intro */}
      <div>
        <Link href="/" className={styles.back}>← Back to Home</Link>
      </div>
      <section className={styles.intro}>
        <div className={styles.text}>
          <h1>I’m Narendra Pandagre</h1>
          <p className={styles.subtitle}>
            A passionate <strong>Full Stack Developer</strong> 
          </p>
          <p className={styles.subtitle}>  who loves building{" "}
            <strong>amazing digital experiences</strong>.
          </p>
          <p>
            Experienced UI Developer and Web Designer with 10+ years of expertise in creating visually 
            stunning, functional, and user-friendly websites. Skilled in front-end development, responsive 
            design, and UI/UX best practices. Passionate about delivering high-quality digital experiences that leave a lasting impact on users and clients....
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Let’s Chat</button>
            <button className={styles.secondaryBtn}>View My Work</button>
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.box}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className={styles.content}>
                <Image
                  src="/narendra.jpg"
                  alt="Profile"
                  width={250}
                  height={250}
                  className={styles.profileImg}
                />
              </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className={styles.section}>
        <h2>What I Do</h2>
        <p className={styles.tagline}>I specialize in creating digital solutions that make a difference</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <Target className={styles.icon} />
            </div>
            <h3>Professional Journey</h3>
            <p>
              I specialize in crafting scalable, user-friendly, and visually engaging frontend applications.
              My focus lies in building responsive UIs, delivering seamless user experiences, 
              and ensuring performance optimization across devices. I work extensively with React, Next.js, TypeScript, and modern frontend tools, turning complex ideas into interactive, accessible, and elegant web solutions....
            </p>
          </div>
          <div className={styles.card}>
            <div>
              <Target className={styles.icon} />
            </div>
            <h3>What I Do</h3>
            <ul>
              <li>Design and develop <strong>responsive, accessible, and modern UIs</strong></li>
              <li>Build <strong>scalable frontend applications</strong> using React & Next.js</li>
              <li>Create <strong>reusable components and design systems</strong></li>
              <li>Optimize apps for <strong>performance, SEO, and cross-browser compatibility</strong></li>
              <li>Integrate APIs to deliver <strong>seamless user experiences</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2>My Arsenal</h2>
        <p className={styles.tagline}>Tools and technologies I love working with</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <Palette className={styles.icon} />
            </div>
            <h3>Frontend</h3>
            <ul>
            <li>React, Next.js</li>
            <li>JavaScript, TypeScript</li>
            <li>Redux, Zustand, Context API</li>
            <li>HTML5, CSS3, SASS/SCSS</li>
            <li>Responsive Design & Cross-Browser Compatibility</li>
            <li>UI Libraries – Material UI, Chakra UI, ShadCN</li>
            <li>Styled-Components & CSS Modules</li>
            <li>Performance Optimization & SEO Best Practices</li>
          </ul>
          </div>
          <div className={styles.card}>
            <div>
              <Code className={styles.icon} />
            </div>
            <h3>Design</h3>
            <ul>
              <li>UI/UX Design Principles</li>
              <li>Figma, Adobe XD</li>
              <li>Wireframing & Prototyping</li>
              <li>Responsive & Accessible Design</li>
              <li>Design Systems & Style Guides</li>
            </ul>
          </div>
          <div className={styles.card}>
            <div>
              <Zap className={styles.icon} /> 
            </div>
            <h3>Tools</h3>
            <ul>
              <li>Git, GitHub, GitLab</li>
              <li>Docker & Kubernetes</li>
              <li>CI/CD (GitHub Actions)</li>
              <li>Jest, React Testing Library</li>
              <li>REST & GraphQL APIs</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className={styles.journey}>
        <div>

        <h2>My Journey</h2>
        <p className={styles.tagline}>The path that led me here</p>
        </div>
        <div className={styles.journeycards}>
          <div>
              <Briefcase size={30}/>
          </div>
          <div className={styles.card}>
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
          
          
                    
          </div>
        </div>
        <div className={styles.journeycards}>
          <div>
              <Briefcase size={30}/>
          </div>
          <div className={styles.card}>
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
          </div>
        </div>
      </section>

      {/* Beyond the Code */}
      <section className={styles.section}>
        <h2>Beyond the Code</h2>
        <div className={styles.tags}>
          <div className={styles.tag}>
            <span>☕</span>
            <p>Tech Enthusiast</p>
          </div>
          <div className={styles.tag}>
            <span>🌍</span>
            <p>Open Source Contributor</p>
          </div>
          <div className={styles.tag}>
            <span>📖</span>
            <p>Continuous Learner</p>
          </div>
          <div className={styles.tag}>
            <span>🎨</span>
            <p>UI/UX Designer</p> 
          </div>
          <div className={styles.tag}>
            <span>💡</span>
            <p>Problem Solver</p>
          </div>
          <div className={styles.tag}>
            <span>📚</span>
            <p>Continuous Learner</p>
          </div>
          <div className={styles.tag}>
            <span>🎵</span>
            <p>Music Lover</p>
          </div>
          <div className={styles.tag}>
            <span>🌱</span>
            <p>Gardening Enthusiast</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2>Let’s Build Something Amazing Together!</h2>
        <p>
          I'm always excited to work on new projects and collaborate with 
          passionate people. Whether you have an idea or just want to chat 
          about tech, I'd love to hear from you!
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Get In Touch</button>
          <button className={styles.secondaryBtn}>Download Resume</button>
        </div>
      </section>
    </div>
  );
}
