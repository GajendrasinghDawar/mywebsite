import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full md:w-[1040px] px-2 h-full flex flex-col gap-6 pt-6 items-center justify-center">
      <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-olive12">
        Not Found
      </h1>
      <Link href="/" className="text-lg text-olive12 underline">
        Go back to home
      </Link>
    </div>
  );
}
