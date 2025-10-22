"use client";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { useParams, usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { WiMoonAltNew } from "react-icons/wi";
import { IoSunnySharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import React from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";

// Cookie helpers
function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}
function getCookie(name: string) {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

const Header = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const activeLocale =
    typeof params?.locale === "string" ? params.locale : null;
  const normalizedPathname = React.useMemo(() => {
    if (!pathname) return "/";
    let path = pathname;
    if (activeLocale) {
      const prefix = `/${activeLocale}`;
      if (path.startsWith(prefix)) {
        path = path.slice(prefix.length) || "/";
      }
    } else if (path.startsWith("/en")) {
      path = path.slice(3) || "/";
    }
    if (path === "") return "/";
    return path.startsWith("/") ? path : `/${path}`;
  }, [pathname, activeLocale]);
  const languages = [
    { code: "en", label: t("langEN") },
    { code: "fi", label: t("langFI") },
    { code: "sv", label: t("langSV") },
  ];

  React.useEffect(() => {
    const cookieLang = getCookie("i18next");
    if (cookieLang && i18n.language.split("-")[0] !== cookieLang) {
      i18n.changeLanguage(cookieLang);
    }
  }, [i18n]);
  React.useEffect(() => {
    setCookie("dt_theme", theme);
  }, [theme]);
  const currentlang = i18n.language ? i18n.language.split("-")[0] : "en";
  const changeLanguage = (code: string) => {
    if (code === activeLocale) return;

    i18n.changeLanguage(code);
    setCookie("i18next", code);
    localStorage.setItem("i18nextLng", code);

    const cleanedPath =
      normalizedPathname === "/" ? "" : normalizedPathname.replace(/^\/+/, "");
    const basePath = cleanedPath ? `/${cleanedPath}` : "";
    const destination = `/${code === "en" ? "en" : code}${basePath}`;
    router.push(destination as Route);
  };
  const changeTheme = () => {
    toggleTheme();
  };
  const localePrefix =
    activeLocale && activeLocale !== "en" ? `/${activeLocale}` : "/en";
  const buildHref = (path: string) => {
    if (path === "/") {
      return localePrefix;
    }
    return `${localePrefix}${path}`;
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href={buildHref("/")} className={styles.logoLink}>
          <Image
            src="/logo.webp"
            alt={t("headerLogoAlt")}
            className={styles.logo}
            width={160}
            height={40}
            priority
          />
        </Link>
        <nav className={styles.navbar}>
          <ul className={styles.nav}>
            <li>
              <Link
                href={buildHref("/")}
                className={
                  normalizedPathname === "/" ? styles.selected : undefined
                }
              >
                {t("navHome")}
              </Link>
            </li>
            <li>
              <Link
                href={buildHref("/work")}
                className={
                  styles.navLink +
                  " " +
                  (normalizedPathname.startsWith("/work")
                    ? styles.selected
                    : "")
                }
                tabIndex={0}
                aria-current={
                  normalizedPathname.startsWith("/work") ? "page" : undefined
                }
              >
                {t("navWork")}
              </Link>
            </li>
            <li>
              <Link
                href={buildHref("/about")}
                className={
                  normalizedPathname.startsWith("/about")
                    ? styles.selected
                    : undefined
                }
              >
                {t("navAbout")}
              </Link>
            </li>
            <li>
              <Link
                href={buildHref("/blog")}
                className={
                  normalizedPathname.startsWith("/blog")
                    ? styles.selected
                    : undefined
                }
              >
                {t("navBlog")}
              </Link>
            </li>
            <li>
              <Link
                href={buildHref("/contact")}
                className={
                  normalizedPathname.startsWith("/contact")
                    ? styles.selected
                    : undefined
                }
              >
                {t("navContact")}
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div className={styles.languageSwitcher}>
            {languages.map((lang, idx) => (
              <span
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                style={{
                  cursor: currentlang === lang.code ? "default" : "pointer",
                  opacity: currentlang === lang.code ? 0.5 : 1,
                  textDecoration: "none",
                  borderBottom:
                    currentlang === lang.code
                      ? "2px solid"
                      : "2px solid transparent",
                  marginRight: idx < languages.length - 1 ? 8 : 0,
                  transition: "border-color 0.2s",
                }}
                className={styles.languageLink}
                tabIndex={0}
                aria-label={lang.label}
                aria-current={currentlang === lang.code ? "true" : undefined}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && currentlang !== lang.code)
                    changeLanguage(lang.code);
                }}
              >
                {lang.label}
              </span>
            ))}
          </div>
          <button
            onClick={changeTheme}
            className={styles.themeToggle}
            aria-label={t("toggleDarkMode")}
          >
            {mounted ? (
              theme === "dark" ? (
                <WiMoonAltNew />
              ) : (
                <IoSunnySharp />
              )
            ) : (
              // Render a neutral icon during SSR to prevent hydration mismatch
              <div style={{ width: "1em", height: "1em" }} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
