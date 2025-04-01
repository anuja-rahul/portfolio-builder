"use client";

import { homePageConfig } from "@/config/site";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      const prefixText = new SplitType(".prefix", { types: "words" });
      const heroText = new SplitType(".hero h1", { types: "chars" });
      const suffixText = new SplitType(".suffix", { types: "words" });

      gsap.set([prefixText.words, heroText.chars, suffixText.words], {
        y: 400,
      });

      tl.to([prefixText.words, suffixText.words, heroText.chars], {
        y: 0,
        duration: 0.8,
        stagger: 0.075,
        ease: "power4.out",
        delay: 1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="w-screen min-h-dvh flex flex-col md:flex-row items-center justify-center text-white bg-black gap-6 pt-24 md:pt-40">
      <p className="font-mons-sans hero-prefix text-sm prefix">
        Hello, I&apos;m
      </p>
      <div className="hero text-center" ref={containerRef}>
        <h1>{homePageConfig.title}</h1>
      </div>
      <p className="font-mons-sans hero-suffix text-xs suffix">Welcome</p>
    </section>
  );
}
