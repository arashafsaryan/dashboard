import { motion } from "framer-motion";

import useInViewAnimation from "../../../hooks/useInViewAnimation";

export default function FadeUp({ children, delay = 0 }) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 24,
        filter: "blur(4px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
