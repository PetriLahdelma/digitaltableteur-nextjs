"use client";
import React from "react";
import styles from "./not-found.module.css";
import Image from "next/image";
import Button from "./components/Button/Button";
import { useTranslation } from "react-i18next";
import { useParams, useRouter } from "next/navigation";
import type { Route } from "next";

export default function NotFound() {
  const { t } = useTranslation();
  const params = useParams();
  const router = useRouter();
  const locale = typeof params?.locale === "string" ? params.locale : undefined;

  const handleNavigateHome = React.useCallback(() => {
    const target = !locale || locale === "en" ? "/" : `/${locale}`;
    router.push(target as Route);
  }, [locale, router]);
  return (
    <div className={styles.notFoundPage}>
      <Image src="/404.webp" alt={t("notFoundAlt")} width={400} height={300} />
      <Button variant="secondary" onClick={handleNavigateHome}>
        {t("notFoundButton")}
      </Button>
    </div>
  );
}
