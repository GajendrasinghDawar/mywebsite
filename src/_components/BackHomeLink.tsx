"use client";

import Link from "next/link";
import { BackArrow } from "./BackArrowicon";
import { useState } from "react";

export function BackHomeLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/projects"
      className={`
        z-30 w-max
        flex items-center gap-2.5
       py-2 rounded-md
        mb-8
        
         backdrop-blur-md
      
        text-slate11 no-underline
        
        transition-all duration-300 ease-out
        hover:text-slate12 
        text-sm 
        `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BackArrow
        isHovered={isHovered}
        size={12}
        className={`transition-all duration-200 text-slate10 hover:text-slate12`}
      />
      Back to Projects
    </Link>
  );
}
