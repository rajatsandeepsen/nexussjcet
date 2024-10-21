import AboutPage from "@/components/Fossday/AboutPage";
import CommunityPage from "@/components/Fossday/CommunityPage";
import GameoverPage from "@/components/Fossday/GameoverPage";
import HomePage from "@/components/Fossday/HomePage";
import RegistrationPage from "@/components/Fossday/RegistrationPage";
import SpeakerPage from "@/components/Fossday/SpeakerPage";
import TimelinePage from "@/components/Fossday/TimelinePage";
import React from "react";

export default function FossDay() {
	return (
		<div className="h-auto bg-[#4fadf5] overflow-x-hidden">
			<GameoverPage />
			<HomePage />
			<SpeakerPage />
			<Gap />
			<AboutPage />
			<Gap />
			<TimelinePage />
			<Gap />
			<CommunityPage />
			<Gap />
			<RegistrationPage />
			<Gap />
			<br/>
			<Gap />
		</div>
	);
}

const Gap = () => {
	return <div className="my-44" />;
};
