"use client";

import { homePageConfig } from "@/config/site";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const heroText = new SplitType(".hero h1", { types: "chars" });
      gsap.set(heroText.chars, { y: 400 });
      gsap.to(heroText.chars, {
        y: 0,
        duration: 1,
        stagger: 0.075,
        ease: "power4.out",
        delay: 1,
      });
    },
    { scope: containerRef }
  );
  return (
    <section className="w-screen min-h-dvh flex flex-col items-center justify-center gap-6 text-white">
      <p className="font-mons-sans hero-p">Hello, I&apos;m</p>
      <div className="hero text-center" ref={containerRef}>
        <h1>{homePageConfig.title}</h1>
      </div>
    </section>
  );
}
