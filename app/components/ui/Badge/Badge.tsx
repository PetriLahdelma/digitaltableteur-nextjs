import React from "react";
import { cn } from "@/lib/classNames";
import styles from "./Badge.module.css";

type BadgeVariant = "soft" | "outline" | "solid";
type BadgeTone = "primary" | "neutral" | "success" | "warning" | "danger";

type BadgeProps<TTag extends React.ElementType = "span"> = {
  as?: TTag;
  variant?: BadgeVariant;
  tone?: BadgeTone;
  pill?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<TTag>, "as" | "children">;

const toKey = (prefix: string, value: string) =>
  `${prefix}${value.charAt(0).toUpperCase()}${value.slice(1)}`;

export function Badge<TTag extends React.ElementType = "span">({
  as,
  variant = "soft",
  tone = "primary",
  pill = false,
  icon,
  className,
  children,
  ...rest
}: BadgeProps<TTag>) {
  const Component = (as ?? "span") as React.ElementType;

  return (
    <Component
      className={cn(
        styles.badge,
        styles[toKey("variant", variant) as keyof typeof styles],
        styles[toKey("tone", tone) as keyof typeof styles],
        pill && styles.pill,
        className
      )}
      {...rest}
    >
      {icon}
      {children}
    </Component>
  );
}

export type { BadgeProps };
