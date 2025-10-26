"use client";

import React from "react";
import Button from "../Button/Button";
import Text from "../Text/Text";
import styles from "./CookieConsentBanner.module.css";
import { useTranslation } from "react-i18next";
import { useCookieConsent } from "./CookieConsentContext";
import Link from "../Link/Link";

const CookieConsentBanner: React.FC = () => {
  const { status, acceptAll, acceptEssential } = useCookieConsent();
  const { t } = useTranslation();

  if (status !== "unknown") {
    return null;
  }

  return (
    <aside className={styles.banner} role="dialog" aria-modal="true">
      <Text className={styles.text}>{t("cookieConsentText")}</Text>
      <Text className={styles.text}>
        {t("cookieConsentReadOur")}{" "}
        <Link href="/cookie-policy-full" className={styles.link}>
          {t("cookiePolicyLink")}
        </Link>{" "}
        {t("cookieConsentToLearnMore")}
      </Text>
      <div className={styles.actions}>
        <Button
          variant="secondary"
          size="s"
          onClick={acceptEssential}
          aria-label={t("cookieAcceptEssential")}
        >
          {t("cookieAcceptEssential")}
        </Button>
        <Button
          variant="primary"
          size="s"
          onClick={acceptAll}
          aria-label={t("cookieAcceptAll")}
        >
          {t("cookieAcceptAll")}
        </Button>
      </div>
    </aside>
  );
};

export default CookieConsentBanner;
