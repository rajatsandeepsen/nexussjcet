"use client";
import { useEffect, useState } from "react";
import Fireplace from "./fireplace";

export default function GameoverPage() {
	const [isShrunk, setIsShrunk] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleImage = () => {
			const scrollPosition = window.scrollY + window.innerHeight;
			const pageHeight = document.documentElement.scrollHeight;
			console.log(pageHeight);

			// Check if the user is near the bottom of the page
			if (scrollPosition >= pageHeight - 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleImage);
		return () => window.removeEventListener("scroll", handleImage);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsShrunk(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="absolute  pointer-events-none">
			<div className="fixed top-0 h-64 w-full left-0">
				<div className="h-full w-full relative">
					<img
						src="./fossday/cloud1.png"
						alt=""
						className="w-60 top-3 left-32 absolute animate-float delay-[0.1s]"
					/>
					<img
						src="./fossday/cloud2.png"
						alt=""
						className="w-60 bottom-8 right-64 absolute animate-float delay-[0.3s]"
					/>
					<img
						src="./fossday/cat.png"
						alt=""
						className="w-16 bottom-3 left-64 absolute animate-float delay-[0.5s]"
					/>
					<img
						src="./fossday/cloud4.png"
						alt=""
						className="w-60 -bottom-64 left-20 absolute animate-float delay-[0.7s]"
					/>
					<img
						src="./fossday/cloud5.png"
						alt=""
						className="w-60 -bottom-80 -right-32 md:right-32 absolute animate-float delay-[0.9s]"
					/>
					<img
						src="./fossday/cloud6.png"
						alt=""
						className="w-60 top-10 left-[50%] absolute animate-float delay-[1.1s]"
					/>
					<img
						src="./fossday/cloud7.png"
						alt=""
						className="w-60 top-12 left-96 absolute animate-float delay-[1.3s]"
					/>
				</div>
			</div>
			<div
				className={`fixed z-50 bottom-0 transition-all ease-in-out ${
					isShrunk ? "md:-bottom-20 bottom-0 " : "md:bottom-0"
				}`}
			>
				<img
					src="./fossday/mountain.png"
					alt=""
					className={`h-auto w-full transform -scale-x-100 absolute bottom-0 -z-20 transition-transform transition-opacity duration-700 ease-out ${
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 "
					}`}
				/>

				<img src="./fossday/new-bg.png" alt="" className="w-full" />
				{/* <img
					src="./fossday/fireplace.png"
					alt=""
					className="h-20 w-auto md:h-auto md:w-full"
				/> */}
				{/* <img
					src="./fossday/tree1.png"
					alt=""
					className="w-[13%] left-96 scale-125 bottom-[30%] -translate-y-3 absolute"
				/> */}
				<div className="left-[50%] bottom-0 absolute flex flex-col w-1/12">
					<Fireplace />
				</div>
				{/* <img
					src="./fossday/tree3.png"
					alt=""
					className="w-[13%] bottom-[30%] -translate-y-2 left-32 scale-75 absolute"
				/>
				<img
					src="./fossday/tree3.png"
					alt=""
					className="w-[13%] bottom-[30%] -translate-y-2 absolute"
				/>
				<img
					src="./fossday/tree2.png"
					alt=""
					className="w-[13%] right-20 scale-75 bottom-[30%] -translate-y-2 absolute"
				/>
				<img
					src="./fossday/tree2.png"
					alt=""
					className="w-[13%] right-36 bottom-[30%] -translate-y-2 absolute"
				/> */}
			</div>
		</div>
	);
}
