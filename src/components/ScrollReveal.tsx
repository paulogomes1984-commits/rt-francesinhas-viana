import { type ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  finishAtBottom?: boolean;
  delay?: number;
};

/** Reversible, scroll-linked reveal, matching the hero's opacity and upward movement. */
const ScrollReveal = ({ children, className, finishAtBottom = false, delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: finishAtBottom ? ["start 100%", "end 100%"] : ["start 98%", "start 52%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.5 });
  const opacity = useTransform(progress, [delay, 1], [0, 1]);
  const y = useTransform(progress, [delay, 1], [48, 0]);

  return (
    <motion.div ref={ref} className={className} style={reducedMotion ? undefined : { opacity, y }}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;