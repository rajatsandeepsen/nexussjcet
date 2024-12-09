import { FloatingNav } from "@/components/projects/floating-navbar";
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
})


{

    const navItems = [
        {
          name: "Home",
          link: "/",
         
        },
        {
          name: "About",
          link: "/about",
         
        },
        {
          name: "Rewards",
          link: "/contact",
          
        },
      ];

	return (<>
        <FloatingNav navItems={navItems} />

    { children }
    </>);
}
