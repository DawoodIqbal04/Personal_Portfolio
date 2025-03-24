"use client";

import dynamic from 'next/dynamic'
// import Lottie from 'react-lottie'
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import { cn } from '@/lib/utils';
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientBg";
import { poppins } from "../Hero";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { RiCheckDoubleFill } from 'react-icons/ri';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  titleClassName,
  img,
  imgClassName,
  spareImage,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  titleClassName?: string;
  img?: string;
  imgClassName?: string;
  spareImage?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dawoodjand356@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={500}
              height={500}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImage && (
            <Image
              src={spareImage}
              alt={spareImage}
              width={500}
              height={500}
              className="object-cover object-center w-full h-full "
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center font-bold text-white" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 "
          )}
        >
          <div
            className={`font-sans font-light tracking-wide text-[#c1c2d3] text-sm md:text-base lg:text-base`}
          >
            {description}
          </div>
          <div
            className={`${poppins.className} font-sans font-semibold text-lg lg:text-2xl max-w-96 z-10`}
          >
            {title}
          </div>
          {id === 3 && (
            <div className="flex gap-1 lg:gap-4 w-fit absolute -right-3 lg:-right-0">
              <div className="flex flex-col gap-3 lg:gap-2">
                {["React.js", "Next.js", "Typescript"].map((items) => (
                  <span
                    key={items}
                    className="py-2 px-3 lg:px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {items}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-2">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["Tailwind", "Python", "GenAI"].map((items) => (
                  <span
                    key={items}
                    className="py-2 px-3 lg:px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {items}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative ">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy My Email"}
                icon={copied ? <RiCheckDoubleFill size={20} /> : <IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                onClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
