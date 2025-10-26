"use client";
import React from "react";
import { cn } from "@/lib/classNames";
import styles from "./Text.module.css";

type TextSize = "S" | "M" | "L";
type TextTerminals = "serif" | "sans";
type TextWeight = "regular" | "medium" | "semibold" | "bold";

type TextProps<TTag extends React.ElementType = "p"> = {
  as?: TTag;
  size?: TextSize;
  terminals?: TextTerminals;
  weight?: TextWeight;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<TTag>, "as" | "children">;

const sizeClassMap: Record<TextSize, string> = {
  S: styles.textS,
  M: styles.textM,
  L: styles.textL,
};

const terminalsClassMap: Record<TextTerminals, string> = {
  serif: styles.serif,
  sans: styles.sans,
};

const weightClassMap: Record<TextWeight, string | undefined> = {
  regular: undefined,
  medium: styles.weightMedium,
  semibold: styles.weightSemibold,
  bold: styles.weightBold,
};

const Text = <TTag extends React.ElementType = "p">({
  as,
  size = "M",
  terminals = "sans",
  weight = "regular",
  className,
  children,
  ...rest
}: TextProps<TTag>) => {
  const Component = (as ?? "p") as React.ElementType;

  return (
    <Component
      className={cn(
        styles.text,
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

export type { TextProps };
export default Text;
