import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { cn } from "@/lib/classNames";
import styles from "./Link.module.css";

type LinkSize = "sm" | "md" | "lg";
type LinkTone = "default" | "primary" | "inverse";

type LinkProps<TTag extends React.ElementType = "a"> = {
  as?: TTag;
  size?: LinkSize;
  tone?: LinkTone;
  icon?: React.ReactNode;
  iconPosition?: "leading" | "trailing";
  showExternalIcon?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<TTag>, "as" | "children">;

const sizeClassMap: Record<LinkSize, string | undefined> = {
  sm: styles.sizeSm,
  md: undefined,
  lg: styles.sizeLg,
};

const toneClassMap: Record<LinkTone, string | undefined> = {
  default: styles.toneDefault,
  primary: styles.tonePrimary,
  inverse: styles.toneInverse,
};

function isExternalHref(href?: string) {
  return !!href && /^(https?:)?\/\//.test(href);
}

export function Link<TTag extends React.ElementType = "a">({
  as,
  size = "md",
  tone = "primary",
  icon,
  iconPosition = "trailing",
  showExternalIcon,
  className,
  children,
  href,
  ...rest
}: LinkProps<TTag>) {
  const Component = (as ?? "a") as React.ElementType;
  const external = showExternalIcon ?? isExternalHref(typeof href === "string" ? href : undefined);
  const domProps = rest as Record<string, unknown> & { href?: string };

  if (href !== undefined) {
    domProps.href = href as string;
  }

  return (
    <Component
      className={cn(styles.link, sizeClassMap[size], toneClassMap[tone], className)}
      {...domProps}
    >
      {icon && iconPosition === "leading" && icon}
      {children}
      {icon && iconPosition === "trailing" && icon}
      {external && (
        <FiArrowUpRight aria-hidden className={styles.externalIcon} />
      )}
    </Component>
  );
}

export type { LinkProps };
