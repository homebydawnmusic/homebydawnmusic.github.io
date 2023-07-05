import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export interface FadeInMotionProps {
  duration?: number;
  delay?: number;
  children: ReactNode;
}

export const FadeInMotion: React.FC<FadeInMotionProps> = (
  props: FadeInMotionProps
) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: props.duration ?? 1,
      delay: props.delay ?? 0,
      ease: "easeOut",
    }}
  >
    {props.children}
  </motion.div>
);
