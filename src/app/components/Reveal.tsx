"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;     // seconds
  amount?: number;    // 0..1 portion visible to trigger
  className?: string; // allows sizing like h-full w-full
};

export default function Reveal({ children, delay = 0, amount = 0.2, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount });
  const prefersReducedMotion = useReducedMotion();

  // Define variants HERE so it's in scope
  const variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 24, filter: "blur(2px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } };

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
