import Image from "next/image";
import { NextRequest } from "next/server";
import React from "react";

export default function RegisterPage() {
	const communityLogos = [
		{
			imageSrc: "/projects/nexus-project-logo-black.webp",
			altText: "Nexus Project Logo",
		},
		{
			imageSrc: "/projects/mulearn-sjc-logo.webp",
			altText: "MuLearn SJC Logo",
		},
		{
			imageSrc: "/projects/tinkerhub-sjc-logo.webp",
			altText: "TinkerHub SJC Logo",
		},
		{
			imageSrc: "/projects/bootcamp-sjc-logo.webp",
			altText: "Bootcamp SJC Logo",
		},
	];

	return (
		<div className="relative z-50 flex min-h-screen w-full flex-col items-center justify-between py-4 px-4 sm:px-6">
			<Image
				src="/projects/collegelogo.png"
				width={200}
				height={200}
				alt="College Logo"
				className="mx-auto top-0  w-32 h-32 sm:w-48 sm:h-48 object-contain"
			/>
			<Image
				src="/projects/nexussticky.png"
				width={400}
				height={400}
				alt="Nexus Sticky"
				className="-mt-12 sm:-mt-48 mx-auto w-32 h-32 sm:w-96 sm:h-96 object-contain md:top-1/2 top-1/4 absolute"
			/>
			<div className="w-full mt-9 sm:mt-0 ">
				<input
					type="text"
					placeholder="Enter your email"
					className=" absolute left-[50%] md:left-1/2  top-[35%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 rounded-full border-2 border-slate-300 md:px-4 md:py-2 text-base px-3 py-1 md:text-xl placeholder:text-sm sm:placeholder:text-base sm:text-lg"
				/>
			</div>
			<div className="flex flex-wrap justify-center sm:justify-between items-center mt-8 sm:mt-0 w-full sm:w-3/4 gap-4">
				{communityLogos.map((community, index) => (
					<Image
						src={community.imageSrc}
						width={150}
						height={150}
						alt={community.altText}
						key={community.altText}
						className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
					/>
				))}
			</div>
		</div>
	);
}
