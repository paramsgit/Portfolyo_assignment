import React,{useRef} from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


interface JobExperience {
  company_name?: string;
  summary?: string;
  sequence?: number;
  startDate?: string;
  endDate?: string;
  jobTitle?: string;
  jobLocation?: string;
  bulletPoints?: string[];
  forEducation?: boolean;
  enabled?: true;
  _id?: string;
  // Add other fields if needed
}

interface JobExperienceProps {
  timeline: JobExperience[];
}

const Timeline: React.FC<JobExperienceProps> = ({ timeline }) => {

    const contentWrapper = useRef(null);

   
  return (
    <div className='overflow-hidden'>

<Carousel className='' showStatus={false} showArrows={true} >

{timeline.map((item, idx) => (
          <div
            className="w-[350px] m-auto my-4 md:my-12 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[560px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item._id}
          >
          <div className=" text-white max-w-md  rounded-lg shadow-md overflow-hidden md:max-w-2xl">
  <div className="">
    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Job Title</div>
    <a href="#" className="block mt-1 text-lg leading-tight font-medium hover:underline">{item.company_name}</a>
    <p className="mt-2">{item.summary}</p>
    <ul className="list-disc ml-4 py-4">
      <li className="text-sm text-gray-300">{item.bulletPoints?.map((m)=>{
        return <li key={(idx++)*100}>{m}</li>
      })}</li>
     
    </ul>
    <div className="flex justify-between">
    <div className="flex mt-4">
      <div className="font-semibold">Start :</div>
      <div className="ml-2">{item.startDate &&( new Date(item.startDate).getMonth()+1)} / {item.startDate &&( new Date(item.startDate).getFullYear())}</div>
    </div>
    <div className="flex mt-2">
      <div className="font-semibold">End:</div>
      <div className="ml-2">{item.endDate &&( new Date(item.endDate).getMonth()+1)} / {item.endDate &&( new Date(item.endDate).getFullYear())}</div>
    </div>
    </div>
  </div>
</div>
          </div>
        ))} 
            </Carousel>


    {/* <div className='overflow-hidden timeLineWrapper' ref={contentWrapper}>
  <ul
        
        className={
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap"
        }
      >
       
      </ul>
      
    </div> */}
    {/* <div className='flex w-full justify-between px-2'>
    <button className='text-white'
      onClick={() => {
        sideScroll(contentWrapper.current, 10, 100, -10);
      }}
    >
      Left
    </button>
    <button className='text-white'
      onClick={() => {
        sideScroll(contentWrapper.current, 10, 100, 10);
      }}
    >
      Right
    </button>
  </div> */}
  </div>
  )
}

export default Timeline