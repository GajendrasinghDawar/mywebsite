"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/library", label: "Library" },
  { href: "/couplets", label: "Couplets" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200  px-6   bg-slate1/80 backdrop-blur-md border-b border-slate5/50`}
    >
      <nav className="max-w-2xl mx-auto">
        <ul className="flex items-center justify-start gap-3 sm:gap-4 md:gap-6 py-3 md:py-4">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <span
                key={item.href}
                className="flex items-center gap-3 sm:gap-4 md:gap-6 shrink-0"
              >
                <li>
                  {" "}
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
                </li>
              </span>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
