import React from "react";
import { cn } from "@/lib/classNames";
import {
  FieldHelper,
  FieldLabel,
  FieldWrapper,
  useFieldIds,
} from "../Field/Field";
import styles from "./InputField.module.css";

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id?: string;
  label: React.ReactNode;
  helperText?: React.ReactNode;
  error?: React.ReactNode;
  optionalLabel?: string;
};

export type { SelectFieldProps };

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    { id: idProp, label, helperText, error, required, optionalLabel, className, disabled, children, ...rest },
    ref
  ) => {
    const { id, helperId, errorId, describedBy } = useFieldIds(idProp, {
      helperText,
      error,
    });

    return (
      <FieldWrapper className={className}>
        <FieldLabel
          htmlFor={id}
          label={label}
          required={required}
          optionalLabel={optionalLabel}
        />
        <div className={styles.selectWrapper}>
          <select
            ref={ref}
            id={id}
            aria-describedby={describedBy}
            aria-invalid={error ? true : undefined}
            className={cn(
              styles.input,
              styles.select,
              error && styles.inputError,
              disabled && styles.inputDisabled
            )}
            required={required}
            disabled={disabled}
            {...rest}
          >
            {children}
          </select>
        </div>
        <FieldHelper id={errorId} error>
          {error}
        </FieldHelper>
        <FieldHelper id={helperId}>{helperText}</FieldHelper>
      </FieldWrapper>
    );
  }
);

SelectField.displayName = "SelectField";
