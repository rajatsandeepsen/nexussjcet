import React from 'react'

export default function CommunityPage() {
  return (
    <div className='w-screen h-screen p-4 flex items-center justify-around flex-col'>
        <h2 className='text-[#F0FF47] font-medium font-pixelify text-4xl  md:text-6xl text-center'>Community Partners</h2>

        <div className='flex items-center justify-center gap-4 flex-wrap'>
            <img src="./fossday/tinkerhub.svg" alt="Tinkerhub" className='w-40 md:w-1/5'/>
            <img src="./fossday/iedc.svg" alt="IEDC" className='w-40 md:w-1/5'/>
            <img src="./fossday/bootcamp.svg" alt="Bootcamp" className='w-40 md:w-1/5'/>
            <img src="./fossday/mulearn.svg" alt="MuLearn" className='w-40 md:w-1/5' />
        </div>
    </div>
  )
}
