import { cn } from "@/lib/util";
import TransitionLink, {
  TransitionLinkProps,
} from "./page-transition/TransitionLink";

interface ButtonLinkProps extends TransitionLinkProps {
  className?: string;
}

export default function ButtonLink({
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <TransitionLink
      className={
        (cn(className),
        `inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap
        rounded-lg border-0 bg-[#FCFCFD] px-4 font-mono leading-none text-slate-800 no-underline hover:rounded-xl
        shadow-[rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#D6D6E7_0_-3px_0_inset]
        transition-all duration-150 ease-in-out hover:-translate-y-0.5
        hover:shadow-[rgba(45,35,66,0.4)_0_4px_8px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#D6D6E7_0_-3px_0_inset]
        focus:shadow-[#D6D6E7_0_0_0_1.5px_inset,rgba(45,35,66,0.4)_0_2px_4px,rgba(45,35,66,0.3)_0_7px_13px_-3px,#D6D6E7_0_-3px_0_inset]
        active:translate-y-0.5 active:shadow-[#D6D6E7_0_3px_7px_inset]`)
      }
      {...props}
    >
      {children}
    </TransitionLink>
  );
}
