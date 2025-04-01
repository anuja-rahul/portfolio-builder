import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-screen bottom-0 min-h-20 border-t border-white/50 bg-black">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between md:px-8 pt-5 md:pt-7">
        <div className="flex flex-col md:items-start items-center justify-center md:w-1/2 w-full h-full md:gap-4">
          <p className="text-xs text-white flex place-content-center h-full w-fit">
            &copy; {new Date().getFullYear()} {siteConfig.name} All Rights
            Reserved.
          </p>
        </div>
        <div className="flex flex-col md:items-end items-center justify-center md:w-1/2 w-full h-full">
          Links
        </div>
      </div>
    </footer>
  );
}
