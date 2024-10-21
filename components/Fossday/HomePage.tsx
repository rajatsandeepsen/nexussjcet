import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Text } from "../ui/text";
import Fireplace from "./fireplace";

export default function HomePage() {
	return (
		<div className="relative flex h-screen w-screen flex-col items-center justify-center text-center font-pixelify text-white">
			<div className="absolute top-0 h-64 w-full left-0">
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
						src="./fossday/cloud3.png"
						alt=""
						className="w-60 bottom-3 left-64 absolute animate-float delay-[0.5s]"
					/>
					<img
						src="./fossday/cloud4.png"
						alt=""
						className="w-60 -bottom-64 left-20 absolute animate-float delay-[0.7s]"
					/>
					<img
						src="./fossday/cloud5.png"
						alt=""
						className="w-60 -bottom-80 right-32 absolute animate-float delay-[0.9s]"
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
			<div className="-translate-y-20 flex w-full flex-col items-center justify-center">
				<div className="mb-10 w-24">
					<img src="./header-logo.svg" alt="Logo" />
				</div>
				<Text variant="fossday" coloring={"fossday-white1"} size={"p"}>
					St. Joseph's College of Engineering and Technology, Palai
				</Text>
				<Text variant="fossday" coloring={"fossday-white"}>
					FOSSDAY '24
				</Text>
				<Text variant="fossday" coloring={"fossday-yellow"} size={"p"}>
					November 9th, 2024 <br /> 9:00 AM - 4:30 PM
				</Text>
				<Link href="/fossday/register">
					<Button size="lg" variant="fossday">
						<span className="text-xl">Register Now</span>
						<ChevronRight />
					</Button>
				</Link>
			</div>

			<div className="-z-1 absolute bottom-0">
				<img
					src="./fossday/floor.png"
					alt=""
					className="h-20 w-auto md:h-auto md:w-full"
				/>
				<img
					src="./fossday/tree1.png"
					alt=""
					className="w-[13%] left-96 scale-125 bottom-[30%] -translate-y-3 absolute"
				/>
				<div className="w-[13%] right-96 scale-50 bottom-[calc(30%)] absolute flex flex-col">
					<Fireplace />
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
				<img
					src="./fossday/tree2.png"
					alt=""
					className="w-[13%] right-20 scale-75 bottom-[30%] -translate-y-2 absolute"
				/>
				<img
					src="./fossday/tree2.png"
					alt=""
					className="w-[13%] right-36 bottom-[30%] -translate-y-2 absolute"
				/>
			</div>
		</div>
	);
}
