import React from "react";
import { cn } from "@/lib/classNames";
import {
  FieldHelper,
  FieldLabel,
  FieldWrapper,
  useFieldIds,
} from "../Field/Field";
import styles from "./InputField.module.css";

type TextareaFieldProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "children"
> & {
  id?: string;
  label: React.ReactNode;
  helperText?: React.ReactNode;
  error?: React.ReactNode;
  optionalLabel?: string;
};

export type { TextareaFieldProps };

export const TextareaField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(({ id: idProp, label, helperText, error, required, optionalLabel, className, disabled, rows = 5, ...rest }, ref) => {
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
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        aria-describedby={describedBy}
        aria-invalid={error ? true : undefined}
        className={cn(
          styles.input,
          styles.textarea,
          error && styles.inputError,
          disabled && styles.inputDisabled
        )}
        required={required}
        disabled={disabled}
        {...rest}
      />
      <FieldHelper id={errorId} error>
        {error}
      </FieldHelper>
      <FieldHelper id={helperId}>{helperText}</FieldHelper>
    </FieldWrapper>
  );
});

TextareaField.displayName = "TextareaField";
