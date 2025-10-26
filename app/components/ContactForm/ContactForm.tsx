"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { InputField } from "../ui/Input/InputField";
import { TextareaField } from "../ui/Input/TextareaField";
import { CheckboxField } from "../ui/Input/CheckboxField";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Link from "../Link/Link";
import styles from "./ContactForm.module.css";

type FormState = {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>> & {
  general?: string;
};

const INTEREST_OPTIONS = [
  { value: "brand_strategy", labelKey: "contactInterestBrandStrategy" },
  { value: "design_creative", labelKey: "contactInterestDesignCreative" },
  { value: "digital_products", labelKey: "contactInterestDigitalProducts" },
  { value: "help_me_choose", labelKey: "contactInterestHelpMeChoose" },
];

const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  interests: [],
  message: "",
};

const ContactForm: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [form, setForm] = React.useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);

  const handleChange = <T extends keyof FormState>(key: T, value: FormState[T]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleInterest = (value: string) => {
    setForm((prev) => {
      const exists = prev.interests.includes(value);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((interest) => interest !== value)
          : [...prev.interests, value],
      };
    });
  };

  const validate = (state: FormState) => {
    const newErrors: FormErrors = {};
    if (!state.name.trim()) {
      newErrors.name = t("contactErrorName", { defaultValue: "Name is required" });
    }
    const email = state.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = t("contactErrorEmail", { defaultValue: "Email is required" });
    } else if (!emailRegex.test(email)) {
      newErrors.email = t("contactErrorEmailInvalid", {
        defaultValue: "Enter a valid email address",
      });
    }
    if (!state.message.trim()) {
      newErrors.message = t("contactErrorMessageRequired", {
        defaultValue: "Message is required",
      });
    }
    return newErrors;
  };

  const resetForm = () => {
    setForm(INITIAL_STATE);
    setErrors({});
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setStatus("idle");
    setStatusMessage(null);

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    const payload = {
      ...form,
      locale: i18n.language,
    };

    try {
      const response = await fetch("/api/save-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setErrors((prev) => ({ ...prev, general: body?.error ?? "" }));
        setStatus("error");
        setStatusMessage(
          t("contactErrorMessage", {
            defaultValue: "Something went wrong. Please try again later.",
          })
        );
        return;
      }

      if (EMAIL_SERVICE_ID && EMAIL_TEMPLATE_ID && EMAIL_PUBLIC_KEY) {
        try {
          await emailjs.send(
            EMAIL_SERVICE_ID,
            EMAIL_TEMPLATE_ID,
            {
              from_name: form.name,
              reply_to: form.email,
              phone: form.phone,
              message: form.message,
              interests: form.interests.join(", "),
            },
            EMAIL_PUBLIC_KEY
          );
        } catch (error) {
          console.warn("EmailJS send failed", error);
        }
      }

      setStatus("success");
      setStatusMessage(t("contactSuccessMessage"));
      resetForm();
    } catch (error) {
      console.error("contact submit error", error);
      setStatus("error");
      setStatusMessage(
        t("contactErrorMessage", {
          defaultValue: "Something went wrong. Please try again later.",
        })
      );
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {status === "success" && statusMessage && (
        <div className={`${styles.statusMessage} ${styles.statusSuccess}`}>
          {statusMessage}
        </div>
      )}
      {status === "error" && statusMessage && (
        <div className={`${styles.statusMessage} ${styles.statusError}`}>
          {statusMessage}
        </div>
      )}

      <div className={`${styles.fieldRow} ${styles.fieldRowTwo}`}>
        <InputField
          label={t("contactFullName")}
          placeholder={t("contactFullNamePlaceholder")}
          value={form.name}
          onChange={(event) => handleChange("name", event.target.value)}
          required
          error={errors.name}
          autoComplete="name"
        />
        <InputField
          type="email"
          label={t("contactEmail")}
          placeholder={t("contactEmailPlaceholder")}
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
          required
          error={errors.email}
          autoComplete="email"
        />
      </div>

      <InputField
        type="tel"
        label={t("contactPhone")}
        placeholder={t("contactPhonePlaceholder")}
        value={form.phone}
        onChange={(event) => handleChange("phone", event.target.value)}
        autoComplete="tel"
      />

      <div>
        <Text size="S" className={styles.helpers}>
          {t("contactInterest")}
        </Text>
        <div className={styles.checkboxGrid}>
          {INTEREST_OPTIONS.map((option) => (
            <CheckboxField
              key={option.value}
              label={t(option.labelKey)}
              checked={form.interests.includes(option.value)}
              onChange={() => toggleInterest(option.value)}
            />
          ))}
        </div>
      </div>

      <TextareaField
        label={t("contactMessage")}
        placeholder={t("contactMessagePlaceholder")}
        value={form.message}
        onChange={(event) => handleChange("message", event.target.value)}
        required
        error={errors.message}
        rows={5}
      />

      <Text size="S" className={styles.helpers}>
        {t("contactPrivacyPolicy1")} {" "}
        <Link href="/privacy" tone="primary">
          {t("contactPrivacyPolicy2")}
        </Link>
        .
      </Text>

      {errors.general && (
        <div className={`${styles.statusMessage} ${styles.statusError}`}>
          {errors.general}
        </div>
      )}

      <div className={styles.actions}>
        <Button variant="primary" submits disabled={status === "submitting"}>
          {status === "submitting"
            ? t("contactSubmitting", { defaultValue: "Sending…" })
            : t("contactSubmit")}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
