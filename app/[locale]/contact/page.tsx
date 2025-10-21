"use client";
import React from "react";
import Head from "next/head";
import styles from "./Contact.module.css";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import Link from "../../components/Link/Link";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("contactMetaTitle")}</title>
        <meta name="description" content={t("contactMetaDescription")} />
        <meta property="og:title" content={t("contactMetaTitle")} />
        <meta property="og:description" content={t("contactMetaDescription")} />
        <meta property="og:image" content="/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("contactMetaTitle")} />
        <meta name="twitter:description" content={t("contactMetaDescription")} />
        <meta name="twitter:image" content="/logo512.png" />
      </Head>
      <div className={styles.contact}>
        <Title level={1} size="XL" className={styles.title}>
          {t("contactHeroTitle")}
        </Title>
        <Text size="M" className={styles.intro}>
          {t("contactInfo")}{" "}
          <Link href="mailto:hello@digitaltableteur.com" className={styles.emailLink}>
            hello@digitaltableteur.com
          </Link>
        </Text>
        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
        <Text size="S" className={styles.details}>
          {t("footerAddress1")}
          <br />
          {t("footerAddress2")}
        </Text>
      </div>
    </>
  );
}
