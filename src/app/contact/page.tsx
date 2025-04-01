import Contact from "@/components/contact/Contact";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `Contact me`,
    template: `%s - Contact me`,
  },
  description: siteConfig.description,
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-screen max-w-screen p-0 m-0 overflow-x-hidden place-content-center bg-black/90">
      <Contact />
    </main>
  );
}
