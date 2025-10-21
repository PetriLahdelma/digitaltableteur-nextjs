"use client";

import React, { useEffect } from "react";
import {
  changeLanguage,
  type SupportedLocale,
} from "../i18n";

type LocaleProviderProps = {
  locale: SupportedLocale;
  children: React.ReactNode;
};

const COOKIE_NAME = "i18next";

const LocaleProvider: React.FC<LocaleProviderProps> = ({
  locale,
  children,
}) => {
  useEffect(() => {
    changeLanguage(locale);

    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.cookie = `${COOKIE_NAME}=${locale}; path=/; SameSite=Lax`;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem("i18nextLng", locale);
    }
  }, [locale]);

  return <>{children}</>;
};

export default LocaleProvider;
