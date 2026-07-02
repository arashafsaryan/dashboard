import { useEffect, useState } from "react";
import { settingsNavigation } from "../../data/settingsNavigation";

import styles from "./SettingsNavigation.module.css";

export default function SettingsNavigation() {
  const [activeSection, setActiveSection] = useState("general");
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <nav className={styles.navigation}>
      {settingsNavigation.map((section) => (
        <button
          key={section.id}
          type="button"
          className={`${styles.link} ${
            activeSection === section.id ? styles.active : ""
          }`}
          onClick={() => handleScroll(section.id)}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}
