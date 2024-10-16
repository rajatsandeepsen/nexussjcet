import React from 'react'

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen">
				<div className="header absolute top-0 left-0 p-4 z-10">
					<div className="w-24">
						<img src="./header-logo.svg" alt="Logo" />
					</div>
				</div>
				<div className="absolute -top-20 flex z-1">
					<img src="./fossday/clouds.svg" alt="" className="animate-float" />
					<img src="./fossday/clouds.svg" alt="" className="animate-float" />
				</div>
				<div className="absolute top-[30%] left-1/2 -translate-x-1/2 text-white font-pixelify font-bold text-7xl md:text-9xl">
					<h1>FOSSDAY </h1>
				</div>
                
                <div className="absolute bottom-0 md:bottom-[-10vh] z-1 flex overflow-hidden">
						<img src="./fossday/test.svg" alt="" className="w-full md:scale-[150%] scale-[210%] " />
                </div>
				
			</div>
  )
}
