"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/library", label: "Library" },
  { href: "/couplets", label: "Couplets" },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 -mx-6 px-6 md:mx-0 md:px-0 ${
        scrolled
          ? "bg-slate1/80 backdrop-blur-md border-b border-slate3"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="flex items-center justify-start gap-3 sm:gap-4 md:gap-6 py-3 md:py-4 overflow-x-auto scrollbar-none">
        {navItems.map((item, index) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href))

          return (
            <span key={item.href} className="flex items-center gap-3 sm:gap-4 md:gap-6 shrink-0">
              <Link
                href={item.href}
                className={`text-sm py-1 px-0.5 transition-colors duration-150 no-underline active:opacity-70 ${
                  isActive
                    ? "text-crimson11"
                    : "text-slate11 hover:text-slate12"
                }`}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <span className="text-slate6 select-none">·</span>
              )}
            </span>
          )
        })}
      </nav>
    </header>
  )
}
