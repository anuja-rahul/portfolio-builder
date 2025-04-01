import Projects from "@/components/projects/Projects";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `Projects`,
    template: `%s - Projects`,
  },
  description: siteConfig.description,
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen w-screen max-w-screen p-0 m-0 overflow-x-hidden place-content-center bg-black/95">
      <Projects />
    </main>
  );
}
