import React from 'react'

interface dataTypes{
 data:{ name?: string;
  desc?: string;
  charge?: string;
  _id?: string;
  enabled?: boolean;
  image?: {
    public_id?:string,
    url?:string,
  }}
}

const ServiceCard :React.FC<dataTypes>  = (props) => {

  const name = props?.data?.name;
  const desc = props?.data?.desc;
  const charge = props?.data?.charge;
  const enabled = props?.data?.name;
  const imageUrl = props?.data?.image?.url;
 
  return (
    
        <div className="relative flex w-full flex-col overflow-hidden rounded-lg bg-gray-900 ">
  <div className="relative flex h-60 overflow-hidden rounded-xl" >
    <img className="object-cover shadow-lg w-full" src={imageUrl} alt="product image" />
  </div>
  <div className="mt-4 px-5 pb-5">
    <a href="#">
      <h5 className="text-xl tracking-tight text-white">{ name}</h5>
    </a>
    <p className='text-gray-400 text-sm' >
    Design direction for business. Get your business on the next level. We help to create great experiences.
    </p>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-xl font-bold text-green-600">{charge}</span>
        {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
      </p>
      <div className="flex items-center">
      <button className="transition ease-in duration-300 inline-flex items-center text-xs font-medium mb-2 md:mb-0 bg-purple-500 px-3 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                  <span>Contact</span>
                </button>
      </div>
    </div>
    
  </div>
</div>

  
  )
}

export default ServiceCard