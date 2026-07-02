/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/immutability */
import { useEffect, useRef, useState } from "react";

function parseValue(value) {
  const stringValue = String(value);

  const prefix = stringValue.match(/^[^\d-]+/)?.[0] || "";

  const suffix = stringValue.match(/[^\d.,]+$/)?.[0] || "";

  const numeric = parseFloat(
    stringValue.replace(/[^\d.-]/g, "")
  );

  return {
    prefix,
    suffix,
    numeric,
    hasDecimal: numeric % 1 !== 0,
  };
}

export default function AnimatedCounter({
  value,
  duration = 1800,
}) {
  const ref = useRef(null);

  const started = useRef(false);

  const [displayValue, setDisplayValue] =
    useState(0);

  const {
    prefix,
    suffix,
    numeric,
    hasDecimal,
  } = parseValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !started.current
        ) {
          started.current = true;

          animate();
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  function animate() {
    const start = performance.now();

    function update(now) {
      const progress = Math.min(
        (now - start) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      const current =
        numeric * eased;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  const formatted = hasDecimal
    ? displayValue.toFixed(1)
    : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}