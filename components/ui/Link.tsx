// 'use client';

// import NextLink, { LinkProps as NextLinkProps } from 'next/link';
// import { useLocale } from 'next-intl';
// import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
// import { UrlObject } from 'url';
// import classNames from 'classnames';

// type Href = string | UrlObject;

// interface CustomLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
//   href?: Href | boolean;
//   children: ReactNode;
//   className?: string;
//   isExternal?: boolean;
//   noLink?: boolean;
//   targetLocale?: boolean;
// }

// const Link = ({
//   href,
//   children,
//   className,
//   isExternal = false,
//   noLink = false,
//   targetLocale = false,
//   ...props
// }: CustomLinkProps) => {
//   const currentLocale = useLocale();

//   if (noLink) {
//     return (
//       <div className={className} {...(props as HTMLAttributes<HTMLDivElement>)}>
//         {children}
//       </div>
//     );
//   }

//   if (isExternal) {
//     return (
//       <a href={typeof href === 'string' ? href : ''} className={className} {...props}>
//         {children}
//       </a>
//     );
//   }



//   const resolveHref = (href: string | null | undefined) => {
//     if (!href) {
//       return '/';
//     }
//     return href.startsWith('/')
//       ? `/${locale}${href === '/' ? '' : href}`
//       : `/${locale}/${href}`;
//   }

//   const locale = targetLocale
//     ? currentLocale === 'en'
//       ? 'tr'
//       : 'en'
//     : currentLocale;

//   let resolvedHref;

//   if (typeof href === 'string') {
//     resolvedHref = resolveHref(href)
//   } else if (typeof href === 'object') {
//     resolvedHref = { ...href, pathname: resolveHref(href.pathname) }
//   } else {
//     resolvedHref = href;
//   }

//   return (
//     <>
//       {
//         noLink || !resolvedHref || typeof resolvedHref === 'boolean' ?
//           <div className={classNames('transition-all duration-500', className)} >
//             {children}
//           </div>
//           :
//           <NextLink href={resolvedHref!} className={classNames('transition-all duration-500', className)} {...props}>
//             {children}
//           </NextLink>
//       }
//     </>
//   );
// };

// export default Link;



'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useLocale } from 'next-intl';
import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  Ref,
} from 'react';
import { UrlObject } from 'url';
import classNames from 'classnames';

type Href = string | UrlObject;

interface CustomLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href?: Href | boolean;
  children: ReactNode;
  className?: string;
  isExternal?: boolean;
  noLink?: boolean;
  targetLocale?: boolean;
}

// از forwardRef برای اضافه کردن پشتیبانی از ref استفاده می‌کنیم
const Link = forwardRef<HTMLAnchorElement | HTMLDivElement, CustomLinkProps>(
  (
    {
      href,
      children,
      className,
      isExternal = false,
      noLink = false,
      targetLocale = false,
      ...props
    },
    ref: Ref<HTMLAnchorElement | HTMLDivElement>
  ) => {
    const currentLocale = useLocale();

    if (noLink) {
      return (
        <div
          ref={ref as Ref<HTMLDivElement>}
          className={className}
          {...(props as HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </div>
      );
    }

    if (isExternal) {
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          href={typeof href === 'string' ? href : ''}
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    }

    const resolveHref = (href: string | null | undefined) => {
      if (!href) {
        return '/';
      }
      return href.startsWith('/')
        ? `/${locale}${href === '/' ? '' : href}`
        : `/${locale}/${href}`;
    };

    const locale = targetLocale
      ? currentLocale === 'en'
        ? 'tr'
        : 'en'
      : currentLocale;

    let resolvedHref;

    if (typeof href === 'string') {
      resolvedHref = resolveHref(href);
    } else if (typeof href === 'object') {
      resolvedHref = { ...href, pathname: resolveHref(href.pathname) };
    } else {
      resolvedHref = href;
    }

    if (!resolvedHref || typeof resolvedHref === 'boolean') {
      return (
        <div
          ref={ref as Ref<HTMLDivElement>}
          className={classNames('transition-all duration-500', className)}
        >
          {children}
        </div>
      );
    }

    return (
      <NextLink
        href={resolvedHref}
        className={classNames('transition-all duration-500', className)}
        {...props}
        ref={ref as Ref<HTMLAnchorElement>}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link'; // برای جلوگیری از هشدار React

export default Link;
