"use client";
import type { Metadata } from "next";
import Head from "next/head";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";
import styles from "./Layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              id="ga-init"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.layout}>
          <Button
            variant="secondary"
            accessibleRole="link"
            className={styles.skipLink}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              const main = document.getElementById("main");
              if (main) main.focus();
              window.location.hash = "main";
            }}
          >
            Skip to main content
          </Button>
          <Header />
          <main id="main" className={styles.main} tabIndex={-1}>
            <Providers>{children}</Providers>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
