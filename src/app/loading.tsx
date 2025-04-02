import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="h-vh w-screen grid place-items-center">
      <Spinner
        childSize="h-6 w-6"
        className="bg-gradient-to-bl from-black to-white"
        outerSize="h-8 w-8"
      />
    </div>
  );
}
