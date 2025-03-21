import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { Poppins, Big_Shoulders_Display } from "next/font/google";

export const poppins = Poppins({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})
export const shoulder = Big_Shoulders_Display({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})


const Hero = () => {
  return (
    <div className="pb-20 pt-24 max-h-[100vh]">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-12 md:left-[80%] sm:left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="hidden md:flex top-12 left-full h-[80vh] w-[50vw]"
          fill="grey"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-[#000319] bg-white  dark:bg-grid-white/[0.09] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000319] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center my-20 z-10 relative">
        <div className="max-w-[88vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center gap-3">
          <h2 className={`${poppins.className} Uppercase tracking-widest text-sm text-blue-100 max-w-96 text-center`}>
            Next.js redefines web magic—dynamic, fast, and endlessly adaptable
          </h2>
          <h1>
            <TextGenerateEffect
              className={`${shoulder.className} tracking-wider text-center text-[40px] md:text-5xl lg:text-5xl ` }
              words="Transforming Concepts In To Smooth And Seamless User Experiences "
            />
          </h1>
            <p className={`${poppins.className} text-center text-sm md:text-base lg:text-base tracking-wider` }>
            Hi, I&apos;m Muhammad Dawood Iqbal, A Full Stack Developer Based In Pakistan
            </p>
            <div>
              <MagicButton title="Explore My Work" icon={<FaLocationArrow/>} position="right"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
