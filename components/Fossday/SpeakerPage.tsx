import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Text } from "../ui/text";
import WavyText from "./WavyText";

export default function SpeakerPage() {
	return (
		<div className="relative flex h-screen container flex-col items-center justify-around z-40">
			<div className="text-center flex flex-col items-center justify-center">
				<div className="relative mb-9 flex flex-col items-center justify-center md:mb-0 md:flex-row -mt-[10rem]">
					<img
						src="./fossday/megaphone.png"
						alt="megaphone"
						className="w-1/6"
					/>
					<WavyText />
				</div>
				<div>
					<div className="space-y-8 border-2 border-yellow-300 border-dashed bg-white/30 p-8 backdrop-blur-md">
						<Text coloring="white" size={"p"}>
							If you want to speak at the FOSSDAY of Nov 9th 2024,
							<br />
							please fillout and submit this form. 
							<br/>The submission deadline is
							1st Nov, 2024
						</Text>

						<Text coloring="white" size={"p"}>
							You can share your experiences and insights regarding FOSS Or
							Introduce them to new FOSS technologies or take time to share your
							memories about Abraham Raji
						</Text>
						<Text coloring="white" size={"p"}>
							Submit your proposal today and join us in celebrating and
							promoting FOSS!
						</Text>
					</div>

					<Link href="/fossday/speaker">
						<Button
							size="lg"
							variant="fossday"
						>
							<span className="text-xl">Submit Proposal</span>
							<ChevronRight />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
