import Image from "next/image";

export default function ProjectMat() {
    return (
      <div className="relative w-full max-w-3xl h-[40vh] bg-blue-600 rounded-lg overflow-hidden drop-shadow-xl">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 " 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* Content Container */}
        <div className="relative h-full p-8 flex flex-col ">
          {/* Brand Text */}
          <div className="text-white/90 ">
            <div className="inline-block  text-blue-600  ">
              {/* <h2 className="text-lg font-mono font-bold">
                the nexus project_
              </h2> */}
              <Image src={"/header-logo.svg"}  alt="Nexus Logo" width={80} height={80} />
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-wide text-left" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
            Project of the week
          </h1>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full" />
          <div className="absolute top-8 right-8 w-8 h-8 border border-white/10 rounded-full" />
          <div className="absolute bottom-8 left-12 w-20 h-20 border border-white/10 rounded-lg rotate-12" />
        </div>
        
        {/* Corner Markers */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/30" />
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/30" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/30" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/30" />
      </div>
    )
  }
  
  