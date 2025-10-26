import React from "react";
import SocialShare from "./SocialShare";
import Title from "../Title/Title";
import { useTranslation } from "react-i18next";
import styles from "./SocialShareSection.module.css";

type SocialShareSectionProps = {
  url: string;
  title: string;
  className?: string;
};

const SocialShareSection: React.FC<SocialShareSectionProps> = ({
  url,
  title,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <section className={`${styles.shareSection} ${className ?? ""}`.trim()}>
      <hr className={styles.divider} />
      <Title level={2} size="M" className={styles.heading}>
        {t("shareHeading", { defaultValue: "Share this article" })}
      </Title>
      <SocialShare url={url} title={title} />
    </section>
  );
};

export default SocialShareSection;
