
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
interface testimonial{
  image: {
    public_id: string;
    url: string;
  };
  name: string;
  review: string;
  position: string;
  enabled: boolean;
  _id: string; 
}

interface Props{
  testimonials:testimonial[]
}
export const InfiniteMovingCardsDemo:React.FC<Props>=({testimonials}) =>{
  return (
    <div className="h-[40rem] mx-3 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}


