import { useInView } from "framer-motion";
import { useRef } from "react";

export default function useInViewAnimation(
  options = {
    once: true,
    amount: 0.3,
  },
) {
  const ref = useRef(null);

  const isInView = useInView(ref, options);

  return {
    ref,
    isInView,
  };
}
