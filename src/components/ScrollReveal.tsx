import { type ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

/** Reversible, scroll-linked reveal, matching the hero's opacity and upward movement. */
const ScrollReveal = ({ children, className }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 96%", "start 70%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [28, 0]);

  return (
    <motion.div ref={ref} className={className} style={reducedMotion ? undefined : { opacity, y }}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;