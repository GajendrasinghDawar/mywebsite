"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/library", label: "Library" },
  { href: "/couplets", label: "Couplets" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 h-14 bg-slate1/80 backdrop-blur-md">
      <nav className="h-full max-w-2xl mx-auto px-6 md:px-0 flex items-center">
        <ul className="flex items-center gap-4 sm:gap-5 md:gap-6 list-none m-0 p-0">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors duration-150 no-underline ${
                    isActive
                      ? "text-crimson10"
                      : "text-slate11 hover:text-slate12"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
