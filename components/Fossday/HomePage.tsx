import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Text } from "../ui/text";

export default function HomePage() {
	return (
		<div className="relative flex h-screen w-screen flex-col items-center justify-center text-center font-pixelify text-white">
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
				<Link href="/fossday/register" className="z-50">
					<Button size="lg" variant="fossday">
						<span className="text-xl">Register Now</span>
						<ChevronRight />
					</Button>
				</Link>
			</div>
		</div>
	);
}
