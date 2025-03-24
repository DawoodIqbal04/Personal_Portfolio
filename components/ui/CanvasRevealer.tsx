"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./CanvasRevealEffect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="my-28 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 01" />}
          desc="Together, we'll shape your website's vision—defining its goals, audience, and must-have features. We'll craft a seamless structure, intuitive navigation, and a content plan that drives engagement."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900 rounded-2xl overflow-hidden"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 02" />}
          desc="Once we lock in the plan, I hit play on my lofi beats and dive into coding. From rough drafts to refined code, I keep you in the loop at every stage."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-2xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
          />
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          desc="This is where the vision comes to life! With the approved design as my blueprint, I'll craft your website from scratch, turning ideas into seamless code."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-2xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  desc,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  desc: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 rounded-2xl relative lg:h-[35rem]"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-white-200 text-base text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-6  font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {desc}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative w-36 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex px-4 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 text-xl font-bold text-white backdrop-blur-3xl">
        {order}
      </span>
    </button>
  );
};

export const Icon = ({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement> & { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
