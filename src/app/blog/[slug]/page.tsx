import blogs from "../blogs";
import styles from "./BlogDetails.module.css";
import Link from "next/link";
import {
  Heart,
  SaveIcon,
  Bookmark,
  Share2,
  Star,
  Brain,
  Briefcase,
  Lightbulb,
  ArrowRight
} from "lucide-react";

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <div className={styles.container}>❌ Blog not found</div>;
  }

  return (
    <div className={styles.container}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <Link href="/blog" className={styles.back}>
          ← Back to Home
        </Link>
        <div className={styles.topTime}>
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>
        <div className={styles.topIcons}>
          <Heart size={16} style={{ marginRight: 4 }} />
          <Bookmark size={16} style={{marginRight: 4}}/>
          <Share2 size={16} style={{marginRight: 4}}/>
        </div>
      </div>

      {/* Header */}
      <h1 className={styles.heading}>{blog.title}</h1>
      <div className={styles.authorBox}>
        <img src={blog.author.avatar} alt={blog.author.name} />
        <div>
          <p className={styles.authorName}>{blog.author.name}</p>
          <p className={styles.authorRole}>{blog.author.role}</p>
        </div>
      </div>

      {/* Intro */}
      <p className={styles.intro}>{blog.intro}</p>

      {/* Intro Box */}
      <div className={styles.introBox}>
        <div>
          <h3>Prerequisites</h3>
          <ul>
            {blog.introBox.prerequisites.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>What You Will Learn</h3>
          <ul>
            {blog.introBox.whatYouWillLearn.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.hrDiv}>
        <div className={styles.hrLine}></div>
        <div className={styles.dot}></div>
        <div className={styles.hrLine}></div>
      </div>

      {/* Content Sections */}
      {blog.contentSections.map((section, i) => (
        <div key={i} className={styles.section}>
          <h2>{section.heading}</h2>
          <p>{section.text}</p>
          {section.code && (
            <pre>
              <code className={`language-${section.codeLang}`}>
                {section.code}
              </code>
            </pre>
          )}
        </div>
      ))}

      {/* Tags */}
      <div className={styles.tags}>
        {blog.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
