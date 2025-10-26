import React from "react";
import Image from "next/image";
import styles from "./avatar.module.css";

type AvatarProps = {
  name?: string;
  imageUrl?: string | { default: string };
  clickable?: boolean;
  destinationUrl?: string;
  size?: string;
  priority?: boolean;
};

const Avatar: React.FC<AvatarProps> = ({
  name,
  imageUrl,
  clickable,
  destinationUrl,
  size,
  priority = false,
}) => {
  const resolvedImageUrl =
    typeof imageUrl === "string" ? imageUrl : imageUrl?.default;

  const handleClick = () => {
    if (clickable && destinationUrl) {
      window.location.href = destinationUrl;
    }
  };

  const avatarStyle = size ? { width: size, height: size } : undefined;

  const getClassName = (baseClass: string) => {
    return clickable ? `${baseClass} ${styles.clickable}` : baseClass;
  };

  if (resolvedImageUrl) {
    return (
      <Image
        src={resolvedImageUrl}
        alt={name || "Avatar"}
        className={getClassName(styles.avatarImage)}
        onClick={clickable ? handleClick : undefined}
        style={avatarStyle}
        width={size ? parseInt(size) : 40}
        height={size ? parseInt(size) : 40}
        priority={priority}
        unoptimized
      />
    );
  }

  const initials = name
    ? name
        .split(" ")
        .map((part) => part[0]?.toUpperCase())
        .join("")
    : "";

  return (
    <div
      className={getClassName(styles.avatarText)}
      onClick={clickable ? handleClick : undefined}
      style={avatarStyle}
    >
      {initials}
    </div>
  );
};

export default Avatar;
