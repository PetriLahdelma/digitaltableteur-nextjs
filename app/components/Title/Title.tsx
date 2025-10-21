"use client";
import React from "react";
import { cn } from "@/lib/classNames";
import styles from "./Title.module.css";

type TitleSize = "S" | "M" | "L" | "XL";
type TitleTerminals = "serif" | "sans";
type TitleWeight = "regular" | "medium" | "semibold" | "bold";

export type TitleProps<TTag extends React.ElementType = "h1"> = {
  as?: TTag;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: TitleSize;
  terminals?: TitleTerminals;
  weight?: TitleWeight;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<TTag>, "as" | "children">;

const sizeClassMap: Record<TitleSize, string> = {
  S: styles.titleS,
  M: styles.titleM,
  L: styles.titleL,
  XL: styles.titleXL,
};

const terminalsClassMap: Record<TitleTerminals, string> = {
  serif: styles.fontSerif,
  sans: styles.fontSans,
};

const weightClassMap: Record<TitleWeight, string | undefined> = {
  regular: styles.weightRegular,
  medium: undefined,
  semibold: styles.weightSemibold,
  bold: styles.weightBold,
};

const Title = <TTag extends React.ElementType = "h1">({
  as,
  level,
  size = "L",
  terminals = "serif",
  weight = "medium",
  className,
  children,
  ...rest
}: TitleProps<TTag>) => {
  const resolvedLevel = level ?? 1;
  const Component = (as ?? (`h${resolvedLevel}` as TTag)) as React.ElementType;

  return (
    <Component
      className={cn(
        styles.title,
        sizeClassMap[size],
        terminalsClassMap[terminals],
        weightClassMap[weight],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Title;
