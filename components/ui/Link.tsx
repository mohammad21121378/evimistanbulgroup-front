'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useLocale } from 'next-intl';
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { UrlObject } from 'url';

type Href = string | UrlObject;

interface CustomLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: Href;
  children: ReactNode;
  className?: string;
  isExternal?: boolean;
  noLink?: boolean;
  targetLocale?: boolean;
}

const Link = ({
  href,
  children,
  className,
  isExternal = false,
  noLink = false,
  targetLocale = false,
  ...props
}: CustomLinkProps) => {
  const currentLocale = useLocale();

  if (noLink) {
    return (
      <div className={className} {...(props as HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  if (isExternal) {
    return (
      <a href={typeof href === 'string' ? href : ''} className={className} {...props}>
        {children}
      </a>
    );
  }

  const locale = targetLocale
    ? currentLocale === 'en'
      ? 'tr'
      : 'en'
    : currentLocale;

  const resolvedHref =
    typeof href === 'string'
      ? href.startsWith('/')
        ? `/${locale}${href === '/' ? '' : href}`
        : `/${locale}/${href}`
      : href; // اگر UrlObject باشد، نمی‌توان string manipulation کرد

  return (
    <NextLink href={resolvedHref} className={className} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
