"use client";

import { contactPageConfig } from "@/config/site";
import ButtonLink from "../ButtonLink";
import Image from "next/image";
import { cn } from "@/lib/util";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.set([".contact-buttons", ".text-content", ".image-content"], {
        y: 100,
        opacity: 0,
      });

      tl.to(".image-content", {
        y: "-80%",
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        delay: 1.2,
      });
      tl.to(
        ".contact-buttons",
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power4.out",
        },
        "-=0.8"
      );

      tl.to(
        ".text-content",
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.05,
          ease: "power4.out",
        },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );
  return (
    <main className="relative min-h-screen w-screen max-w-screen p-0 m-0 overflow-x-hidden flex flex-col items-center justify-center bg-transparent mt-16">
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center mt-8 place-items-center overflow-y-hidden"
      >
        <Image
          src="/img/contact.png"
          alt="contact-image"
          width={300}
          height={300}
          className={cn(
            "overflow-y-hidden w-40 md:w-56 aspect-square absolute top-[40%] left-[50%] opacity-[70%]",
            "translate-x-[-50%] translate-y-[-80%] image-content brightness-[70%]"
          )}
        />
        <h1 className="text-content overflow-y-hidden z-10 text-center text-balance text-4xl md:text-5xl lg:text-6xl uppercase font-mona-sans font-extrabold mb-4 squishy-text">
          Contact Me
        </h1>
        <p className="text-content overflow-y-hidden z-10 lg:max-w-lg text-center max-w-md text-sm font-mona-sans px-6 mb-6">
          {contactPageConfig.description}
        </p>
        <div className="contact-buttons overflow-y-hidden z-10 flex flex-row items-center justify-center w-full h-full gap-2 p-4 md:p-6 lg:p-8">
          {contactPageConfig.contact.map((item, index) => (
            <ButtonLink
              key={index}
              external={true}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={item.icon}
              className="scale-[85%] overflow-y-hidden"
            >
              {item.name}
            </ButtonLink>
          ))}
        </div>
      </div>
    </main>
  );
}
