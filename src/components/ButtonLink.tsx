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
    <TransitionLink className={cn(className)} {...props}>
      {children}
    </TransitionLink>
  );
}
