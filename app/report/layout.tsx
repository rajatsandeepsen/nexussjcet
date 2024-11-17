import "@/styles/github.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (<section className="container my-20">{children}</section>);
}
