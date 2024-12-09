import CRTThemeWrapper from "@/components/hackday/crt-theme-rapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "FOSSDAY 2024",
	description: "Calling all FOSS Enthusiasts on 9th November 2024",
	icons: [{ rel: "icon", url: "/fossday/fd.svg" }],
	publisher: "St. Joseph's College of Engineering and Technology, Palai",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen w-full">
			<CRTThemeWrapper>{children}</CRTThemeWrapper>
		</div>
	);
}
