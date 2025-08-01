'use client'

import { usePathname } from 'next/navigation'
import Link from '../ui/Link'
import cn from 'classnames'
import classNames from 'classnames'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items?: BreadcrumbItem[],
  lightThem?: boolean;
  className?: string;
}


export const Breadcrumb = ({ items, lightThem, className }: BreadcrumbProps) => {
  
  const separator = (
    <svg
      height="1.5rem"
      viewBox="0 0 1 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-4"
    >
      <line x1="0.5" y1="0" x2="0.5" y2="24" stroke={lightThem ? "#ffff" : "#64748B"} />
    </svg>
  )

  const pathname = usePathname()

  const autoItems: BreadcrumbItem[] = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, array) => ({
      label: decodeURIComponent(segment).replace(/-/g, ' '),
      href: '/' + array.slice(0, index + 1).join('/'),
    }))

  const finalItems = items ?? autoItems

  return (
    <nav className={classNames("flex items-center text-sm font-medium mb-5 !truncate", className)}>
      <Link href="/" className={cn("hover:text-orange-600 transition-colors", { "text-slate-700": !lightThem, "text-white font-normal": lightThem })}>
        Home
      </Link>

      {finalItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {separator}
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                " hover:text-orange-600 capitalize transition-colors",
                {
                  "text-slate-700": !lightThem,
                  "text-white font-normal": lightThem
                }
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span className={cn(" font-bold capitalize",
            {
              "text-[#222222]": !lightThem,
              "text-white": lightThem
            }
            
            )}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
