import Image from "next/image";

export default function ProjectMat() {
	return (
		
		<div className="relative h-[35vh] w-full max-w-5xl rounded-lg drop-shadow-xl">
			<Image
				src={"/projects/tablemat.webp"}
				width={1280}
				height={720}
				alt="logo"
				className="absolute left-0 z-20  object-cover rounded-lg"
			/>
			
		</div>
	);
}
