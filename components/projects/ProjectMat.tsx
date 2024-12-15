import Image from "next/image";

export default function ProjectMat() {
	return (
		
		<div className="relative h-[35vh] w-[65vw]  rounded-lg drop-shadow-xl">
			<Image
				src={"/projects/tablemat.webp"}
				width={1280}
				height={720}
				alt="logo"
				className="absolute md:top-[0%] top-1/2 -mt-14 z-10  object-cover rounded-lg"
			/>
			
		</div>
	);
}
