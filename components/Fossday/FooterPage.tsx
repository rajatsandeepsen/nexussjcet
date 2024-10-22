import { Text } from "@/components/ui/text";
import Link from "next/link";
import type React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="pb-80 relative">
			<div className="container mx-auto z-40 mb-60">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<Text variant="fossday" coloring="fossday-yellow" size="h3">
							Quick Links
						</Text>
						<ul className="mt-2 text-center">
							<li>
								<Link href="/" className="hover:text-fossday-yellow">
									About Nexus
								</Link>
							</li>
							<li>
								<Link
									href="/fossday/register"
									className="hover:text-fossday-yellow"
								>
									Register FOSSDAY
								</Link>
							</li>
							<li>
								<Link
									href="/fossday/speaker"
									className="hover:text-fossday-yellow"
								>
									Become a Speaker
								</Link>
							</li>
							<li>
								<Link
									href="/fossday/speaker"
									className="hover:text-fossday-yellow"
								>
									Join us as Partner
								</Link>
							</li>
						</ul>
					</div>
					<div className="text-center">
						<Text variant="fossday" coloring="fossday-yellow" size="h3">
							Contact Us
						</Text>
						<p className="mt-2">
							St Joseph's College of Engineering and Technology, <br />
							Choondacherry, Palai, Kerala
						</p>
						<a href="mailto:nexus@sjcetpalai.ac.in">
							<p>Email: nexus@sjcetpalai.ac.in</p>
						</a>
						<a href="tel:+917594025304">
							<p>Phone: +917594025304</p>
						</a>
					</div>
				</div>
			</div>
			<img
				src="./fossday/mountain.png"
				alt=""
				className="h-80 md:h-full w-auto md:h-auto md:w-full transform -scale-x-100 absolute bottom-20 md:bottom-28"
			/>
		</footer>
	);
};

export default Footer;
