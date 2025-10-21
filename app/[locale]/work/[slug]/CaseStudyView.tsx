"use client";

import React from "react";
import Image from "next/image";
import Title from "../../../components/Title/Title";
import Text from "../../../components/Text/Text";
import Link from "../../../components/Link/Link";
import styles from "./CaseStudy.module.css";
import type {
  CaseStudy,
  CaseStudyLocaleContent,
} from "@/content/works";
import type { SupportedLocale } from "../../../i18n";
import { useTranslation } from "react-i18next";

type CaseStudyViewProps = {
  study: CaseStudy;
  content: CaseStudyLocaleContent;
  locale: SupportedLocale;
  previous: CaseStudy | null;
  next: CaseStudy | null;
};

const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  study,
  content,
  locale,
  previous,
  next,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.caseStudy}>
      <section className={styles.caseHeroSection}>
        <div className={styles.heroText}>
          <Title level={1} size="L">
            {content.title}
          </Title>
          {content.tagline && (
            <Text size="M">{content.tagline}</Text>
          )}
          <Text size="M" className={styles.heroSummary}>
            {content.summary}
          </Text>
          <div className={styles.caseBadges}>
            <span className={styles.badge}>{study.year}</span>
            {study.services.map((service) => (
              <span key={service} className={styles.badge}>
                {service}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={study.heroImage || study.featuredImage}
            alt={study.heroAlt[locale] ?? study.heroAlt.en}
            width={640}
            height={450}
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>
      </section>

      {study.gallery.length > 0 && (
        <div className={styles.gallery}>
          {study.gallery.map((item) => (
            <div key={item.src} className={styles.galleryItem}>
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={400}
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              ) : (
                <video src={item.src} autoPlay loop muted playsInline />
              )}
            </div>
          ))}
        </div>
      )}

      {content.sections.map((section) => (
        <section key={section.heading} className={styles.section}>
          <Title level={2} size="M" className={styles.sectionHeading}>
            {section.heading}
          </Title>
          <div className={styles.sectionBody}>
            {section.body.map((paragraph, index) => (
              <Text key={index} size="M">
                {paragraph}
              </Text>
            ))}
          </div>
        </section>
      ))}

      {content.highlights.length > 0 && (
        <ul className={styles.metaList}>
          {content.highlights.map((highlight) => (
            <li key={highlight.label}>
              <strong>{highlight.label}:</strong> {highlight.items.join(", ")}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.nav}>
        <Link href="/work" className={styles.navLink}>
          {t("workNavBackToWork")}
        </Link>
        <div className={styles.navLinks}>
          {previous && (
            <Link href={`/work/${previous.slug}`} className={styles.navLink}>
              ← {previous.locale[locale]?.title ?? previous.locale.en.title}
            </Link>
          )}
          {next && (
            <Link href={`/work/${next.slug}`} className={styles.navLink}>
              {next.locale[locale]?.title ?? next.locale.en.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyView;
