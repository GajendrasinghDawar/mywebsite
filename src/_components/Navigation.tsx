"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/library", label: "Library" },
  { href: "/couplets", label: "Couplets" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-6 py-8">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href || 
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
  )
}
