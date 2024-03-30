import React, { useEffect, useState } from 'react'
import ProjectBox from './projectBox'
import { ComboboxDemo } from './ui/comboBox'
interface Image {
  public_id: string;
  url: string;
}

interface Project {
  liveurl: string;
  githuburl: string;
  title: string;
  sequence: number;
  image: Image;
  description: string;
  techStack: string[];
  _id: string;
  enabled: boolean;
}

interface Props {
  projects: Project[];
}
const ProjectSection: React.FC<Props> = ({projects}) => {
  const [techStack,settechStack]=useState("");
  const [projectsData,setprojectsData]=useState(projects);

  useEffect(() => {
    if(techStack){
      console.log(projects.filter(project => project.techStack.includes(techStack)))
     setprojectsData( projects.filter(project => project.techStack.includes(techStack)))
    }
  }, [techStack])
  

  return (
   <>
   <div className=' flex justify-center'>
   <div className=' md:max-w-6xl '>
    <div className='flex justify-between items-center flex-wrap  md:p-4'>
   <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Projects
      </p>

<div>
    <ComboboxDemo setfilter={settechStack} />
</div>

      </div>
      <ProjectBox projects={projectsData}/>

   </div>
   </div>
   </>
  )
}

export default ProjectSection