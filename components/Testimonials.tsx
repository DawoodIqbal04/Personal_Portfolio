import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <section className="pb-8" id="testimonials">
      <h1 className="heading">
        Warmed Testimonials From {""}
        <span className="text-purple">Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="h-[70vh] md:h-[40rem] rounded-md flex flex-col items-center antialiased relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            speed="slow"
            direction="right"
            className="mt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
