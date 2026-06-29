"use client";
// src/components/ConnectCard.tsx
import styles from '../styles/ConnectCard.module.css'
import ContactModal from './ContactModal'; // ✅ ab component se import
import { useState } from 'react';

interface ConnectCardProps {
  className?: string;
}
export default function ConnectCard({ className }: ConnectCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={className}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h3>Let's Connect</h3>
          <p>Let's work together</p>
          <button
            className={styles.hire}
            onClick={() => {
              window.location.href =
                "mailto:narendrapanda22@gmail.com?subject=Project Inquiry&body=Hi Narendra,";
            }}
          >
            <i className={`fas fa-briefcase ${styles.icon}`} />
            Hire Me
          </button>


          <button className={styles.contact} onClick={() => setShowModal(true)}>
            <i className={`far fa-envelope ${styles.icon}`} />
            Contact
          </button>
        </div>
        
        <div className={styles.icons}>
          <p>Follow & Connect</p>
          <a href="https://linkedin.com/in/narendra-pandagre" target="_blank">
            <i className={`fab fa-linkedin ${styles.icon}`} />
          </a>
          <a href="https://github.com/narendrapandagre" target="_blank">
            <i className={`fab fa-github ${styles.icon}`} />
          </a>
          {/* <a href="https://twitter.com" target="_blank">
            <i className={`fab fa-twitter ${styles.icon}`} />
          </a> */}
          <a href="mailto:narendrapanda22@gmail.com">
            <i className={`fas fa-envelope ${styles.icon}`} />
          </a>
        </div>
        
      </div>
      {/* ✅ Modal render */}
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
