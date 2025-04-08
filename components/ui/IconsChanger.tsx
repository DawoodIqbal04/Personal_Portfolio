"use client";

import { useEffect } from "react";

export default function AnimatedFavicon() {
  useEffect(() => {
    const favicons = [
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

    let index = 0;
    const interval = setInterval(() => {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;

      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }

      link.type = "image/svg+xml";
      link.href = favicons[index];
      index = (index + 1) % favicons.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
