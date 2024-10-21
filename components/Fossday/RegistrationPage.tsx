import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Text } from "../ui/text";

const RegistrationPage = () => {
	return (
		<div className="text-center">
			<Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
				Register Now <br /> Just <span className="font-grotesk font-normal italic">₹200</span>	
			</Text>
			<Text coloring={"white"} variant={"fossday"} size={"p"}>
				 Open for all, join the talks & workshops, get lunch, and also some cool goodies
			</Text>
			<Link href="/fossday/register">
				<Button size="lg" variant="fossday">
					Register
					<ChevronRight />
				</Button>
			</Link>
			<Text className="text-sm" coloring={"white"} size={"p"}>
				NB: 200 is for your lunch & swags, everything else is free
			</Text>
		</div>
	);
};

export default RegistrationPage;
