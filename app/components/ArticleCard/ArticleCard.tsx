import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./ArticleCard.module.css";
import Title from "../Title/Title";
import Text from "../Text/Text";

interface ArticleCardProps {
  title: string;
  lead?: string;
  link: string;
  readTime: string;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  lead,
  link,
  readTime,
  className = "",
}) => {
  const { t } = useTranslation();

  return (
    <Link href={link} className={`${styles.card} ${className}`.trim()}>
      <Title as="h2" level={2} size="M" className={styles.title}>
        {title}
      </Title>
      <Text size="M" className={styles.lead}>
        {lead}
      </Text>
      <div className={styles.meta}>
        <span className={styles.readTime}>{readTime}</span>
        <span className={styles.readMore}>{t("blogReadMore")}</span>
      </div>
    </Link>
  );
};

export default ArticleCard;
