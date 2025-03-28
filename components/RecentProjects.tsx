import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <section className="pt-20 md:pb-10" id="projects">
      <h1 className="heading">
        A Small Selection of My {""}{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="md:flex flex-wrap sm:grid grid-cols-1 sm:-space-y-40 md:-space-y-0 items-center justify-center p-4 md:gap-x-24">
        {projects.map(({ title, des, iconLists, id, img, link }) => (
          <div
            key={id}
            className="h-[41rem] lg:min-h-[32.5rem] flex items-center justify-center w-full md:w-[40vw]"
          >
            <PinContainer title={title} href={link} className="pin">
              <div className="flex items-center justify-center relative w-[80vw] md:w-[40vw] lg:w-[40vw] sm:h-[40vh] overflow-hidden h-[30vh] mb-10">
                <div className="relative w-full h-full lg:rounded-3xl overflow-hidden bg-[#13162d]">
                  <Image src="/bg.png" alt="cover" width={500} height={500} />
                </div>
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={500}
                  className="z-10 w-full h-full absolute md:bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl line-clamp-1 text-base">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between gap-2 mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, i) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] bg-black-100 lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center gap-2"
                      style={{ transform: `translate(-${5 * i * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt="icon"
                        width={0}
                        height={0}
                        className="p-2 w-full h-full"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaArrowRightLong
                    className="ms-3 rotate-[300deg] transition duration-500 icon"
                    color="#CBACF9"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
