import { notFound } from "next/navigation";
import Providers from "../Providers";
import styles from "../Layout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SkipLink from "../components/SkipLink/SkipLink";
import CookieConsentBanner from "../components/CookieConsent/CookieConsentBanner";
import AnalyticsScript from "../components/Analytics/AnalyticsScript";
import LocaleProvider from "./LocaleProvider";
import type { SupportedLocale } from "../i18n";

const SUPPORTED_LOCALES: SupportedLocale[] = ["en", "fi", "sv"];

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale as SupportedLocale;

  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound();
  }

  return (
    <Providers>
      <LocaleProvider locale={locale}>
        <div className={styles.layout}>
          <SkipLink />
          <Header />
          <main id="main" className={styles.main} tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <CookieConsentBanner />
        </div>
        <AnalyticsScript />
      </LocaleProvider>
    </Providers>
  );
}
