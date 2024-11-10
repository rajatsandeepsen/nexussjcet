import AboutPage from "@/components/Fossday/AboutPage";
import CommunityPage from "@/components/Fossday/CommunityPage";
import FooterPage from "@/components/Fossday/FooterPage";
import GameoverPage from "@/components/Fossday/GameoverPage";
import HomePage from "@/components/Fossday/HomePage";
import RSVP from "@/components/Fossday/RSVP";
import RegistrationPage from "@/components/Fossday/RegistrationPage";
import SpeakerPage from "@/components/Fossday/SpeakerPage";
import TimelinePage from "@/components/Fossday/TimelinePage";
import VolunteerPage from "@/components/Fossday/VolunteerPage";
import React from "react";

export default function FossDay() {
	return (
		<div className="h-auto bg-[#4fadf5] overflow-x-hidden">
			<GameoverPage />
			<HomePage />
			{/* <SpeakerPage /> */}
			{/* <RSVP/> */}
			<Gap />
			<AboutPage />
			<Gap />
			<TimelinePage />
			<Gap />
			<CommunityPage />
			<Gap />
			{/* <RegistrationPage /> */}
			<Gap />
			<VolunteerPage/>
			<Gap />
			<Gap />
			<FooterPage />
		</div>
	);
}

const Gap = () => {
	return <div className="my-44" />;
};
