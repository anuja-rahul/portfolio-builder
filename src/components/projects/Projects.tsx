"use client";

import { projectsPageConfig } from "@/config/site";
import ProjectBento from "./Bento";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.set([".text-content"], {
        y: 100,
        opacity: 0,
      });

      tl.to(".text-content", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power4.out",
        delay: 1.4,
      });
    },
    { scope: containerRef }
  );

  return (
    <main className="relative min-h-screen w-screen max-w-screen p-0 m-0 overflow-x-hidden flex flex-col items-center justify-center bg-transparent mt-16">
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center mt-8"
      >
        <h1 className="text-content text-center text-balance text-4xl md:text-5xl lg:text-6xl uppercase font-mona-sans font-extrabold mb-4 squishy-text">
          Projects
        </h1>
        <p className="text-content lg:max-w-lg text-center max-w-md text-sm font-mona-sans px-6 mb-6">
          {projectsPageConfig.description}
        </p>
        <div className="bento-projects flex flex-col items-center justify-center w-full h-full gap-4 p-4 md:p-6 lg:p-8 overflow-y-hidden">
          <ProjectBento />
        </div>
      </div>
    </main>
  );
}
