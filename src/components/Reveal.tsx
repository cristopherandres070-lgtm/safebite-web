"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: EASE_OUT, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
