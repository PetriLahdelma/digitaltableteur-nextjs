"use client";
import React, { useMemo } from "react";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { Link as BaseLink } from "../ui/Link/Link";
import type { LinkProps as BaseLinkProps } from "../ui/Link/Link";

type LegacySize = "S" | "M" | "L";

type LinkProps = Omit<BaseLinkProps, "size"> & {
  size?: LegacySize;
};

const sizeMap: Record<LegacySize, BaseLinkProps["size"]> = {
  S: "sm",
  M: "md",
  L: "lg",
};

const Link: React.FC<LinkProps> = ({ size, href, ...rest }) => {
  const params = useParams();
  const locale = useMemo(() => {
    const value = params?.locale;
    return typeof value === "string" ? value : undefined;
  }, [params]);

  const mappedSize = size ? sizeMap[size] : undefined;
  const isInternal = typeof href === "string" && href.startsWith("/");

  const resolvedHref = React.useMemo(() => {
    if (!isInternal || typeof href !== "string") return href;
    if (!locale || locale === "en") return href;
    if (href === "") return `/${locale}`;
    if (href === "/") return `/${locale}`;
    if (href.startsWith(`/${locale}`)) return href;
    return `/${locale}${href}`;
  }, [href, isInternal, locale]);

  if (isInternal) {
    return (
      <BaseLink
        as={NextLink}
        size={mappedSize}
        href={resolvedHref}
        {...rest}
      />
    );
  }

  return <BaseLink size={mappedSize} href={resolvedHref} {...rest} />;
};

export type { LinkProps };
export default Link;
