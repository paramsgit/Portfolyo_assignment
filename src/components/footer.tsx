"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { FooterForm } from "./footerForm";
import rmap from '../assets/rmap.png'
import mail from '../assets/mail.png'
import telephone from '../assets/telephone.png'

interface About {
  name?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  quote?: string;
  exp_year?: string;
  address?: string;
  some_total?: string;
  phoneNumber?: string;
  contactEmail?: string;
  avatar?: {
    public_id?: string;
    url?: string;
  };
  alternateAvatars?: {
    public_id?: string;
    url?: string;
  }[];
}
interface SocialHandle {
  platform?: string;
  url?: string;
  image?: {
    public_id?: string;
    url?: string;
  };
  enabled: boolean;
  _id: string;
}
interface ProfileProps {
  about: About;
  socialHandles: SocialHandle[];
}

export const Footer: React.FC<ProfileProps> = ({ about, socialHandles })=> {
  return (
    <WavyBackground className="max-w-4xl w-full mx-auto">
  

      <div className="flex md:flex-row flex-col ">
        <div className="left md:w-1/2">
            <FooterForm/>
        </div>
        <div className="right md:w-1/2">

        <div className="p-2 md:px-6 flex item-center flex-col">
            <div className="my-2">
            
<a href="#" className="glassy flex flex-row items-center rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-900">
    <img className="object-cover rounded-t-lg md:h-auto w-16 md:w-16 md:rounded-none md:rounded-s-lg" src={rmap} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Address</h5>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{about.address}</p>
    </div>
</a>

            </div>
            <div className="my-2">
            
<a href="#" className="glassy flex flex-row items-center rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-900">
    <img className="object-cover rounded-t-lg md:h-auto w-16 md:w-16 md:rounded-none md:rounded-s-lg" src={telephone} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Phone</h5>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{about.phoneNumber}</p>
    </div>
</a>

            </div>
            <div className="my-2">
            
<a href="#" className="glassy flex flex-row items-center rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-900">
    <img className="object-cover rounded-t-lg md:h-auto w-16 md:w-16 md:rounded-none md:rounded-s-lg" src={mail} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Email</h5>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{about.contactEmail}</p>
    </div>
</a>

            </div>
            <div className="m-2">
              <div className="flex flex-wrap justify-evenly items-center">
                {socialHandles.map((s)=>{
                  return <a key={s._id} href={s.url}>
                     <img className="w-12 md:w-14 m-2" src={s?.image?.url} alt="" />
               
                  </a>
                })}
                </div>
            </div>
        </div>

        </div>
      </div>

    </WavyBackground>
  );
}
