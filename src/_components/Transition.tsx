"use client";

import { motion } from "motion/react";

export function Transition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex-1 flex flex-col w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.14,
        ease: [0.16, 1, 0.3, 1], // decisive, non-playful ease-out
      }}
    >
      {children}
    </motion.div>
  );
}
