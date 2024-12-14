"use client";
import Image from "next/image";

export default function Page(){
	return (
		<div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
			<div className="absolute h-screen w-full overflow-hidden z-30 mix-blend-multiply">
				<Image
					src="/projects/shadow.webp"
					width={1000}
					height={1000}
					alt="smooth shadow" className="min-w-[1500px] md:min-w-screen"/>
			</div>
			{/* TOP PORTION */}
			<div className="absolute w-56 -left-16 -top-12 md:w-80">
				<Image
					src="/projects/circuitboard.webp"
					width={1000}
					height={1000}
					alt="circuit board"/>
			</div>
			<div className="absolute w-64 top-24 z-10 md:left-96 md:top-5">
				<Image
					src="/projects/cable.webp"
					width={1000}
					height={1000}
					alt="cable"/>
			</div>
			<div className="absolute w-[500px] -right-64 -top-56 z-10 md:w-[600px] md:-right-44 md:z-20">
				<Image
					src="/projects/magazinefolder.webp"
					width={1000}
					height={1000}
					alt="folder"/>
			</div>
			<div className="absolute w-[350px] -right-24 -top-12 md:w-[400px] md:z-10">
				<Image
					src="/projects/blackprint.webp"
					width={1000}
					height={1000}
					alt="black prints"/>
			</div>
			<div className="absolute w-44 top-72 left-24 z-10 md:w-64">
				<Image
					src="/projects/gears.webp"
					width={1000}
					height={1000}
					alt="gears"/>
			</div>
			<div className="absolute w-32 top-[450px] left-[60px] z-20 md:w-52 md:left-[200px]">
				<Image
					src="/projects/arduino.webp"
					width={1000}
					height={1000}
					alt="arduino"/>
			</div>
			<div className="absolute w-16 top-[450px] left-[220px] z-20 md:w-28 md:left-[1000px]">
				<Image
					src="/projects/lilchip.webp"
					width={1000}
					height={1000}
					alt="lil chip"/>
			</div>
			<div className="absolute w-64 top-[250px] -right-32 z-20 md:w-80 md:top-[300px]">
				<Image
					src="/projects/multimeter.webp"
					width={1000}
					height={1000}
					alt="multimeter"/>
			</div>

			<div className="absolute w-[800px] -left-[200px] top-40 md:left-[200px] md:w-[1000px] md:top-0">
				<Image
					src="/projects/blueprint.webp"
					width={1000}
					height={1000}
					alt="blueprint"/>
			</div>

			{/* BOTTOM PORTION */}
			<div className="absolute w-[300px] -left-[160px] top-[450px] md:w-[400px] md:top-[300px]">
				<Image
					src="/projects/notebook.webp"
					width={1000}
					height={1000}
					alt="botebook"/>
			</div>
			<div className="absolute w-[400px] left-20 top-[700px] md:top-[500px] md:w-[600px] md:left-[800px]">
				<Image
					src="/projects/notepads.webp"
					width={1000}
					height={1000}
					alt="botebook"/>
			</div>
			<div className="absolute w-[200px] top-[750px] md:top-[600px] md:left-14">
				<Image
					src="/projects/soldering.webp"
					width={1000}
					height={1000}
					alt="botebook"/>
			</div>
			<div className="absolute w-[100px] top-[700px] right-12 md:right-[900px] md:top-[600px]">
				<Image
					src="/projects/stickynote.webp"
					width={1000}
					height={1000}
					alt="botebook"/>
			</div>

			{/* REAL CONTENT BEGINS HERE */}
			<div className="relative h-screen flex flex-col justify-center items-center">
				<div className="flex flex-col pt-20 md:pt-0">
					<Image src="/projects/nexus.webp" width={100} height={100} alt="nexus" className="w-14"/>
					<h1 className="text-[40px] font-bold text-white opacity-80 md:text-6xl">project of the week</h1>
				</div>
				<a href="/projects/submit" className="relative bg-gradient-to-b from-neutral-700 to-black text-white px-4 p-2 rounded-full z-50">showcase your project!</a>
			</div>
		</div>
	)
}
