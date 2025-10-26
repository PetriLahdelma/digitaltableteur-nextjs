"use client";
import React, { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Grid from "../components/Grid/Grid";
import styles from "../Page.module.css";
import titleStyles from "../components/Title/Title.module.css";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import Link from "../components/Link/Link";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/classNames";

export default function HomePage() {
  const { t } = useTranslation();

  const texts = useMemo(
    () => [
      t("homeCreativeDevelopment"),
      t("homeStrategyBranding"),
      t("homeIllustrationEditorial"),
    ],
    [t]
  );

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    setCurrentText(texts[0]);
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <>
      <Head>
        <title>{t("homeMetaTitle")}</title>
        <meta name="description" content={t("homeMetaDescription")} />
        <meta property="og:title" content={t("homeMetaTitle")} />
        <meta property="og:description" content={t("homeMetaDescription")} />
        <meta property="og:image" content="/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("homeMetaTitle")} />
        <meta name="twitter:description" content={t("homeMetaDescription")} />
        <meta name="twitter:image" content="/logo512.png" />
      </Head>
      <div className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.heroBand} />
        </section>

        <section className={styles.about}>
          <Title
            level={1}
            size="XL"
            className={cn(styles.gradientText, styles.heroTitle)}
          >
            {currentText}
          </Title>
          <Grid className={styles.aboutGrid}>
            <div className={styles.gridSpacer} />
            <div className={styles.aboutCopy}>
              <Text size="L" className={styles.lead}>
                {t("homeAbout")}
              </Text>
            </div>
          </Grid>
        </section>

        <section className={styles.cta}>
          <Title
            level={2}
            size="M"
            terminals="sans"
            className={titleStyles.h2White}
          >
            {t("homeCtaTitle")}
          </Title>
          <Link className={styles.ctaLink} href="/contact">
            {t("homeCtaLink")}
          </Link>
        </section>
      </div>
    </>
  );
}
