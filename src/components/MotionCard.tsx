"use client";

import { motion, type Variants } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, transform: "translateY(24px) scale(1)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px) scale(1)",
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

export function MotionCard({
  children,
  className = "",
  hover = true,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={hover ? { transform: "translateY(-4px) scale(1.02)" } : undefined}
      transition={{ duration: 0.2, ease: EASE_OUT }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
