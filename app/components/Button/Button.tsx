"use client";
import React from "react";
import { cn } from "@/lib/classNames";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "error"
  | "warning"
  | "success"
  | "info";
export type ButtonSize = "s" | "m" | "l";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  submits?: boolean;
  accessibleDescription?: string;
  accessibleName?: string;
  accessibleNameRef?: string;
  accessibleRole?: "button" | "link";
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

const variantClassMap: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
  error: styles.error,
  warning: styles.warning,
  success: styles.success,
  info: styles.info,
};

const sizeClassMap: Record<ButtonSize, string | undefined> = {
  s: styles.small,
  m: undefined,
  l: styles.large,
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "m",
  icon,
  endIcon,
  submits,
  accessibleDescription,
  accessibleName,
  accessibleNameRef,
  accessibleRole,
  className,
  children,
  type,
  ...rest
}) => {
  const isIconOnly = !children && !!(icon ?? endIcon);

  return (
    <button
      type={submits ? "submit" : type}
      className={cn(
        styles.button,
        variantClassMap[variant],
        sizeClassMap[size],
        isIconOnly && styles.iconOnly,
        className
      )}
      aria-describedby={accessibleDescription}
      aria-label={accessibleName}
      aria-labelledby={accessibleNameRef}
      role={accessibleRole}
      {...rest}
    >
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className={styles.icon} aria-hidden="true">
          {endIcon}
        </span>
      )}
    </button>
  );
};

export type { ButtonProps };
export default Button;
