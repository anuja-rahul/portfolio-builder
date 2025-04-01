import About from "@/components/about/About";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `About me`,
    template: `%s - About me`,
  },
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <main
      className="relative min-h-screen w-screen max-w-screen p-0 m-0 overflow-x-hidden
    flex flex-col items-center justify-center"
    >
      <About />
    </main>
  );
}
