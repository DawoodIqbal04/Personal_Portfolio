"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/ts.svg",
  "/js.svg",
  "/css.svg",
  "/html.svg",
  "/sanity.svg",
  "/next.svg",
  "/tail.svg",
  "/three.svg",
  "/gsap.svg",
  "/py.svg",
  "/st.svg",
  "/gemini.svg",
];

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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

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
          "flex max-w-full md:mx-20 fixed top-10 inset-x-0  border border-transparent dark:border-white/[0.2] rounded-full dark:bg-transparent backdrop-blur-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-4  items-center justify-center space-x-2 md:space-x-8",
          className
        )}
      >
        <div className="flex items-center absolute left-0 md:ml-10">
          <div className="w-10 h-10 md:ml-0 ml-4 border border-white/[0.2] rounded-full flex items-center justify-center">
            <Image
              src={images[index]}
              alt=""
              height={50}
              width={50}
              className="w-full h-full p-2"
            />
          </div>
        </div>
        {navItems.map((navItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative md:ml-0 ml-5 font-semibold tracking-wider dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
