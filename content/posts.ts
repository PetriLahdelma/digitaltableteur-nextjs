/**
 * Blog posts configuration for the website.
 * This file exports all available blog posts and related functionality.
 */

import type { SupportedLocale } from "@/app/i18n";

// Import individual blog posts
import { designing2025 } from "./designing-in-2025";
import { workflowTips } from "./workflow-tips";
import { digitalCraftsmanship } from "./digital-craftsmanship";
import { thoughtsBranding } from "./thoughts-on-future-branding";
import { figmaMcp } from "./figma-mcp-design-systems";
import { petriBio } from "./petri-lahdelma-bio";

// Re-export types for external use
export type { BlogPost, BlogSection, BlogPostLocaleContent } from "./types";

// Export all blog posts
export const blogPosts = [
  designing2025,
  workflowTips,
  digitalCraftsmanship,
  thoughtsBranding,
  figmaMcp,
  petriBio,
];

export function getPosts(locale: SupportedLocale) {
  return blogPosts.map((post) => ({
    ...post,
    content: post.locale[locale] ?? post.locale.en,
  }));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
