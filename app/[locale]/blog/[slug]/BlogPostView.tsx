"use client";

import React from "react";
import Image from "next/image";
import Title from "../../../components/Title/Title";
import Text from "../../../components/Text/Text";
import Link from "../../../components/Link/Link";
import styles from "./BlogPost.module.css";
import type { BlogPost, BlogPostLocaleContent } from "@/content/posts";
import type { SupportedLocale } from "../../../i18n";
import { useTranslation } from "react-i18next";

type BlogPostViewProps = {
  post: BlogPost;
  content: BlogPostLocaleContent;
  locale: SupportedLocale;
  previous: BlogPost | null;
  next: BlogPost | null;
};

const BlogPostView: React.FC<BlogPostViewProps> = ({
  post,
  content,
  locale,
  previous,
  next,
}) => {
  const { t } = useTranslation();

  const published = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.published));

  return (
    <article className={styles.post}>
      <div className={styles.meta}>
        <span>{published}</span>
        <span>
          {post.readingMinutes} {t("blogMinutes")}
        </span>
      </div>

      <Title level={1} size="L" className={styles.title}>
        {content.title}
      </Title>

      <Text size="M" className={styles.summary}>
        {content.summary}
      </Text>

      {post.heroImage && (
        <Image
          src={post.heroImage}
          alt={post.heroAlt[locale] ?? post.heroAlt.en}
          className={styles.heroImage}
          width={900}
          height={600}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
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

      <div className={styles.nav}>
        <Link href="/blog" className={styles.navLink}>
          {t("blogNavBackToArticles")}
        </Link>
        <div className={styles.navLinks}>
          {previous && (
            <Link href={`/blog/${previous.slug}`} className={styles.navLink}>
              ← {previous.locale[locale]?.title ?? previous.locale.en.title}
            </Link>
          )}
          {next && (
            <Link href={`/blog/${next.slug}`} className={styles.navLink}>
              {next.locale[locale]?.title ?? next.locale.en.title} →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogPostView;
