import React from "react";
import { cn } from "@/lib/classNames";
import {
  FieldHelper,
  FieldLabel,
  FieldWrapper,
  useFieldIds,
} from "../Field/Field";
import styles from "./InputField.module.css";

type InputFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "children"
> & {
  id?: string;
  label: React.ReactNode;
  helperText?: React.ReactNode;
  error?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  optionalLabel?: string;
};

export type { InputFieldProps };

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id: idProp,
      label,
      helperText,
      error,
      prefixIcon,
      required,
      optionalLabel,
      className,
      type = "text",
      disabled,
      ...rest
    },
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
        <div className={styles.controlWrapper}>
          {prefixIcon && <span className={styles.prefixIcon}>{prefixIcon}</span>}
          <input
            ref={ref}
            id={id}
            type={type}
            aria-describedby={describedBy}
            aria-invalid={error ? true : undefined}
            className={cn(
              styles.input,
              prefixIcon && styles.withPrefix,
              error && styles.inputError,
              disabled && styles.inputDisabled
            )}
            disabled={disabled}
            required={required}
            {...rest}
          />
        </div>
        <FieldHelper id={errorId} error>
          {error}
        </FieldHelper>
        <FieldHelper id={helperId}>{helperText}</FieldHelper>
      </FieldWrapper>
    );
  }
);

InputField.displayName = "InputField";
