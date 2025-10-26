import type { SupportedLocale } from "@/app/i18n";

export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPostLocaleContent = {
  title: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
};

export type BlogPost = {
  slug: string;
  published: string;
  updated?: string;
  readingMinutes: number;
  tags: string[];
  heroImage: string;
  heroAlt: Record<SupportedLocale, string>;
  locale: Record<SupportedLocale, BlogPostLocaleContent>;
};

const locales: SupportedLocale[] = ["en", "fi", "sv"];

export function replicate(content: BlogPostLocaleContent) {
  return locales.reduce<Record<SupportedLocale, BlogPostLocaleContent>>(
    (acc, locale) => {
      acc[locale] = { ...content };
      return acc;
    },
    {} as Record<SupportedLocale, BlogPostLocaleContent>
  );
}
