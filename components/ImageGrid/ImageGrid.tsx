import React, { useState } from "react";

// Define the type for each history item
interface HistoryItem {
    id: number;
    title: string;
    description: string;
    images: string[];
    date: string;
}

// Sample history data
const history: HistoryItem[] = [
    {
        id: 1,
        title: "Formation & Inauguration",
        description: "Swatanthra was inaugurated by Richard Stallman.",
        images: [
            './richard stallman-1.png',
            './richard stallman-2.png',
        ],
        date: 'Sep 2010',
    },
    {
        id: 2,
        title: "ICFOSS Events",
        description: "Swatanthra conducted FOSS week with ICFOSS.",
        images: [
            './richard stallman-1.png',
            './richard stallman-2.png',
        ],
        date: 'June 2018',
    },
    {
        id: 3,
        title: "Abraham & his Legacy",
        description: "Swatanthra conducted FOSS week with ICFOSS.",
        images: [
           './richard stallman-1.png',
            './richard stallman-2.png',
        ],
        date: 'June 2018',
    },
    {
        id: 4,
        title: "Legacy of Contributions",
        description: "Celebrating the contributions of Abraham.",
        images: [
            './richard stallman-1.png',
            './richard stallman-2.png',
        ],
        date: 'June 2018',
    },
];

// Define the props type for ImageGridItem
interface ImageGridItemProps extends HistoryItem {
    isHovered: boolean;
}

// ImageGrid component
const ImageGrid: React.FC = () => {
    return (
        <div className="w-3/4 h-screen justify-end text-white flex flex-wrap py-4">
            {history.map((item) => (
                <ImageGridItem key={item.id} {...item} isHovered={false} />
            ))}
        </div>
    );
};

// ImageGridItem component
const ImageGridItem: React.FC<ImageGridItemProps> = ({ title, description, images, date, id }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative m-2 h-full w-1/5 transition-all duration-300 transform ${
                isHovered ? "flex-grow" : "flex-shrink"
            } text-[#AAAAAA] font-bold text-2xl p-2`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        
            <div
                className={`absolute h-full inset-0 flex flex-col justify-between items-start ${isHovered ? "bg-transparent" : "bg-[#e1e1e1]"} p-4 transition-opacity duration-300`}
            >
                <div className={` text-center justify-between text-gray-400 h-full ${id % 2 === 0 ? "flex-col" : "flex-col-reverse"} ${isHovered ? "hidden" : "flex"}`}>
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <p className="text-7xl">{date.split(" ")[1]}</p>
                </div>
                {isHovered && (
                    <div className="flex flex-col items-start h-full w-full justify-between flex-1  mt-4">
                        <p className="text-2xl text-white mb-2">{description}</p>
                        <div className="flex flex-col items-center space-y-2 mt-2">
                            {images.map((img, index) => (
                                <img key={index} src={img} alt={`additional-${index}`} className={`h-[30vh] w-[30vh] object-cover ${index === 1 ? "mt-[-2rem] mr-[10rem]" : ""}`} />
                            ))}
                        </div>
                        <p className="text-3xl mt-4">{date}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageGrid;
