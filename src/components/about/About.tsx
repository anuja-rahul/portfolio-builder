"use client";

import Image from "next/image";
import ButtonLink from "../ButtonLink";
import { aboutPageConfig } from "@/config/site";

export default function About() {
  return (
    <section className="w-screen min-h-dvh flex flex-col md:flex-row items-center justify-center text-white bg-black/[0.95] pt-24 md:pt-40">
      <div className="w-full md:w-2/5 h-full md:min-h-dvh min-h-[50vh] about-pic-frame place-items-center flex flex-col items-center justify-start">
        <Image
          src={"/img/portrait.webp"}
          width={800}
          height={800}
          alt="portrait"
          className="w-1/2 md:min-w-[300px] lg:min-w-[400px] min-w-[200px] aspect-square mt-16 md:mt-0 rounded-md opacity-[95%]"
        />
      </div>
      <div className="w-full md:w-3/5 h-full md:min-h-dvh min-h-[50vh] about-text-frame place-items-start flex">
        <div className="mx-auto grid grid-cols-1 gap-8 px-4 pb-24 pt-16 md:pt-0 md:grid-cols-12">
          <div className="col-span-1 md:col-span-4">
            <h2 className="text-3xl font-bold">{aboutPageConfig.name}</h2>
            <p className="text-xs">{aboutPageConfig.titles}</p>
          </div>
          <div className="col-span-1 md:col-span-8 pr-2">
            <p className="mb-4 text-lg text-white md:text-xl">
              {aboutPageConfig.paragraphOne}
            </p>
            <p className="mb-8 text-xl text-white mb:text-2xl">
              {aboutPageConfig.paragraphTwo}
            </p>
            <ButtonLink href="/projects">Learn More</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
