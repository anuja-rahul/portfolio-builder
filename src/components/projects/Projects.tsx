"use client";

import { projectsPageConfig } from "@/config/site";
import ProjectBento from "./Bento";

export default function Projects() {
  return (
    <main className="relative min-h-screen w-screen max-w-screen p-0 m-0 overflow-x-hidden flex flex-col items-center justify-center bg-transparent mt-16">
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-center text-balance text-4xl md:text-5xl lg:text-6xl uppercase font-mona-sans font-extrabold mb-4 squishy-text">
          Projects
        </h1>
        <p className="lg:max-w-lg text-center max-w-md text-sm font-mona-sans px-6 mb-6">{projectsPageConfig.description}</p>
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-4 md:p-6 lg:p-8">
          <ProjectBento />
        </div>
      </div>
    </main>
  );
}
