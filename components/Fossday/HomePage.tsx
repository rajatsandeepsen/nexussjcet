import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Text } from "../ui/text";

export default function HomePage() {
	return (
		<div className="relative flex h-screen w-screen flex-col items-center justify-center text-center  text-white z-50">
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
				<Link href="https://drive.google.com/drive/folders/1HTa1R3Q7GTxnM7VNEQH7vNJuYMD6Naa3?usp=drive_link" className="z-50">
					<Button size="lg" variant="fossday">
						<span className="text-xl">View Pictures</span>
						<ChevronRight />
					</Button>
				</Link>
				<Text coloring={"white"} size={"span"} className="opacity-50">
					See you next year! Bye!
				</Text>
			</div>
		</div>
	);
}
