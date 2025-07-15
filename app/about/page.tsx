"use client";
import React from "react";
import styles from "./About.module.css";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <Title size="L">{t("aboutHeroTitle")}</Title>
        <Text>{t("aboutHeroText")}</Text>
      </section>

      <section className={styles.section}>
        <Title size="M">{t("aboutDesignTitle")}</Title>
        <Text>{t("aboutDesignText")}</Text>
      </section>

      <section className={styles.section}>
        <Title size="M">{t("aboutDevelopmentTitle")}</Title>
        <Text>{t("aboutDevelopmentText")}</Text>
      </section>

      <section className={styles.section}>
        <Title size="M">{t("aboutCollaborationTitle")}</Title>
        <Text>{t("aboutCollaborationText")}</Text>
      </section>
    </div>
  );
};

export default About;
