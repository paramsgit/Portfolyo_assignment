"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/gradientBorder";

export default function HoverBorderGradientDemo(props:{
    name:string,
    percentage:number|string
}) {
  return (
    <div className="flex justify-center text-center">
       <button className="px-8 py-2 rounded-xl relative bg-gray-900 text-white text-sm hover:shadow-2xl transition duration-200 ">
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        <span className="relative z-20 font-mono">{props.name}</span>
        <h1 className="text-teal-500">{props.percentage}%</h1>
      </button>
    </div>
  );
}
