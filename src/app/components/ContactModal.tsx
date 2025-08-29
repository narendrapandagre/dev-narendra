"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/ContactModal.module.css";
import { Mail, Phone, User2Icon, MessageSquare, Send} from "lucide-react";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Message sent successfully!");
          form.current?.reset();
          onClose();
        },
        (error) => {
          setLoading(false);
          alert("❌ Failed: " + error.text);
        }
      );
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>✖</button>

        <h2 className={styles.title}>Get in Touch</h2>

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <div className={styles.labelDiv}>
                <div>
                  <User2Icon size={14}/>
                </div>
                <div>
                <label>Name</label>    
                </div>
              </div>
              <input type="text" name="user_name" placeholder="Your full name" required />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.labelDiv}>
                <div>
                  <Mail size={14}/>
                </div>
                <div>
                <label>Email</label>    
                </div>
              </div>
              <input type="email" name="user_email" placeholder="your.email@example.com" required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.labelDiv}>
                <div>
                  <Phone size={14}/>
                </div>
                <div>
                <label>Phone (Optional)</label>    
                </div>
              </div>
            <input type="text" name="user_phone" placeholder="+1 (555) 123-4567" />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.labelDiv}>
                <div>
                  <MessageSquare size={14}/>
                </div>
                <div>
                <label>Message</label>    
                </div>
            </div>
            <textarea
              name="message"
              placeholder="Tell me about your project, goals, timeline, or any questions you might have..."
              rows={5}
              required
            ></textarea>
            <span className={styles.counter}>0/1000</span>
          </div>

          <button type="submit" className={styles.sendBtn} disabled={loading}>
            {loading ? (
              "Sending..."
            ) : (
              <>
                <Send size={14} className="inline-block m-1" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
