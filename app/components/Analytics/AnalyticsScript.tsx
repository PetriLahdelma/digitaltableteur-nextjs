"use client";

import React from "react";
import Script from "next/script";
import { useCookieConsent } from "../CookieConsent/CookieConsentContext";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const AnalyticsScript: React.FC = () => {
  const { status } = useCookieConsent();

  if (!gaId || status !== "accepted") {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
};

export default AnalyticsScript;
