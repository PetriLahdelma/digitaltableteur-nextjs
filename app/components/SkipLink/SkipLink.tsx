"use client";

import React from "react";
import Button from "../Button/Button";
import styles from "./SkipLink.module.css";
import { useTranslation } from "react-i18next";

type SkipLinkProps = {
  targetId?: string;
};

const SkipLink: React.FC<SkipLinkProps> = ({
  targetId = "main",
}) => {
  const { t } = useTranslation();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    element?.focus();
  };

  return (
    <Button
      variant="secondary"
      size="s"
      className={styles.skipLink}
      onClick={handleClick}
    >
      {t("skipToContent")}
    </Button>
  );
};

export default SkipLink;
