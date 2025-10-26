import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "./BlogPostView";
import type { SupportedLocale } from "../../../i18n";
import { blogPosts, getPostBySlug } from "@/content/posts";

const SUPPORTED_LOCALES: SupportedLocale[] = ["en", "fi", "sv"];

type BlogPostParams = {
  locale: string;
  slug: string;
};

type BlogPostPageProps = {
  params: BlogPostParams;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug, locale } = params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {};
  }

  const localeCode = (locale as SupportedLocale) || "en";
  const content = post.locale[localeCode] ?? post.locale.en;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      images: [
        {
          url: post.heroImage,
          alt: post.heroAlt[localeCode] ?? post.heroAlt.en,
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = params;
  const localeCode = (locale as SupportedLocale) || "en";

  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const content = post.locale[localeCode] ?? post.locale.en;

  return <BlogPostView post={post} content={content} locale={localeCode} />;
}
