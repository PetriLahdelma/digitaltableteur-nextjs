"use client";
import React, { useMemo } from "react";
import Button from "../Button/Button";
import { MdArrowBack, MdArrowForward, MdDescription } from "react-icons/md";
import styles from "./blognav.module.css";
import { useRouter, usePathname, useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getPosts } from "@/content/posts";
import type { SupportedLocale } from "../../i18n";

interface BlogNavProps {
  currentSlug?: string;
}

const BlogNav: React.FC<BlogNavProps> = ({ currentSlug }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const locale = useMemo(
    () => (i18n.language?.split("-")[0] as SupportedLocale) || "en",
    [i18n.language]
  );

  const currentLocale =
    typeof params?.locale === "string" ? params.locale : locale;

  const blogPages = useMemo(() => {
    const posts = getPosts(locale);
    return posts
      .sort((a, b) => (a.published < b.published ? 1 : -1))
      .map((post) => ({
        path: `/${currentLocale}/blog/${post.slug}`,
        slug: post.slug,
        title: post.content.title,
      }));
  }, [locale, currentLocale]);

  const currentIndex = useMemo(() => {
    if (currentSlug) {
      return blogPages.findIndex((p) => p.slug === currentSlug);
    }
    return blogPages.findIndex((p) => pathname.endsWith(p.slug));
  }, [blogPages, currentSlug, pathname]);
  return (
    <>
      <div className={styles.blogNavBar}>
        <Button
          variant="tertiary"
          size="m"
          icon={<MdDescription />}
          onClick={() => router.push(`/${currentLocale}/blog`)}
        >
          {t("blogNavBackToArticles")}
        </Button>
        <div className={styles.rightNavGroup}>
          <Button
            variant="tertiary"
            size="m"
            icon={<MdArrowBack />}
            disabled={currentIndex <= 0}
            onClick={() => {
              if (currentIndex > 0)
                router.push(blogPages[currentIndex - 1].path);
            }}
          >
            {t("blogNavPrev")}
          </Button>
          <Button
            variant="tertiary"
            size="m"
            endIcon={<MdArrowForward />}
            disabled={currentIndex === blogPages.length - 1}
            onClick={() => {
              if (currentIndex < blogPages.length - 1)
                router.push(blogPages[currentIndex + 1].path);
            }}
          >
            {t("blogNavNext")}
          </Button>
        </div>
      </div>
      <hr className={styles.hrLine} />
    </>
  );
};

export default BlogNav;
