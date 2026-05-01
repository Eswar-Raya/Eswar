"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1.2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      const id = window.requestAnimationFrame(() => setValue(target));
      return () => window.cancelAnimationFrame(id);
    }
  }, [inView, reduceMotion, target]);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const totalFrames = Math.max(1, Math.round(duration * 60));
    const frameMs = 1000 / 60;
    let frame = 0;

    const interval = window.setInterval(() => {
      frame += 1;
      const elapsed = Math.min(1, frame / totalFrames);
      const easedValue = Math.round(easeOut(elapsed) * target);
      if (frame >= totalFrames) {
        window.clearInterval(interval);
        setValue(target);
      } else {
        setValue(easedValue);
      }
    }, frameMs);

    return () => window.clearInterval(interval);
  }, [inView, reduceMotion, target, duration]);

  const display = reduceMotion ? target : value;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
