import React from "react";
import ProjectMat from "./ProjectMat";

export const ProjectOfTheWeek = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-700"
    >
      <ProjectMat/>
    </div>
  );
});
