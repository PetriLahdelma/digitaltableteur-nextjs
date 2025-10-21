import React from "react";
import { cn } from "@/lib/classNames";
import styles from "./Card.module.css";

type CardTone = "default" | "surface" | "primary" | "dark" | "ghost";

type CardProps = {
  as?: "div" | "a";
  tone?: CardTone;
  interactive?: boolean;
  compact?: boolean;
  bleed?: boolean;
  inverseText?: boolean;
  className?: string;
  children?: React.ReactNode;
} & (React.HTMLAttributes<HTMLDivElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>);

const toneClassMap: Record<CardTone, string | undefined> = {
  default: styles.toneDefault,
  surface: styles.toneSurface,
  primary: styles.tonePrimary,
  dark: styles.toneDark,
  ghost: styles.toneGhost,
};

const CardBase = React.forwardRef<HTMLElement, CardProps>((props, ref) => {
  const { as = "div", tone = "default", interactive, compact, bleed, inverseText, className, ...rest } = props;
  const Component = as === "a" ? "a" : "div";
  const isInteractive =
    interactive ||
    Component === "a" ||
    Object.prototype.hasOwnProperty.call(rest, "href");

  const classNames = cn(
    styles.card,
    toneClassMap[tone],
    inverseText && styles.inverse,
    isInteractive && styles.interactive,
    compact && styles.compact,
    bleed && styles.bleed,
    className
  );

  if (Component === "a") {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classNames}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={classNames}
      {...(rest as React.HTMLAttributes<HTMLDivElement>)}
    />
  );
});

CardBase.displayName = "Card";

type SectionProps = React.HTMLAttributes<HTMLDivElement>;

const Header = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn(styles.header, className)} {...rest} />
  )
);
Header.displayName = "Card.Header";

const Body = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn(styles.body, className)} {...rest} />
  )
);
Body.displayName = "Card.Body";

const Footer = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn(styles.footer, className)} {...rest} />
  )
);
Footer.displayName = "Card.Footer";

const Media = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn(styles.media, className)} {...rest} />
  )
);
Media.displayName = "Card.Media";

export const Card = Object.assign(CardBase, {
  Header,
  Body,
  Footer,
  Media,
});

export type { CardProps };
