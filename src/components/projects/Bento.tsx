import { projectsPageConfig } from "@/config/site";
import { cn } from "@/lib/util";
import Image from "next/image";
import ButtonLink from "../ButtonLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface BentoProps {
  className?: string;
}

gsap.registerPlugin(useGSAP);

function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-3xl p-4",
        className
      )}
    >
      {children}
    </div>
  );
}

function FeatureOne({ className }: BentoProps) {
  return (
    <BentoCard
      className={cn(
        "p-0 sm:row-span-2 border dark:border-zinc-700 min-h-[250px] relative overflow-hidden",
        className
      )}
    >
      <Image
        src={projectsPageConfig.projects[0].imgUrl}
        alt="Project Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-50 grayscale-[30%]"
      />

      <div className="relative flex flex-col items-center justify-center h-full w-full">
        <div className="text-xs font-semibold uppercase text-muted-foreground">
          {projectsPageConfig.projects[0].name}
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="text-xs text-foreground">
            <p className="max-w-sm text-center text-sm font-mona-sans">
              {projectsPageConfig.projects[0].description}
            </p>
          </div>
          <ButtonLink
            external={true}
            href={projectsPageConfig.projects[0].projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="scale-75"
          >
            View Project
          </ButtonLink>
        </div>
      </div>
    </BentoCard>
  );
}

function FeatureTwo({ className }: BentoProps) {
  return (
    <BentoCard
      className={cn(
        "flex flex-col gap-2 border bg-background dark:border-zinc-700 min-h-[250px] relative overflow-hidden",
        className
      )}
    >
      <Image
        src={projectsPageConfig.projects[1].imgUrl}
        alt="Project Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-50 grayscale-[30%]"
      />

      <div className="relative flex flex-col items-center justify-center h-full w-full">
        <div className="text-xs font-semibold uppercase text-muted-foreground">
          {projectsPageConfig.projects[1].name}
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="text-xs text-foreground">
            <p className="max-w-sm text-center text-sm font-mona-sans">
              {projectsPageConfig.projects[1].description}
            </p>
          </div>
          <ButtonLink
            external={true}
            href={projectsPageConfig.projects[1].projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="scale-75"
          >
            View Project
          </ButtonLink>
        </div>
      </div>
    </BentoCard>
  );
}

function FeatureThree({ className }: BentoProps) {
  return (
    <BentoCard
      className={cn(
        "flex flex-col gap-2 border bg-background dark:border-zinc-700 min-h-[250px] relative overflow-hidden",
        className
      )}
    >
      <Image
        src={projectsPageConfig.projects[2].imgUrl}
        alt="Project Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-50 grayscale-[30%]"
      />
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        <div className="text-xs font-semibold uppercase text-muted-foreground">
          {projectsPageConfig.projects[2].name}
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="text-xs text-foreground">
            <p className="max-w-sm text-center text-sm font-mona-sans">
              {projectsPageConfig.projects[2].description}
            </p>
          </div>
          <ButtonLink
            external={true}
            href={projectsPageConfig.projects[2].projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="scale-75"
          >
            View Project
          </ButtonLink>
        </div>
      </div>
    </BentoCard>
  );
}

export default function ProjectBento() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      gsap.set([".bento-box"], {
        y: 100,
        opacity: 0,
      });

      tl.to(".bento-box", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        delay: 1.4,
      });
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 grid-rows-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 min-h-[500px] w-full"
    >
      <FeatureOne className="bento-box" />
      <FeatureTwo className="bento-box" />
      <FeatureThree className="bento-box" />
    </div>
  );
}
