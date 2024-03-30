"use client"

import * as React from "react"
import { useEffect, Dispatch, SetStateAction }  from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../utils/cn"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"

interface ComboboxDemoProps {
  setfilter: Dispatch<SetStateAction<string>>;
}

export const ComboboxDemo: React.FC<ComboboxDemoProps> = ({ setfilter }) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  useEffect(() => {
    
  if(value){
    console.log(value)
    setfilter(value)
  }
   
  }, [value])
  
  const frameworks = [
    {
      value: "Reactjs ",
      label: "Reactjs",
    },
    {
      value: " Nextjs ",
      label: "Nextjs",
    },
    {
      value: " Mern ",
      label: "Mern",
    },
    {
      value: " CSS ",
      label: "CSS",
    },
    {
      value: " TailwindCSS",
      label: "TailwindCSS",
    },
  ]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="">
        <button
          
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-center items-center flex flex-row-reverse text-white"
        >
          {value?value:"Filter"}
          <ChevronsUpDown className="mx-3 ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px]">
        <Command className="bg-gray-900 p-2">
          <CommandGroup>
            {frameworks.map((f) => (

                // <div> {f.label}</div>

              <div
              className="text-white p-1 hover:bg-slate-700 rounded cursor-pointer"
                key={f.value}
                // value={framework.value}
                // onSelect={(currentValue) => {
                //   setValue(currentValue === value ? "" : currentValue)
                //   setOpen(false)
                // }}
                onClick={()=>{setValue(f.value); setOpen(false) }}

              >
                
                {f.label}
              </div>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ComboboxDemo