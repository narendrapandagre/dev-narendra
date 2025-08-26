import styles from "./Contact.module.css";
import {Download,Clock,Globe,ExternalLink, CircleCheckBig, Heart, Rocket, Target, Palette, Code, Zap, Briefcase, Settings, CircleCheck, Building, Calendar, Mail, Phone, MapPin, Star, Wrench, Book, Award, GiftIcon, Timer, TimerIcon } from "lucide-react";

const socials = [
  { name: "Github", handle: "@narendrapandagre", link: "https://github.com/narendrapandagre" },
  { name: "Linkedin", handle: "@narendra-pandagre", link: "www.linkedin.com/in/narendra-pandagre" },
  { name: "Website", handle: "@narendrapandagre", link: "https://dev-narendra.vercel.app/" },
];

export default function Contact() {
  return (
    <div className={styles.container}>
      <a href="/" className={styles.backLink}>← Back to Home</a>

      <div className={styles.header}>
        <h1>Let’s Build Something Amazing Together</h1>
        <p className={styles.subtitle}>
          Ready to bring your ideas to life? Let’s connect!
        </p>
        <p className={styles.description}>
          I’m always excited to work on new projects and collaborate with passionate people.
          Whether you’re looking to build a cutting-edge web application, need expertise
          in microservices architecture, or want to create a powerful low-code platform,
          I’d love to hear from you.
        </p>
        <p className={styles.description}>
          With 3+ years of experience in full-stack development and a proven track
          record of reducing workflows by 40%, I specialize in creating scalable
          solutions that make a real impact. Let’s turn your vision into reality!
        </p>
        <button className={styles.availableBtn}>
            <CircleCheckBig size={14}/> Available for Work - 24-48 hours
        </button>
      </div>

      <div className={styles.grid}>
        {/* Left Side - Form */}
        <div className={styles.card}>
          <h2>Send me a message</h2>
          <p>Have a project in mind? Let’s discuss it! Fill out the form below and I’ll get back to you within 24 hours.</p>

          <form className={styles.form}>
            <label>Name</label>
            <input type="text" placeholder="Your full name" />

            <label>Email</label>
            <input type="email" placeholder="your.email@example.com" />

            <label>Phone (Optional)</label>
            <input type="text" placeholder="+1 (555) 123-4567" />

            <label>Message</label>
            <textarea placeholder="Tell me about your project..." rows={5}></textarea>

            <button type="submit" className={styles.sendBtn}>Send Message</button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className={styles.card}>
          <h2>Get in touch</h2>
          <p>I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <div className={styles.infoBox}>
            <div className={styles.infoIcon}>
                <span><Mail size={16}/></span> 
            </div>
            <div>
              <p><strong>Phone:</strong> </p>
              <p>+91 7011769467</p>
            </div>
          </div>
        <div className={styles.infoBox}>
            <div className={styles.infoIcon}>
                <span><Phone size={16}/></span>
             </div>
            <div>
            <p><strong>Email:</strong></p>
             <p> narendrapandagre22@gmail.com</p>
            </div>
        </div>
        <div className={styles.infoBox}>
            <div className={styles.infoIcon}>
                <span><MapPin size={16}/></span>
            </div>
            <div>
              <p><strong>Location:</strong> </p>
              <p>Indore, India</p>
            </div>
        </div>
        <div className={styles.infoBox}>
            <div className={styles.infoIcon}>
                <span><Calendar size={16}/></span>
            </div>
            <div>
              <p><strong>Response Time:</strong> </p>
              <p>24-48 hours</p>
            </div>
        </div>
          <div className={styles.socialSection}>
            <h3>Follow me</h3>
            <div className={styles.socials}>
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <div className={styles.left}>
                <span className={styles.leftIcon}><Globe size={18} /></span>
                <div className={styles.text}>
                  <span className={styles.title}>{item.name}</span>
                  {item.handle && (
                    <span className={styles.handle}>{item.handle}</span>
                  )}
                </div>
              </div>
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
          </div>
        </div>
      </div>

      <div className={styles.lastsection}>
        <div className={styles.card}>
          <div className={styles.collaborate}>
            <div>
              <span><Clock size={16} color="#4cafef" /></span>
            </div>
            <div>
              <h2>Let’s Collaborate</h2>
            </div>
          </div>
          <div className={styles.collaborateContent}>
            <p>
              I’m passionate about working on challenging projects that make a real impact.
              Whether you’re a startup looking to build scalable applications, an enterprise
              needing workflow automation, or a team requiring microservices expertise, I’d love to collaborate.
            </p>
            <p>
              My approach focuses on understanding your business needs, delivering high-quality solutions,
              and ensuring long-term success. I believe in clear communication, agile development, and
              creating systems that grow with your business.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <h2>Quick Facts</h2>
          <ul>
            <li>⚡ Usually respond within 24-48 hours</li>
            <li>🏆 Passionate Performer Award winner at Axeno Consulting</li>
            <li>✅ Proven track record of 40% workflow reduction</li>
            <li>💻 Expertise in modern tech stack (React, Node.js, TypeScript)</li>
            <li>☕ Fueled by tea and passion for innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
