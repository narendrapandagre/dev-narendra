"use client";
import { useState } from "react";
import styles from "./ProjectsShowcase.module.css";
import {
  Search,
  Grid,
  List,
  Filter,
  ExternalLink,
  RefreshCw,
  Folder,
  Star,
  Calendar,
  Github,
  GitBranchIcon,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CryptoVault – Enterprise-Grade",
    desc: "A secure, client-side encryption and decryption vault.",
    type: "other",
    status: "completed",
    date: "Aug 2025",
    featured: true,
    image: "project-1.webp",
    tags: ["ReactJS", "TypeScript", "Tailwind CSS", "AES-GCM"],
  },
  {
    id: 2,
    title: "Low Code Form Builder",
    desc: "A modular low-code form builder web app.",
    type: "website",
    status: "completed",
    date: "Aug 2025",
    featured: true,
    image: "project-2.webp",
    tags: ["React", "NodeJS", "TypeScript", "Material UI"],
  },
  {
    id: 3,
    title: "InstaPay",
    desc: "A modern digital payment platform.",
    type: "website",
    status: "in progress",
    date: "Jul 2025",
    featured: true,
    image: "project-3.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Web Portfolio",
    desc: "My personal developer portfolio.",
    type: "website",
    status: "in progress",
    date: "Jul 2025",
    featured: true,
    image: "project-4.webp",
    tags: ["Next.js", "TypeScript"],
  },
  {
    id: 5,
    title: "EasyTodo",
    desc: "A minimal, fast, and aesthetic todo app.",
    type: "website",
    status: "completed",
    date: "Nov 2024",
    featured: true,
    image: "project-5.webp",
    tags: ["React.js", "MUI"],
  },
];

export default function ProjectsShowcase() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid"); // ✅ view state

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
  <div className={styles.container}>
    <a href="/" className={styles.backLink}>← Back to Home</a>
    <h1 className={styles.title}>Projects Showcase</h1>

    {/* Search Bar */}
    <div className={styles.searchBar}>
      <Search size={18} className={styles.icon} />
      <input
        type="text"
        placeholder="Search projects by name, tech stack, or description..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* ✅ toggle buttons */}
      <Grid
        size={18}
        className={`${styles.icon} ${view === "grid" ? styles.active : ""}`}
        onClick={() => setView("grid")}
      />
      <List
        size={18}
        className={`${styles.icon} ${view === "list" ? styles.active : ""}`}
        onClick={() => setView("list")}
      />
      <Filter size={18} className={styles.icon} />
    </div>

    {/* Projects Layout */}
    <div className={view === "grid" ? styles.grid : styles.list}>
      {filtered.length > 0 ? (
        filtered.map((proj) => (
          <div key={proj.id} className={styles.card}>
            <div className={styles.cardImageWrapper}>
                <img
                  src={`project-${proj.id}.webp`}
                  alt={proj.title}
                  className={styles.cardImage}
                />
            </div>
            <div className={styles.typeBadge}>
              <div className={styles.projectFeatured}><Star size={12} /> Featured</div>
              <div className={`${styles.projectStatus} ${styles[proj.status.toLowerCase().replace(" ", "")]}`}>{proj.status}</div>
            </div>
            <div className={styles.cardHeader}>
              {proj.featured && <span className={`${styles.projectType} ${styles[proj.type.toLowerCase()]}`}>{proj.type}</span>}
              <span className={styles.date}><Calendar size={12}/> {proj.date}</span>
            </div>

            <h2 className={styles.cardTitle}>{proj.title}</h2>
            <p className={styles.desc}>{proj.desc}</p>

            <div className={styles.tags}>
              {proj.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.cardFooter}>
              <button className={styles.viewBtn}>
                View Details <ExternalLink size={14} />
              </button>
              <div className={styles.footerIcons}>
                <button className={styles.iconBtn}>
                  <ExternalLink size={14} />
                </button>
                <button className={styles.iconBtn}>
                  <GitBranchIcon size={14} />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noData}>
            <div className={styles.noDataIcon}>
                <Folder size={48} />
            </div>
            <h4>🚀 No Projects Found</h4>
            <p>No projects match your current filters. Try adjusting your search terms or clearing the filters.</p>
            <button className={styles.refreshBtn} onClick={() => setQuery('')}>
              Clear Search & Refresh <RefreshCw size={14} />
            </button>
        </div>
      )}
    </div>
  </div>
);
}