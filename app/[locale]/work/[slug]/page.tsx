import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyView from "./CaseStudyView";
import type { SupportedLocale } from "../../../i18n";
import { caseStudies, getCaseStudyBySlug } from "@/content/works";

const SUPPORTED_LOCALES: SupportedLocale[] = ["en", "fi", "sv"];

type CaseStudyParams = {
  locale: string;
  slug: string;
};

type CaseStudyPageProps = {
  params: CaseStudyParams;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    caseStudies.map((study) => ({ locale, slug: study.slug }))
  );
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug, locale } = params;
  const localeCode = (locale as SupportedLocale) || "en";
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return {};
  }

  const content = study.locale[localeCode] ?? study.locale.en;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      images: [
        {
          url: study.heroImage,
          alt: study.heroAlt[localeCode] ?? study.heroAlt.en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug, locale } = params;
  const localeCode = (locale as SupportedLocale) || "en";

  const study = getCaseStudyBySlug(slug);
  if (!study) {
    notFound();
  }

  const content = study.locale[localeCode] ?? study.locale.en;

  const index = caseStudies.findIndex(({ slug }) => slug === study.slug);
  const previous = index > 0 ? caseStudies[index - 1] : null;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : null;

  return (
    <CaseStudyView
      study={study}
      content={content}
      locale={localeCode}
      previous={previous}
      next={next}
    />
  );
}
