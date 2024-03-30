"use client";

import Timeline from "./timeline";
// import Image from "next/image";
import { Tabs } from "./ui/tabs";
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
export const TabsDemo: React.FC<JobExperienceProps>= ({timeline})=> {




  const tabs = [
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  p-2 md:p-10  bg-gradient-to-br from-gray-700 to-gray-900">
          <p className="text-xl md:text-4xl font-bold text-white p-2">Experience Tab</p>
          <DummyContent timeline={timeline.filter(t=>!t.forEducation)} />
        </div>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 md:p-10  bg-gradient-to-br from-gray-700 to-gray-900">
          <p className="text-xl md:text-4xl font-bold text-white p-2">Education tab</p>
          <DummyContent timeline={timeline.filter(t=>t.forEducation)} />
        </div>
      ),
    },
    
  ];

  return (
    <div className="max-w-5xl mx-auto mt-32">
     <div className="md:max-w-4xl w-full flex justify-between rounded">
<p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Timeline
      </p>
      <div></div>
      </div>
  
    <div className="h-[45rem] md:h-[43rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-4 mb-10 ">
      
      <Tabs tabs={tabs} />
    </div>
    </div>
  );
}

const DummyContent:React.FC<JobExperienceProps>= ({timeline})=> {
  
  return (
    <Timeline timeline={timeline}/>
  );
};
