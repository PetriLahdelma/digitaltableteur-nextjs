import React from "react";
import { cn } from "@/lib/classNames";
import { FieldHelper, useFieldIds } from "../Field/Field";
import styles from "./InputField.module.css";

type CheckboxFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  id?: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  error?: React.ReactNode;
};

export type { CheckboxFieldProps };

export const CheckboxField = React.forwardRef<HTMLInputElement, CheckboxFieldProps>(
  (
    { id: idProp, label, description, error, className, disabled, required, ...rest },
    ref
  ) => {
    const { id, errorId, describedBy } = useFieldIds(idProp, {
      error,
      helperText: description,
    });

    const descriptionId = description ? `${id}-description` : undefined;

    return (
      <div className={cn(styles.checkboxWrapper, className)}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={cn(styles.checkboxInput, disabled && styles.inputDisabled)}
          aria-describedby={[describedBy, descriptionId].filter(Boolean).join(" ") || undefined}
          aria-invalid={error ? true : undefined}
          disabled={disabled}
          required={required}
          {...rest}
        />
        <label htmlFor={id} className={styles.checkboxLabel}>
          <span>{label}</span>
          {description && (
            <span id={descriptionId} className={styles.checkboxDescription}>
              {description}
            </span>
          )}
          <FieldHelper id={errorId} error className={styles.inlineMessage}>
            {error}
          </FieldHelper>
        </label>
      </div>
    );
  }
);

CheckboxField.displayName = "CheckboxField";
