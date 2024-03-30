import React from "react";
import { cn } from "./utils/cn";
import { Spotlight } from "./ui/spotlight";
import { TypewriterEffectDemo } from "./typeSample";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl font-bold md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hi, I am <br /> <h1 className="md:text-7xl mt-2">John Doe</h1>
        </h1>
        <p className="mt-4 font-normal text-2xl text-neutral-300/60 max-w-2xl text-center mx-auto">
        I develop 3D visuals, user interfaces and web applications
       
        </p>
      </div>
    </div>
  );
}
