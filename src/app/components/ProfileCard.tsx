"use client";   // 👈 sabse pehli line yeh add karo

// src/components/ProfileCard.tsx
import styles from '../styles/ProfileCard.module.css';
interface ProfileCardProps {
  className?: string;
}
import { useEffect, useState } from "react";
import { MapPin } from 'lucide-react';

export default function ProfileCard({ className }: ProfileCardProps) {
    const texts = ["Frontend", "UI/UX Designer", "UI Development"]; // span ke liye texts
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setAnimate(false);
      }, 500); // slide out ke baad change hoga
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
     <div className={className}>
      <div className={styles.card}>
        <div className={styles.one}>
          <div className={styles.profile}>
            <div>
              <img
                src="/avatar.png"
                alt="Profile"
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
          <p className={styles.ptext}>I build 
            <span className={`${styles.slideText} ${animate ? styles.slideOut : styles.slideIn}`}>
              {texts[index]}
            </span>
          </p>
          <p>Hello, I'm Narendra! A 35 year old developer based in Indore - India.</p>
          <div className={styles.taglineContainer}>
            <p className={styles.tagline}>"I make divs align like stars in a constellation."</p>
            <p className={styles.status}>
              <span></span>
              Open to interesting projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
