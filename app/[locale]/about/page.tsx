"use client";
import React from "react";
import Head from "next/head";
import styles from "./About.module.css";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("aboutMetaTitle")}</title>
        <meta name="description" content={t("aboutMetaDescription")} />
        <meta property="og:title" content={t("aboutMetaTitle")} />
        <meta property="og:description" content={t("aboutMetaDescription")} />
        <meta property="og:image" content="/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("aboutMetaTitle")} />
        <meta name="twitter:description" content={t("aboutMetaDescription")} />
        <meta name="twitter:image" content="/logo512.png" />
      </Head>
      <div className={styles.about}>
        <section className={styles.hero}>
          <Title level={1} size="XL" className={styles.heroTitle}>
            {t("aboutHeroTitle")}
          </Title>
          <Text size="L" terminals="serif" className={styles.heroText}>
            {t("aboutHeroText")}
          </Text>
        </section>

        <section className={styles.section}>
          <Title level={2} size="L" className={styles.sectionTitle}>
            {t("aboutDesignTitle")}
          </Title>
          <Text size="M" className={styles.sectionText}>
            {t("aboutDesignText")}
          </Text>
        </section>

        <section className={styles.section}>
          <Title level={2} size="L" className={styles.sectionTitle}>
            {t("aboutDevelopmentTitle")}
          </Title>
          <Text size="M" className={styles.sectionText}>
            {t("aboutDevelopmentText")}
          </Text>
        </section>

        <section className={styles.section}>
          <Title level={2} size="L" className={styles.sectionTitle}>
            {t("aboutCollaborationTitle")}
          </Title>
          <Text size="M" className={styles.sectionText}>
            {t("aboutCollaborationText")}
          </Text>
        </section>
      </div>
    </>
  );
};

export default About;
