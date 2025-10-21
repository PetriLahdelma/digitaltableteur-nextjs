"use client";
import React, { useMemo } from "react";
import Head from "next/head";
import styles from "./Blog.module.css";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import Link from "../../components/Link/Link";
import HelsinkiClock from "../../components/HelsinkiClock/HelsinkiClock";
import { useTranslation } from "react-i18next";
import { getPosts } from "@/content/posts";
import type { SupportedLocale } from "../../i18n";

export default function BlogIndex() {
  const { t, i18n } = useTranslation();
  const locale = useMemo(
    () => (i18n.language?.split("-")[0] as SupportedLocale) || "en",
    [i18n.language]
  );

  const posts = useMemo(() => {
    const scoped = getPosts(locale)
      .slice()
      .sort((a, b) => (a.published < b.published ? 1 : -1));

    return scoped.map((post) => ({
      title: post.content.title,
      summary: post.content.summary,
      readTime: `${post.readingMinutes} min ${t("blogRead")}`,
      href: `/blog/${post.slug}`,
    }));
  }, [locale, t]);

  return (
    <>
      <Head>
        <title>{t("blogMetaTitle")}</title>
        <meta name="description" content={t("blogMetaDescription")} />
        <meta property="og:title" content={t("blogMetaTitle")} />
        <meta property="og:description" content={t("blogMetaDescription")} />
        <meta property="og:image" content="/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("blogMetaTitle")} />
        <meta name="twitter:description" content={t("blogMetaDescription")} />
        <meta name="twitter:image" content="/logo512.png" />
      </Head>
      <div className={styles.blog}>
        <div>
          <Title level={1} size="L" className={styles.heading}>
            {t("blogArticlesTitle")}
          </Title>
          <Text size="M">{t("blogHeroDescription")}</Text>
          <div className={styles.clock}>
            <HelsinkiClock />
          </div>
        </div>
        <div className={styles.list}>
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className={styles.card}>
              <Title as="h2" level={2} size="M" className={styles.title}>
                {post.title}
              </Title>
              <Text size="M" className={styles.lead}>
                {post.summary}
              </Text>
              <div className={styles.meta}>
                <span className={styles.readTime}>{post.readTime}</span>
                <span className={styles.readMore}>{t("blogReadMore")}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
