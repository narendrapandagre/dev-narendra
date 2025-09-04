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
  GitBranchIcon,
} from "lucide-react";

import projects from "./projectsData";
import { useRouter } from "next/navigation"; // ✅ Next.js navigation

export default function ProjectsShowcase() {
  const router = useRouter(); // ✅ ab yahan hook sahi jagah pe hai

  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  // ✅ convert title → slug
  const toSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div className={styles.container}>
      <a href="/" className={styles.backLink}>
        ← Back to Home
      </a>
      <h1 className={styles.title}>Projects Showcase</h1>

      {/* 🔍 Search Bar */}
      <div className={styles.searchBar}>
        <Search size={18} className={styles.icon} />
        <input
          type="text"
          placeholder="Search projects by name, tech stack, or description..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
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

      {/* 📂 Projects Layout */}
      <div className={view === "grid" ? styles.grid : styles.list}>
        {filtered.length > 0 ? (
          filtered.map((proj) => (
            <div key={proj.id} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img
                  src={`${proj.image}`}
                  alt={proj.title}
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.typeBadge}>
                <div className={styles.projectFeatured}>
                  <Star size={12} /> Featured
                </div>
                <div
                  className={`${styles.projectStatus} ${
                    styles[proj.status.toLowerCase().replace(" ", "")]
                  }`}
                >
                  {proj.status}
                </div>
              </div>

              <div className={styles.cardHeader}>
                {proj.featured && (
                  <span
                    className={`${styles.projectType} ${
                      styles[proj.type.toLowerCase()]
                    }`}
                  >
                    {proj.type}
                  </span>
                )}
                <span className={styles.date}>
                  <Calendar size={12} /> {proj.date}
                </span>
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
                <button
                  className={styles.viewBtn}
                  onClick={() =>
                    router.push(`/projects/${toSlug(proj.slug)}`) // ✅ ab yahan sahi slug use ho raha hai
                  }
                >
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
            <p>
              No projects match your current filters. Try adjusting your search
              terms or clearing the filters.
            </p>
            <button
              className={styles.refreshBtn}
              onClick={() => setQuery("")}
            >
              Clear Search & Refresh <RefreshCw size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
