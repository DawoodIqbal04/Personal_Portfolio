import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MagicButton } from "./ui/MagicButton";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full py-10 " id="contact">
      <div className="absolute w-full bottom-0  -right-75">
        <Image
          src="/grid.svg"
          alt="footerBg"
          height={500}
          width={500}
          className="w-full h-full opacity-90"
        />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="heading text-center md:max-w-[80vw]">
          Ready To Take Your{" "}
          <span className="text-purple">Digital Presence</span> To The{" "}
          <span className="text-purple">Next Level?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-lg text-center">
          Reach Me Out Today And Let&apos;s Discuss That How I Can Help You In
          Your Digital Journey.
        </p>
        <Link href={"mailto:dawoodjand356@gmail.com"}>
          <MagicButton
            title="Get In Touch"
            icon={<FaArrowRightLong />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between w-full mt-28">
        <p>CopyRight © 2024-2025 | Muhammad Dawood Iqbal </p>
        <div className="flex items-center gap-4">
          <Link
            href={"https://github.com/DawoodIqbal04"}
            className="z-10 bg-transparent border border-white-200 rounded-full"
          >
            <FaGithubSquare size={40} className="z-0 p-2" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/muhammad-dawood-bb469b29a/"}
            className="z-10 bg-transparent border border-white-200 rounded-full"
          >
            <FaLinkedin size={40} className="z-0 p-2" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
