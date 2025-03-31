"use client";

import { navBarConfig } from "@/config/site";
import { ReactNode, useState } from "react";
import TransitionLink from "../page-transition/TransitionLink";
import { motion } from "motion/react";

export default function NavBar() {
  return (
    <div className="w-screen mt-4 font-mona-sans squishy-text">
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
    <ul className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1">
      {navBarConfig.map((item) => (
        <Tab key={item.name} href={item.href}>
          {item.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <li
      className="relative z-10 block curser-pointer px-3 py-1.5 text-xs uppercase
      text-white mix-blend-difference md:px-4 md:py-2 md:text-sm"
    >
      <TransitionLink href={href}>{children}</TransitionLink>
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
      className="absolute z-0 h-[29px] rounded-full bg-black md:h-9"
      style={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
    />
  );
};
