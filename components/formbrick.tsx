export function Formbricks({ src, title }: { src: string, title: string }) {
	return (
		<div className="relative h-screen overflow-auto">
			<iframe
				title={title}
				src={src}
				className="absolute bottom-0 left-0 h-full w-full border-0"
			/>
		</div>
	);
}
