"use client";
import React from "react";
import HoverBorderGradientDemo  from "./toolTip";


// const  skillsData= [
//     {
//       "enabled": true,
//       "name": "C++",
//       "sequence": 17,
//       "percentage": 87,
//       "image": {
//         "public_id": "1706288734207-4rlz3m",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288734207-4rlz3m",
//         "_id": "65b3e661b48589dfcae187f8"
//       },
//       "_id": "65b3e661b48589dfcae187f7"
//     },
//     {
//       "enabled": false,
//       "name": "Python",
//       "sequence": 16,
//       "percentage": 86,
//       "image": {
//         "public_id": "1706288708710-nrq74s",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288708710-nrq74s",
//         "_id": "65b3e645b48589dfcae187a3"
//       },
//       "_id": "65b3e645b48589dfcae187a2"
//     },
//     {
//       "enabled": true,
//       "name": "Docker",
//       "sequence": 16,
//       "percentage": 85,
//       "image": {
//         "public_id": "1706287155946-z2oybb",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287155946-z2oybb",
//         "_id": "65b3e034b48589dfcae182ce"
//       },
//       "_id": "65b3e034b48589dfcae182cd"
//     },
//     {
//       "enabled": true,
//       "name": "Figma",
//       "sequence": 15,
//       "percentage": 95,
//       "image": {
//         "public_id": "1706287138776-slfc3e",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287138776-slfc3e",
//         "_id": "65b3e023b48589dfcae18289"
//       },
//       "_id": "65b3e023b48589dfcae18288"
//     },
//     {
//       "enabled": true,
//       "name": "TypeScript",
//       "sequence": 6,
//       "percentage": 90,
//       "image": {
//         "public_id": "1706287104739-pm8en",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706287104739-pm8en",
//         "_id": "65b3e001b48589dfcae18246"
//       },
//       "_id": "65b3e001b48589dfcae18245"
//     },
//     {
//       "enabled": true,
//       "name": "Node.js",
//       "sequence": 7,
//       "percentage": 92,
//       "image": {
//         "public_id": "1706286990341-tznh4",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286990341-tznh4",
//         "_id": "65b3df8fb48589dfcae18205"
//       },
//       "_id": "65b3df8fb48589dfcae18204"
//     },
//     {
//       "enabled": true,
//       "name": "MongoDB",
//       "sequence": 13,
//       "percentage": 70,
//       "image": {
//         "public_id": "1706286966065-p2yrx9",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286966065-p2yrx9",
//         "_id": "65b3df76b48589dfcae181c6"
//       },
//       "_id": "65b3df76b48589dfcae181c5"
//     },
//     {
//       "enabled": true,
//       "name": "Three.js",
//       "sequence": 9,
//       "percentage": 70,
//       "image": {
//         "public_id": "1706286941212-chpzl",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286941212-chpzl",
//         "_id": "65b3df5db48589dfcae18189"
//       },
//       "_id": "65b3df5db48589dfcae18188"
//     },
//     {
//       "enabled": true,
//       "name": "Redux",
//       "sequence": 7,
//       "percentage": 95,
//       "image": {
//         "public_id": "1706286913147-nwiky8",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286913147-nwiky8",
//         "_id": "65b3df41b48589dfcae1814e"
//       },
//       "_id": "65b3df41b48589dfcae1814d"
//     },
//     {
//       "enabled": true,
//       "name": "Javascript",
//       "sequence": 3,
//       "percentage": 95,
//       "image": {
//         "public_id": "1706288679775-y4qwn3",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706288679775-y4qwn3",
//         "_id": "65b3e628b48589dfcae18750"
//       },
//       "_id": "65b3df24b48589dfcae18114"
//     },
//     {
//       "enabled": true,
//       "name": "Git",
//       "sequence": 12,
//       "percentage": 95,
//       "image": {
//         "public_id": "1706286842731-r0eyn",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286842731-r0eyn",
//         "_id": "65b3defbb48589dfcae180de"
//       },
//       "_id": "65b3defbb48589dfcae180dd"
//     },
//     {
//       "enabled": true,
//       "name": "Github",
//       "sequence": 11,
//       "percentage": 95,
//       "image": {
//         "public_id": "1706286821409-21cuqs",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286821409-21cuqs",
//         "_id": "65b3dee5b48589dfcae180a9"
//       },
//       "_id": "65b3dee5b48589dfcae180a8"
//     },
//     {
//       "enabled": true,
//       "name": "Sass",
//       "sequence": 10,
//       "percentage": 95,
//       "image": {
//         "public_id": "1706286780392-39i48h",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286780392-39i48h",
//         "_id": "65b3debcb48589dfcae18076"
//       },
//       "_id": "65b3debcb48589dfcae18075"
//     },
//     {
//       "enabled": true,
//       "name": "GraphQl",
//       "sequence": 9,
//       "percentage": 80,
//       "image": {
//         "public_id": "1706286760237-gh4idq",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286760237-gh4idq",
//         "_id": "65b3dea8b48589dfcae18045"
//       },
//       "_id": "65b3dea8b48589dfcae18044"
//     },
//     {
//       "enabled": true,
//       "name": "Vercel",
//       "sequence": 7,
//       "percentage": 90,
//       "image": {
//         "public_id": "1706286729467-rbblgb",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286729467-rbblgb",
//         "_id": "65b3de89b48589dfcae18016"
//       },
//       "_id": "65b3de89b48589dfcae18015"
//     },
//     {
//       "enabled": true,
//       "name": "Next.js",
//       "sequence": 6,
//       "percentage": 90,
//       "image": {
//         "public_id": "1706286682511-rgp96r",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286682511-rgp96r",
//         "_id": "65b3de5bb48589dfcae17fe9"
//       },
//       "_id": "65b3de5bb48589dfcae17fe8"
//     },
//     {
//       "enabled": true,
//       "name": "React",
//       "sequence": 5,
//       "percentage": 90,
//       "image": {
//         "public_id": "1706291833080-0loo09",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706291833080-0loo09",
//         "_id": "65b3f27aeb20546ae6d49e76"
//       },
//       "_id": "65b3de41b48589dfcae17fbd"
//     },
//     {
//       "enabled": true,
//       "name": "Tailwind",
//       "sequence": 4,
//       "percentage": 99,
//       "image": {
//         "public_id": "1706286616701-2jka3q",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286616701-2jka3q",
//         "_id": "65b3de19b48589dfcae17f95"
//       },
//       "_id": "65b3de19b48589dfcae17f94"
//     },
//     {
//       "enabled": true,
//       "name": "CSS",
//       "sequence": 2,
//       "percentage": 97,
//       "image": {
//         "public_id": "1706286273084-romle",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286273084-romle"
//       },
//       "_id": "65b3dcc1b48589dfcae17e4d"
//     },
//     {
//       "name": "HTML",
//       "sequence": 1,
//       "percentage": 98,
//       "image": {
//         "public_id": "1706286058630-v3ax0a",
//         "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706286058630-v3ax0a"
//       },
//       "_id": "65b3dbeba5c8d2db7b6164bc",
//       "enabled": true
//     }
//   ]

  interface Image {
    public_id: string;
    url: string;
    _id?: string; // Optional, as it's not present in all objects
  }
  
  interface Skill {
    enabled?: boolean; // Optional, as it's not present in all objects
    name: string;
    sequence: number;
    percentage: number;
    image: Image;
    _id: string;
  }
  
  interface Props {
    skillsData: Skill[];
  }
export const Skills:React.FC<Props>=({skillsData})=> {

  

  return (
    <div className="w-full flex flex-col items-center mt-[100px] my-10 p-4 md:p-0">
        <div className="md:max-w-4xl w-full flex justify-between rounded">
<p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Skills
      </p>
      <div></div>
      </div>

    <div className="rounded-xl py-12 px-3 md:py-16 md:px-6 md:max-w-4xl w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="rounded-xl absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
     
     <div className="flex flex-wrap justify-center">

        {
            skillsData.map((skill)=>{
                if (skill.enabled)
                return <div key={skill._id} className="ParentOfBoth flex flex-col items-center hover:bg-blue-950 rounded-xl">

                    <div className="ToolTip opacity-0 absolute -mt-12" >
                       <HoverBorderGradientDemo name={skill?.name} percentage={skill?.percentage}/>
                    </div>

                    <div className="childOfToolTip p-2  ">
        <img className="max-w-12 md:max-w-16" src={skill?.image?.url} />
        </div>
                </div>
                else return <></>
            })
        }

        
    
     </div>

    </div>
    </div>
  );
}
