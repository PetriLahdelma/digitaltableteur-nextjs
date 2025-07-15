"use client";
import React from "react";
import styles from "./not-found.module.css";
import Image from "next/image";
import Button from "./components/Button/Button";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className={styles.notFoundPage}>
      <Image src="/404.webp" alt={t("notFoundAlt")} width={400} height={300} />
      <Button variant="secondary" onClick={() => (window.location.href = "/")}>
        {t("notFoundButton")}
      </Button>
    </div>
  );
}
