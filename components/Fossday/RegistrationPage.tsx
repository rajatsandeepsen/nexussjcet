import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const RegistrationPage = () => {
	return (
		<div className="p-4 text-center">
			<Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
				Register Now <br /> Just{" "}
				<span className="font-grotesk font-normal italic">₹200</span>
			</Text>
			<br />
			<Text coloring={"white"} size={"p"}>
				Open for all, join the talks & workshops, get lunch, network
				<br />
				with the major community, and also some cool goodies
			</Text>
			<Link href="/fossday/register">
				<Button size="lg" variant="fossday">
					Register
					<ChevronRight />
				</Button>
			</Link>

			<br />
			<Text className="!text-sm" coloring={"white"} size={"p"}>
				NB: 200 is for your lunch & swags, everything else is free
			</Text>
			<Text coloring={"white"} size={"p"}>
				Registration closes on November 5th Tuesday, 2024
				</Text>
		</div>
	);
};

export default RegistrationPage;
