import { cn } from "@/lib/util";

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
    <BentoCard className="p-0 sm:row-span-2 border dark:border-zinc-700">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="text-xs font-semibold uppercase text-muted-foreground">
          Project 1
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="text-xs text-foreground">Information</div>
        </div>
      </div>
    </BentoCard>
  );
}

function FeatureTwo() {
  return (
    <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="text-xs font-semibold uppercase text-muted-foreground">
          Project 2
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="text-xs text-foreground">Information</div>
        </div>
      </div>
    </BentoCard>
  );
}

function FeatureThree() {
  return (
    <BentoCard className="flex flex-col gap-2 border bg-background dark:border-zinc-700">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="text-xs font-semibold uppercase text-muted-foreground">
          Project 3
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="text-xs text-foreground">Information</div>
        </div>
      </div>
    </BentoCard>
  );
}

export default function ProjectBento() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-3 sm:grid-cols-2 sm:grid-rows-2">
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
    </div>
  );
}
