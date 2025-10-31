"use client";

import Link from "next/link";
import { BackArrow } from "./BackArrowicon";
import { useState } from "react";

export function BackHomeLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/"
      className="text-sm border-b px-2  py-0.5 rounded-full border-crimson9 hover:border-crimson8 font-bold text-slate10 hover:text-slate11 flex items-center gap-2 group w-max sticky top-2 bg-slate2  z-10 mb-6 no-underline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BackArrow
        isHovered={isHovered}
        size={18}
        className={`transition-all duration-200 text-slate10 hover:text-slate12`}
      />
      Back to Home
    </Link>
  );
}
