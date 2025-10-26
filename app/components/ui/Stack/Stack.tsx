import React from "react";
import { cn } from "@/lib/classNames";
import styles from "./Stack.module.css";

type StackDirection = "column" | "row";
type StackJustify = "start" | "center" | "between";
type StackAlign = "start" | "center" | "end" | "stretch";

type StackProps<TTag extends React.ElementType = "div"> = {
  as?: TTag;
  direction?: StackDirection;
  gap?: string | number;
  wrap?: boolean;
  justify?: StackJustify;
  align?: StackAlign;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<TTag>, "as" | "children">;

const justifyClassMap: Record<StackJustify, string | undefined> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
};

const alignClassMap: Record<StackAlign, string | undefined> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: undefined,
};

export function Stack<TTag extends React.ElementType = "div">({
  as,
  direction = "column",
  gap,
  wrap = false,
  justify = "start",
  align = direction === "row" ? "center" : "start",
  fullWidth = false,
  className,
  style,
  children,
  ...rest
}: StackProps<TTag>) {
  const Component = (as ?? "div") as React.ElementType;

  return (
    <Component
      className={cn(
        styles.stack,
        direction === "row" && styles.inline,
        justifyClassMap[justify],
        alignClassMap[align],
        !wrap && direction === "row" && styles.noWrap,
        fullWidth && styles.fullWidth,
        className
      )}
      style={{
        ...(gap !== undefined ? { gap: typeof gap === "number" ? `${gap}px` : gap } : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export type { StackProps };
