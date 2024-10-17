"use client";
import { useRouter } from "next/navigation";
import React from "react";
import WavyText from "./WavyText";

export default function SpeakerPage() {
	const router = useRouter();

	const handleRegisterClick = () => {
		router.push("/fossday/speaker");
	};
	return (
		<div className="relative flex h-screen w-screen flex-col items-center justify-around">
			<div className="p-4 text-center flex flex-col items-center justify-center">
				<div className="relative mb-9 flex flex-col items-center justify-center md:mb-0 md:flex-row -mt-[10rem]">
					<img
						src="./fossday/megaphone.png"
						alt="megaphone"
						className="mx-4 w-full md:w-[20rem]"
					/>
					<WavyText />
				</div>
				<div className="flex flex-col items-center justify-center gap-8">
					<div className="w-full rounded-full border-2 border-yellow-500 border-dashed bg-white/30 px-6 py-6 font-pixelify text-3xl text-white backdrop-blur-md md:w-[70vw] md:px-6 md:py-4">
						<p>
							Submit your proposal today and join us in celebrating and
							promoting FOSS!
						</p>
					</div>

					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					{/* biome-ignore lint/nursery/useSortedClasses: <explanation> */}
					<button
						className="mb-6 w-[20rem] rounded-full bg-white px-6 py-2 font-pixelify text-2xl text-blue-500 shadow hover:shadow-lg"
						onClick={handleRegisterClick}
					>
						Register Now
					</button>
				</div>
			</div>

			<div className="-z-1 absolute bottom-0">
				<img
					src="./fossday/floor.png"
					alt=""
					className="h-20 w-auto md:h-auto md:w-full"
				/>
				
				<div className="w-[13%] right-96 scale-50 bottom-[calc(30%)] absolute flex flex-col">
				
				</div>
				<img
					src="./fossday/tree3.png"
					alt=""
					className="w-[13%] bottom-[30%] -translate-y-2 left-32 scale-75 absolute"
				/>
				<img
					src="./fossday/tree3.png"
					alt=""
					className="w-[13%] bottom-[30%] -translate-y-2 absolute"
				/>
				
				
			</div>
			{/* <img
				src="./fossday/tree3.png"
				alt=""
				className="hidden md:block absolute bottom-0 left-40 transform -translate-x-1/2 -translate-y-2 w-[13%] scale-75"
			/> */}
		</div>
	);
}
