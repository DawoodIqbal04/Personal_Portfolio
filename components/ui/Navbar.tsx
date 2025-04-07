"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

const STAGGER = 0.025;
const DURATION = 0.25;

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.02) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-max mx-auto fixed top-10 inset-x-0  border border-transparent dark:border-white/[0.2] rounded-full dark:bg-transparent backdrop-blur-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-4  items-center justify-center space-x-4 md:space-x-8",
          className
        )}
      >
        {navItems.map((navItem, idx: number) => (
          <motion.a
            key={`link=${idx}`}
            href={navItem.link}
            initial="initial"
            whileHover="hover"
            className={cn(
              "relative overflow-hidden font-semibold tracking-wide dark:text-neutral-50 items-center flex text-neutral-600"
            )}
          >
            <div
              style={{
                lineHeight: 0.95,
              }}
              className="text-sm uppercase"
            >
              {navItem.name.split("").map((l, i) => (
                <motion.span
                  className="inline-block"
                  transition={{
                    duration: DURATION,
                    delay: STAGGER * i,
                  }}
                  variants={{
                    initial: { y: 0 },
                    hover: { y: "-100%" },
                  }}
                  key={i}
                >
                  {l}
                </motion.span>
              ))}
            </div>
            <div
              style={{
                lineHeight: 0.95,
              }}
              className="text-sm uppercase absolute inset-0"
            >
              {navItem.name.split("").map((l, i) => (
                <motion.span
                  className="inline-block"
                  transition={{
                    duration: DURATION,
                    delay: STAGGER * i,
                  }}
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: 0 },
                  }}
                  key={i}
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
