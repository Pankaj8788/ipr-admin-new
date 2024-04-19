import { aboutSection1 } from "ipadmin/Assets/about";
import React from "react";

export default function AboutCard() {
  return (
    <section className="w-full flex items-center justify-between h-[30rem]">
      <div className="w-full p-6 flex flex-col item-start justify-start gap-6 h-full">
        <h2 className="text-xl lg:text-5xl font-semibold text-white">
          Our Vision
        </h2>
        <div>
          <p className="text-xl lg:text-1xl  font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua..
          </p>
          <p></p>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden">
        <img
          src={aboutSection1.src}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
