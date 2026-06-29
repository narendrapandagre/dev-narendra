"use client";

import styles from '../styles/ProfileCard.module.css';
import { useEffect, useState } from "react";
import { MapPin } from 'lucide-react';
import Image from 'next/image';

interface ProfileCardProps {
  className?: string;
}

const TEXTS = ["Frontend Interfaces", "UI/UX Designs", "Scalable Web Apps"];

const STATS = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "30+" },
  { label: "Tech Stacks", value: "10+" },
];

export default function ProfileCard({ className }: ProfileCardProps) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setAnimate(true);
      timeoutId = setTimeout(() => {
        setIndex((prev) => (prev + 1) % TEXTS.length);
        setAnimate(false);
      }, 500);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={className}>
      <div className={styles.card}>
        <div className={styles.one}>
          <div className={styles.profile}>
            <div>
              <Image
                src="/avatar.png"
                alt="Profile"
                width={100}
                height={100}
                className={styles.avatar}
              />
            </div>
            <div>
              <h2>Narendra Pandagre</h2>
              <p>narendrapanda22@gmail.com</p>
              <p>Frontend Developer | Open to projects</p>
            </div>
          </div>
          <div className={styles.links}>
            <div>
              <a href="/resume">Resume</a> | <a href="/about">About Me</a>
            </div>
          </div>
        </div>
        <div className={styles.location}>
          <p><MapPin className={styles.locationIcon} size={14} /> Indore, India</p>
        </div>
        <div className={styles.two}>
          <p className={styles.ptext}>
            I build{' '}
            <span
              className={styles.slideText}
              style={{
                opacity: animate ? 0 : 1,
                transform: animate ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                color: '#3b82f6',
                fontWeight: 600,
                display: 'inline-block',
              }}
            >
              {TEXTS[index]}
            </span>
          </p>
          <p>Hello, I'm Narendra! A Frontend Developer from Indore, India, with hands-on experience in React, Angular, and Next.js — turning ideas into smooth, user-friendly interfaces.</p>
          <div className={styles.taglineContainer}>
            <p className={styles.tagline}>"Making the web a little less ugly, one component at a time."</p>
            <p className={styles.status}>
              <a href="#contact" className={styles.status}>
                <span></span>
                Open to interesting projects
              </a>
            </p>
          </div>
          <div className={styles.statsRow}>
            {STATS.map((stat, i) => (
              <div
                className={styles.statItem}
                key={stat.label}
                style={i !== STATS.length - 1 ? { borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '32px' } : undefined}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}