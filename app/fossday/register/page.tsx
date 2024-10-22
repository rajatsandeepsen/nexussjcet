export default function Home() {
    return (
        <div className="relative h-screen overflow-auto">
            <iframe
                title="MakeMyPass"
                src="https://makemypass.com/fossday"
                frameBorder="0"
                className="absolute top-0 left-0 h-full w-full border-0 bg-black"
            />
        </div>
    );
}