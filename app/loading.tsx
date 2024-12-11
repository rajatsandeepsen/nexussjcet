export default function NotFound() {
	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center">
			{/* biome-ignore lint/a11y/useAltText: */}
			<img
				src="/logo.svg"
				className="repeat-infinite animate-pulse transition-all ease-out"
			/>
		</main>
	);
}
