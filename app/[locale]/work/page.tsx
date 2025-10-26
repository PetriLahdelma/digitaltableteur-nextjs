"use client";
import React, { useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Work.module.css";
import Link from "../../components/Link/Link";
import { useTranslation } from "react-i18next";
import type { SupportedLocale } from "../../i18n";
import { getCaseStudies } from "@/content/works";

const Work = () => {
  const { t, i18n } = useTranslation();
  const locale = useMemo(
    () => (i18n.language?.split("-")[0] as SupportedLocale) || "en",
    [i18n.language]
  );

  const studies = useMemo(() => getCaseStudies(locale), [locale]);

  return (
    <>
      <Head>
        <title>{t("workMetaTitle")}</title>
        <meta name="description" content={t("workMetaDescription")} />
        <meta property="og:title" content={t("workMetaTitle")} />
        <meta property="og:description" content={t("workMetaDescription")} />
        <meta property="og:image" content="/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("workMetaTitle")} />
        <meta name="twitter:description" content={t("workMetaDescription")} />
        <meta name="twitter:image" content="/logo512.png" />
      </Head>
      <div className={styles.workPage}>
        <div className={styles.worksGrid}>
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className={styles.workItem}
            >
              <Image
                src={study.featuredImage}
                alt={study.featuredAlt[locale]}
                className={styles.workImage}
                width={640}
                height={400}
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
