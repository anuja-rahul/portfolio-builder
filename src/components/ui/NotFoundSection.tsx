import { FaHome } from "react-icons/fa";
import ButtonLink from "../ButtonLink";

export default function NotFoundSection() {
  return (
    <main className="relative min-h-screen w-screen max-w-screen p-0 m-0 overflow-x-hidden flex flex-col items-center justify-center bg-transparent pt-16">
      <div className="flex flex-col items-center justify-center mt-8 place-items-center overflow-y-hidden gap-4 font-mona-sans">
        <h1 className="text-content text-2xl md:text-4xl font-bold text-center text-balance !overflow-y-hidden px-4">
          404 - Page Not Found
        </h1>
        <p className="text-content text-sm md:text-lg text-center text-balance !overflow-y-hidden px-8">
          Sorry, the page you are looking for does not exist.
        </p>

        <ButtonLink
          href="/"
          rightIcon={<FaHome />}
          className="button-content scale-[90%] !overflow-y-hidden"
        >
          Home
        </ButtonLink>
      </div>
    </main>
  );
}
