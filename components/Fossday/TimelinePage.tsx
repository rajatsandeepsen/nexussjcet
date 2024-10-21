import React from "react";
import { Text } from "../ui/text";
import { Timeline } from "../ui/timeline";

export default function TimelinePage() {
	const data = [
		{
			title: "Registration Starts",
			content: "online, 200/- per head",
			time: "October 18th",
		},
		{
			title: "Registration Ends",
			content: "sad",
			time: "November 7th 11:59pm",
		},
		{
			title: "Gate opens",
			content: "SJCET Palai",
			time: "November 9th 9:00am",
		},
		{
			title: "The FOSSDAY",
			content: "at SJCET Palai, St. Francis Hall",
			time: "10:00am",
		},
	]
	const data1 = [
		{
			title: "Innaugration",
			content: "& Welcome Speech by XYZ",
			time: "10:30am",
		},
		{
			title: "Memories of Abraham",
			content: "by XYZ",
			time: "10:30 to 11:00",
		},
		{
			title: "Expert Talks",
			content: "about Open Source & Engineering",
			time: "11:00 to 12:45",
		},
		{
			title: "Lunch",
			content: "for participants",
			time: "01:30pm",
		},
	]
	
	const data2 = [
		{
			title: "Workshop Starts",
			content: "go to Lab take your laptop out",
			time: "November 9th 01:30pm",
		},
		{
			title: "Snacks & Networking",
			content: "Chaya & time for a group pic",
			time: "30mins",
		},
		{
			title: "Workshop Resumes",
			content: "go to Lab take your laptop out",
			time: "November 9th 01:30pm",
		},
		{
			title: "The END",
			content: "go home",
			time: "04:30am",
		},
	];
	return (
		<div>
			<Text variant={"fossday"} coloring={"fossday-yellow"} size={"h2"}>
				Time Schedule
			</Text>
			<div className="flex gap-20 justify-center">
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
