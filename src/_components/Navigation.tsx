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
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-slate1/80 backdrop-blur-md border-b border-slate3"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="flex items-center gap-6 py-4">
        {navItems.map((item, index) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href))

          return (
            <span key={item.href} className="flex items-center gap-6">
              <Link
                href={item.href}
                className={`text-sm transition-colors duration-150 no-underline ${
                  isActive
                    ? "text-crimson11"
                    : "text-slate11 hover:text-slate12"
                }`}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <span className="text-slate6">·</span>
              )}
            </span>
          )
        })}
      </nav>
    </header>
  )
}
