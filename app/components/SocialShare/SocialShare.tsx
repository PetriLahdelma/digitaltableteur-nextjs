"use client";

import React from "react";
import {
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiCopy,
  FiShare2,
} from "react-icons/fi";
import { FaRedditAlien, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Link from "../Link/Link";
import styles from "./SocialShare.module.css";

type SocialShareProps = {
  url: string;
  title: string;
  className?: string;
};

const encode = (value: string) => encodeURIComponent(value);

const SocialShare: React.FC<SocialShareProps> = ({ url, title, className }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = React.useState(false);

  const shareUrl = React.useMemo(() => url, [url]);
  const encodedUrl = React.useMemo(() => encode(shareUrl), [shareUrl]);
  const encodedTitle = React.useMemo(() => encode(title), [title]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.warn("Clipboard copy failed", error);
    }
  };

  const buttons = [
    {
      id: "twitter",
      label: t("shareOnTwitter"),
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <FiTwitter />, 
      rel: "noopener noreferrer",
    },
    {
      id: "linkedin",
      label: t("shareOnLinkedin", { defaultValue: "Share on LinkedIn" }),
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <FiLinkedin />, 
    },
    {
      id: "facebook",
      label: t("shareOnFacebook"),
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FiFacebook />, 
    },
    {
      id: "reddit",
      label: t("shareOnReddit"),
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      icon: <FaRedditAlien />, 
    },
    {
      id: "whatsapp",
      label: t("shareOnWhatsapp"),
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: <FaWhatsapp />, 
    },
  ];

  return (
    <div className={`${styles.share} ${className ?? ""}`.trim()}>
      {buttons.map((button) => (
        <Link
          key={button.id}
          href={button.href}
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          {button.icon}
          {button.label}
        </Link>
      ))}
      <button type="button" className={`${styles.button} ${styles.copyButton}`} onClick={copyToClipboard}>
        {copied ? <FiShare2 /> : <FiCopy />}
        {copied ? t("linkCopied") : t("copyLinkToClipboard")}
      </button>
      {copied && <span className={styles.status}>{t("linkCopied")}</span>}
    </div>
  );
};

export default SocialShare;
