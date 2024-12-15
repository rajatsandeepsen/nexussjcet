import Image from "next/image";
import React from "react";
import { ProjectCard } from "../ProjectCard";

export const ProjectOfTheWeek = React.forwardRef<HTMLDivElement>((props, ref) => {
  const projectOfTheWeek = {
    title: "AI answers questions about your product data.",
    description:
      "Build lovable products with user insights. Uncover popular features, identify power users, and improve retention through behavior analysis.",
    features: [
      {
        icon: "❓",
        label: "Did they purchase this product?",
      },
      {
        icon: "❤️",
        label: "Who's our best user?",
      },
    ],
  };

  return (
    <div
      ref={ref}
      className="relative z-50 flex min-h-screen w-full items-center justify-center overflow-hidden font-semibold text-gray-700 text-lg"
    >
        <div className="flex h-full w-full items-center justify-center">

      <ProjectCard
        title={projectOfTheWeek.title}
        description={projectOfTheWeek.description}
        features={projectOfTheWeek.features}
        cardSize="large"
      />
        </div>
    </div>
  );
});
