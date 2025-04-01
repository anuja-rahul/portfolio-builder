"use client";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { ComponentProps } from "react";

export interface TransitionLinkProps extends ComponentProps<typeof Link> {
  children: React.ReactNode;
  href: string;
}

export default function TransitionLink({
  children,
  href,
  ...props
}: TransitionLinkProps) {
  const router = useTransitionRouter();
  function slideInOut() {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        router.push(href, {
          onTransitionReady: slideInOut,
        });
      }}
    >
      {children}
    </Link>
  );
}
