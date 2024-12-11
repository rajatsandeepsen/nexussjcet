import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center">
			<div className="w-96 text-center text-white cal-sans repeat-infinite animate-pulse transition-all ease-out ">
				<h1 className="text-7xl">
					404
				</h1>
				<Link href="/">
					<Button variant={"secondary"} className="rounded-full">Return Home</Button>
				</Link>
			</div>
		</main>
	);
}
