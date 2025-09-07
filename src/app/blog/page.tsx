"use client";
import { useState } from "react";
import Link from "next/link";
import blogs from "../blog/blogs";
import styles from "./BlogList.module.css";

// lucide-react se icons import karo
import {
  LayoutGrid,
  Cpu,
  Code2,
  BookOpen,
  Star,
  Brain,
  Briefcase,
  Lightbulb,
  ArrowRight
} from "lucide-react";

export default function BlogListPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const categories = [
    { name: "All Posts", icon: LayoutGrid },
    { name: "Technology", icon: Cpu },
    { name: "Development", icon: Code2 },
    { name: "Tutorials", icon: BookOpen },
    { name: "Best Practices", icon: Star },
    { name: "AI/ML", icon: Brain },
    { name: "Career", icon: Briefcase },
    { name: "Thoughts", icon: Lightbulb },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const inSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.desc.toLowerCase().includes(search.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    const inCategory =
      activeCategory === "All Posts" ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(activeCategory.toLowerCase())
      );

    return inSearch && inCategory;
  });

  return (
    <div className={styles.container}>
       <div>
        <Link href="/" className={styles.back}>← Back to Home</Link>
      </div>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Blogs</h1>
        <input
          type="text"
          placeholder="Search posts by title, content, or tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
      </div>

      {/* Categories */}
      <div className={styles.categories}>
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.name}
              className={`${styles.category} ${
                activeCategory === cat.name ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <Icon size={18} className={styles.categoryIcon} />
              <span>{cat.name}</span>
              <span className={styles.count}>
                {cat.name === "All Posts"
                  ? blogs.length
                  : blogs.filter((b) =>
                      b.tags.some((tag) =>
                        tag.toLowerCase().includes(cat.name.toLowerCase())
                      )
                    ).length}
              </span>
            </div>
          );
        })}
      </div>

      {/* Blog List */}
      <h2 className={styles.subheading}>
        {activeCategory} ({filteredBlogs.length})
      </h2>
      <div className={styles.grid}>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div key={blog.id} className={styles.card}>
              <div className={styles.content}>
                <span className={styles.tag}>{blog.tags[0]}</span>
                <h3 className={styles.blogTitle}>
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className={styles.desc}>{blog.desc}</p>
                <div className={styles.meta}>
                  <span>⏱ 4 min read</span>
                  <span>📅 {blog.date}</span>
                  <Link href={`/blog/${blog.slug}`} className={styles.rightIcon}><ArrowRight size={16}/> </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noPosts}>❌ No posts found</p>
        )}
      </div>

    </div>
  );
}
