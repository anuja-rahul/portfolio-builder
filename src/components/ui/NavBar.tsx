"use client";

import { navBarConfig } from "@/config/site";
import { ReactNode, useRef, useState } from "react";
import TransitionLink from "../page-transition/TransitionLink";
import { motion } from "motion/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-screen mt-4 font-mona-sans squishy-text z-10 absolute opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out">
      <SlideTabs />
    </div>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      {navBarConfig.map((item) => (
        <Tab
          key={item.name}
          href={item.href}
          setPosition={setPosition}
          external={item.name === "CV"}
        >
          <span className="hidden md:flex">{item.name}</span>
          <span className="flex md:hidden">{item.icon}</span>
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  external,
  children,
  href,
  setPosition,
}: {
  external?: boolean;
  children: ReactNode;
  href: string;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase
            text-white mix-blend-difference md:px-4 md:py-2 md:text-sm"
    >
      {external ? (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      ) : (
        <TransitionLink href={href}>{children}</TransitionLink>
      )}
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      className="absolute z-0 h-[25px] rounded-full bg-black md:h-9"
      animate={position}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
    />
  );
};
