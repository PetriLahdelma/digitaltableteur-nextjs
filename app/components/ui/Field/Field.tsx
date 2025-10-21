import React from "react";
import { cn } from "@/lib/classNames";
import styles from "./Field.module.css";

type FieldLabelProps = {
  htmlFor: string;
  label: React.ReactNode;
  optionalLabel?: string;
  required?: boolean;
  className?: string;
};

export function FieldLabel({
  htmlFor,
  label,
  optionalLabel = "Optional",
  required,
  className,
}: FieldLabelProps) {
  return (
    <div className={styles.labelRow}>
      <label htmlFor={htmlFor} className={cn(styles.label, className)}>
        {label}
        {!required && optionalLabel && (
          <span className={styles.optional}>{optionalLabel}</span>
        )}
        {required && <span className={styles.required}>*</span>}
      </label>
    </div>
  );
}

export function FieldHelper({
  id,
  children,
  error,
  className,
}: {
  id?: string;
  children?: React.ReactNode;
  error?: boolean;
  className?: string;
}) {
  if (!children) return null;
  return (
    <div
      id={id}
      className={cn(error ? styles.error : styles.helper, className)}
      role={error ? "status" : undefined}
    >
      {children}
    </div>
  );
}

export function FieldWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(styles.field, className)}>{children}</div>;
}

export function useFieldIds(
  baseId?: string,
  {
    helperText,
    error,
  }: { helperText?: React.ReactNode; error?: React.ReactNode } = {}
) {
  const autoId = React.useId();
  const id = baseId ?? autoId;
  const helperId = helperText ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, helperId].filter(Boolean).join(" ") || undefined;

  return { id, helperId, errorId, describedBy };
}
