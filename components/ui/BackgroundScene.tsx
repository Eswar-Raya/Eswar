"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

const ORB_DEFINITIONS = [
  {
    id: "orb-blue",
    size: 550,
    color: "#1a6cf6",
    style: { top: "-120px", left: "-120px" },
    delay: 0,
  },
  {
    id: "orb-sky",
    size: 420,
    color: "#0ea5e9",
    style: { top: "40%", right: "-140px" },
    delay: -6,
  },
  {
    id: "orb-indigo",
    size: 380,
    color: "#6366f1",
    style: { bottom: "-120px", left: "10%" },
    delay: -12,
  },
] as const;

const STAR_COUNT = 90;

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function BackgroundScene() {
  const reduceMotion = useReducedMotion();
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      const generated: Star[] = Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        top: rand(0, 100),
        left: rand(0, 100),
        size: rand(0.4, 2.2),
        duration: rand(2.5, 5.5),
        delay: rand(0, 4),
      }));
      setStars(generated);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const orbAnimations = useMemo(
    () =>
      ORB_DEFINITIONS.map((orb) => ({
        ...orb,
        animate: reduceMotion
          ? undefined
          : {
              x: [0, 40, -30, 0],
              y: [0, -30, 25, 0],
              scale: [1, 1.08, 0.95, 1],
            },
      })),
    [reduceMotion],
  );

  return (
    <div className="bg-scene" aria-hidden="true">
      {orbAnimations.map((orb) => (
        <motion.div
          key={orb.id}
          className="bg-scene-orb"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            ...orb.style,
          }}
          animate={orb.animate}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: orb.delay,
                }
          }
        />
      ))}

      <div className="bg-scene-stars">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="bg-scene-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
            }}
            animate={
              reduceMotion
                ? { opacity: 0.6 }
                : { opacity: [0.15, 0.85, 0.15] }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: star.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: star.delay,
                  }
            }
          />
        ))}
      </div>
    </div>
  );
}
