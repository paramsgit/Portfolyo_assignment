import React from 'react'
import { HoverEffect } from './hoverCard'

// export const  services= [
//   {
//     "name": "App Development",
//     "charge": "$300",
//     "desc": "Design direction for business. Get your business on the next level. We help to create great experiences.",
//     "enabled": true,
//     "_id": "65f1fd690556c3f887e9d94a",
//     "image": {
//       "public_id": "portfolio3/1710364293287-4q1ngo.webp",
//       "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp"
//     }
//   },
//   {
//     "name": "Web & App ",
//     "charge": "$600",
//     "desc": "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
//     "image": {
//       "public_id": "portfolio3/1710357775748-9vwq4q.jpeg",
//       "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357775748-9vwq4q.jpeg"
//     },
//     "enabled": true,
//     "_id": "65f1fd100556c3f887e9d87b"
//   },
//   {
//     "name": "UI/UX Solutions",
//     "charge": "$399",
//     "desc": "Design direction for business. Get your business on the next level. We help to create great experiences.",
//     "image": {
//       "public_id": "1706290914024-725ytf",
//       "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706290914024-725ytf",
//       "_id": "65b3eee8eb20546ae6d467fe"
//     },
//     "_id": "65b3e33db48589dfcae1851d",
//     "enabled": true
//   },
//   {
//     "name": "Global Marketing",
//     "charge": "$699",
//     "desc": "Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.",
//     "image": {
//       "public_id": "portfolio3/1710357668346-ke8kgt.jpeg",
//       "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357668346-ke8kgt.jpeg"
//     },
//     "_id": "65b3e322b48589dfcae184d0",
//     "enabled": true
//   },
//   {
//     "name": "Brand Consultant",
//     "charge": "$499",
//     "desc": "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
//     "image": {
//       "public_id": "portfolio3/1710357680224-phijt.png",
//       "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357680224-phijt.png"
//     },
//     "_id": "65b3e2f6b48589dfcae1843b",
//     "enabled": true
//   },
//   {
//     "name": "Wordpress Development",
//     "charge": "$499",
//     "desc": "Get yourself a website.",
//     "image": {
//       "public_id": "portfolio3/1710357752227-6f5trs.jpeg",
//       "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357752227-6f5trs.jpeg"
//     },
//     "_id": "65b3e2a6b48589dfcae183f2",
//     "enabled": true
//   }
// ]

interface Service {
  name?: string;
  charge?: string;
  desc?: string;
  enabled?: boolean;
  _id?: string;
  image?: {
    public_id?: string;
    url?: string;
  };
}

interface Props {
  services: Service[];
}
const ServiceSection:React.FC<Props> = ({services}) => {

if(services.length==0)
return <></>

  return (
    <div>

<div className="max-w-5xl mx-auto px-8">
<div className="md:max-w-4xl w-full flex justify-between rounded">
<p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Services
      </p>
      <div></div>
      </div>
      <HoverEffect items={services} />
    </div>

    </div>
  )
}

export default ServiceSection