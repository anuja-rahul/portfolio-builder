import { siteConfig } from "@/config/site";
import Link from "next/link";

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
        <div className="flex flex-row md:items-end items-center justify-evenly w-fit h-full my-2">
          {siteConfig.contactLinks.map((item) => (
            <span key={item.name} className="flex w-fit h-fit">
              {item.link && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                  className="text-white mx-2 transition-all duration-200 hover:-translate-y-[2px] ease-in-out"
                >
                  {item.icon}
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
