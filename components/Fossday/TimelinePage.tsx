import React from "react";
import { Text } from "../ui/text";
import { Timeline } from "../ui/timeline";

export default function TimelinePage() {
	const data = [
		{
			title: "Registration Starts",
			content: "Pay 200/- per head online, Enjoy 200 days worth of fun",
			time: "October 18th",
		},
		{
			title: "Registration Ends",
			content: "Try again next year... or wait.. Will you?",
			time: "November 7th 11:59pm",
		},
		{
			title: "Gate opens",
			content: "Make sure you smile at the Security when u come past the gate, Just dont be too late.",
			time: "November 9th 9:00am",
		},
		{
			title: "The FOSSDAY",
			content: "First to find Francis Hall gets the first prize of the day (Good seating)",
			time: "10:00am",
		},
	]
	const data1 = [
		{
			title: "Innaugration",
			content: "& Welcome Speech by the expert!",
			time: "10:30am",
		},
		{
			title: "Memories of Abraham",
			content: "by our loved ones.",
			time: "10:30 to 11:00",
		},
		{
			title: "Expert Talks",
			content: "Listen to nerds talk.. well dont complain, you are here cuz you are one too",
			time: "11:00 to 12:45",
		},
		{
			title: "Lunch",
			content: "enjoy the food you paid for, maybe share some with us? ",
			time: "01:30pm",
		},
	]
	
	const data2 = [
		{
			title: "Workshop Starts",
			content: "Ah yes, Here we make your CPU and GPU utilizations reach 100%",
			time: "November 9th 01:30pm",
		},
		{
			title: "Snacks & Networking",
			content: "Chaya & time for a group pic, might as well share linkdin and um... tinder? ",
			time: "30mins",
		},
		{
			title: "Workshop Resumes",
			content: "back to frying your laptop's chips ",
			time: "November 9th 01:30pm",
		},
		{
			title: "The END",
			content: "bid farewell and go back home to your mama",
			time: "04:30am",
		},
	];
	return (
		<div>
			<Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
				Time Schedule
			</Text>
			<div className="flex md:gap-20 gap-10 justify-center md:flex-row flex-col p-8 md:p-20">
				<div>
					{/* <Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
						Morning
					</Text> */}
					<Timeline data={data} />
				</div>
				<div>
					{/* <Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
						Morning
					</Text> */}
					<Timeline data={data1} />
				</div>
				<div>
					{/* <Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
						Afternoon
					</Text> */}
					<Timeline data={data2} />
				</div>
			</div>
		</div>
	);
}
