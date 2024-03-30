import { useRef } from "react";
// import Styled from "./styles";
import {
  Dialog,
  DialogClose,
  DialogContent,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

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





 const ProjectBox: React.FC<Props> = ({projects}) => {
  const contentWrapper = useRef(null);

  return (
   
<div className="md:p-4 p-2">
  

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

{projects.map((p)=>{
  return <div key={p._id}>
  <Dialog >
    <div className="projectDiv rounded-xl md:rounded-3xl">
    <DialogTrigger asChild>
        <img className="projectImage h-auto max-w-full cursor-pointer" src={p?.image?.url} alt={p?.image?.public_id} />
        </DialogTrigger>
        
        <div className="projectTitle absolute opacity-0 -mt-12 ml-6">
          <h1 className="text-xl font-semibold tracking-tight text-white">{p?.title}</h1>
        </div>


        <DialogContent className="bg-slate-800  md:max-w-[50rem]">
        <DialogHeader>
          <DialogTitle className="text-white">Details</DialogTitle>
          
        </DialogHeader>
       
        <div className="flex flex-col md:flex-row bg-slate-900 rounded-lg shadow-md overflow-hidden">
  
  <div className="md:w-1/2 flex justify-center items-center">
      <img src={p?.image?.url} alt="Project Image" className=" w-full  "/>
  </div>
 
  <div className="md:w-1/2 p-6">
   
      <h2 className="text-2xl font-bold mb-2 text-purple-800">{p?.title}</h2>
      
      <p className="text-gray-300 mb-4 text-sm">{p?.description}</p>
    
      <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">Tech Stack</h3>
          <ul className="list-disc list-inside text-gray-300 flex flex-wrap ">

            {p?.techStack.map((tm)=>{
              return  <li className="m-2">{tm}</li>
            })}

             
          </ul>
      </div>

      <div className="flex space-x-4">
      
          <a href={p?.liveurl} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300">Live </a>
          
          <a href={p?.githuburl} className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-900 transition duration-300">GitHub</a>
      </div>
  </div>
</div>
       
     
      </DialogContent>
    </div>
    </Dialog> 
  </div>
})}

{/* <Dialog >
    <div className="projectDiv rounded-xl md:rounded-3xl">
    <DialogTrigger asChild>
        <img className="projectImage h-auto max-w-full cursor-pointer" src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706285511679-xe7r9t" alt="" />
        </DialogTrigger>
        
        <div className="projectTitle absolute opacity-0 -mt-12 ml-6">
          <h1 className="text-xl font-semibold tracking-tight text-white">Title of Project</h1>
        </div>


        <DialogContent className="bg-slate-800  md:max-w-[50rem]">
        <DialogHeader>
          <DialogTitle className="text-white">Details</DialogTitle>
          
        </DialogHeader>
       
        <div className="flex flex-col md:flex-row bg-slate-900 rounded-lg shadow-md overflow-hidden">
  
  <div className="md:w-1/2">
      <img src={photos[1]} alt="Project Image" className=" w-full h-full "/>
  </div>
 
  <div className="md:w-1/2 p-6">
   
      <h2 className="text-2xl font-bold mb-2 text-purple-800">Project Title</h2>
      
      <p className="text-gray-300 mb-4 text-sm">Project Description goes here. Briefly describe your project.</p>
    
      <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">Tech Stack</h3>
          <ul className="list-disc list-inside text-gray-300 flex flex-wrap ">
              <li className="m-2">Tech 1</li>
              <li className="m-2">Tech 2</li>
              <li className="m-2">Tech 3</li>
          </ul>
      </div>

      <div className="flex space-x-4">
      
          <a href="#" className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300">Live Link</a>
          
          <a href="#" className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-900 transition duration-300">GitHub</a>
      </div>
  </div>
</div>
       
     
      </DialogContent>
    </div>
    </Dialog>  */}
</div>







</div>
  );
}
export default ProjectBox
