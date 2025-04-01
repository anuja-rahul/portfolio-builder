import { projectsPageConfig } from "@/config/site";
import { cn } from "@/lib/util";
import Image from "next/image";

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

function FeatureOne() {
  return (
    <BentoCard className="p-0 sm:row-span-2 border dark:border-zinc-700 min-h-[250px] relative overflow-hidden">
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
        </div>
      </div>
    </BentoCard>
  );
}

function FeatureTwo() {
  return (
    <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700 min-h-[250px] relative overflow-hidden">
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
        </div>
      </div>
    </BentoCard>
  );
}

function FeatureThree() {
  return (
    <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700 min-h-[250px] relative overflow-hidden">
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
        </div>
      </div>
    </BentoCard>
  );
}

export default function ProjectBento() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 min-h-[500px] w-full">
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </div>
  );
}
