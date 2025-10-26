import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "primary" | "secondary" | "accent" | "transparent";
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = "",
  padding = "md",
  background = "transparent"
}) => {
  return (
    <section className={`${styles.section} ${styles[padding]} ${styles[background]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;