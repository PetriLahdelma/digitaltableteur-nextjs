import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitaltableteur.com"),
  title: {
    default: "Digitaltableteur",
    template: "%s • Digitaltableteur",
  },
  description:
    "Digitaltableteur is a design-led studio crafting multilingual digital experiences, case studies, and thought leadership.",
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
