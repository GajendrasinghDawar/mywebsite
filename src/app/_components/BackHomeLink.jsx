"use client"

import Link from "next/link"
import { BackArrow } from "@/components/BackArrowicon"
import { useState } from "react"

export function BackHomeLink() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/"
      className="text-base border-b-2 px-2 rounded-full border-purple9 hover:border-iris12 font-bold text-iris11 hover:text-iris12 flex items-center gap-2 group w-max sticky top-2 bg-yellow6  z-10 mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BackArrow isHovered={isHovered} />
      Back to Home
    </Link>
  )
}
