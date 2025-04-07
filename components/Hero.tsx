"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MagicButton } from "./ui/MagicButton";
import { Poppins, Big_Shoulders_Display } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/ts.svg",
  "/js.svg",
  "/css.svg",
  "/html.svg",
  "/Sanity.svg",
  "/next.svg",
  "/tail.svg",
  "/three.svg",
  "/gsap.svg",
  "/py.svg",
  "/st.svg",
  "/gemini.svg",
  "/shadcn.svg",
  "/swiper.svg",
];

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const shoulder = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20 pt-24 max-h-[100vh]">
      <div>
        <Spotlight />
      </div>

      <div className="h-screen w-full dark:bg-[#000319] bg-white  dark:bg-grid-white/[0.09] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000319] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center my-20 z-10 relative">
        <div className="max-w-[88vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-5 mb-5 md:gap-10">
            {[0, 1, 2, 3, 4].map((offset) => (
              <div key={offset} className="flex items-center">
                <div className="w-10 h-10 md:ml-0 ml-4 border border-white/[0.2] rounded-full flex items-center justify-center">
                  <Image
                    src={images[(index + offset) % images.length]}
                    alt=""
                    height={50}
                    width={50}
                    className="w-full h-full p-2"
                  />
                </div>
              </div>
            ))}
          </div>
          <h1>
            <TextGenerateEffect
              className={`${shoulder.className} tracking-widest text-center text-[40px] md:text-5xl lg:text-5xl `}
              words="Transforming Ideas In To Smooth And Seamless User Experiences "
            />
          </h1>
          <p
            className={`${poppins.className} head-two text-center text-sm md:text-base lg:text-base tracking-wider`}
          >
            Hi, I&apos;m Muhammad Dawood Iqbal, A Creative Frontend Developer
            Based In Pakistan.
          </p>
          <div>
            <Link href={"#projects"}>
              <MagicButton
                title="Explore My Work"
                icon={<FaArrowRightLong />}
                position="right"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
