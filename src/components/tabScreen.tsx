"use client";
import React from "react";
import { ContainerScroll } from "./ui/scrollTab";

export function TabScreen() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              With 5+ years of experience as <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Software Developer
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users=[]

// export const users = [
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
  
// ];
