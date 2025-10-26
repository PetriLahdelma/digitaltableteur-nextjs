"use client";

import React from "react";
import Image from "next/image";
import Title from "../../../components/Title/Title";
import Text from "../../../components/Text/Text";
import BlogNav from "../../../components/BlogNav/BlogNav";
import SocialShareSection from "../../../components/SocialShare/SocialShareSection";
import styles from "./BlogPost.module.css";
import type { BlogPost, BlogPostLocaleContent } from "@/content/posts";
import type { SupportedLocale } from "../../../i18n";
import { useTranslation } from "react-i18next";

type BlogPostViewProps = {
  post: BlogPost;
  content: BlogPostLocaleContent;
  locale: SupportedLocale;
};

const BlogPostView: React.FC<BlogPostViewProps> = ({
  post,
  content,
  locale,
}) => {
  const { t } = useTranslation();

  const published = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.published));

  return (
    <article className={styles.post}>
      <BlogNav currentSlug={post.slug} />

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

      <SocialShareSection
        url={`${window.location.origin}/blog/${post.slug}`}
        title={content.title}
      />
    </article>
  );
};

export default BlogPostView;
