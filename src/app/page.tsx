import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="flex-1 py-12 md:py-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate12 tracking-tight mb-3 md:mb-4 -ml-0.5">
          Gajendrasingh Dawar
        </h1>

        <p className="text-base md:text-lg text-slate11 mb-5 md:mb-6">
          Full Stack Web Developer
        </p>

        <p className="text-sm md:text-base text-slate11 leading-relaxed md:leading-relaxed max-w-md md:max-w-lg ">
          I create web applications using{" "}
          <span className="text-slate12">Next.js</span>,{" "}
          <span className="text-slate12">Node.js</span>,{" "}
          <span className="text-slate12">TypeScript</span> and plus do
          <span className="text-slate12"> AI Engineering</span>.
        </p>

        <p className="mb-6 md:mb-8">
          My focus is on creating{" "}
          <span className="text-slate12 font-medium">Agentic AI</span> web
          applications and integrating llms for better user experiences. I am
          also exploring{" "}
          <span className="text-slate12 font-medium">Local-First</span> software
          architecture.
        </p>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm mb-10 md:mb-12">
          <span className="inline-flex items-center gap-1.5 md:gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" stroke-jade9"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-slate11">Open for opportunities</span>
          </span>
          <span className="text-slate6">·</span>
          <span className="text-slate9">Indore, India</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
          <Link
            href="/projects"
            className="text-slate11 hover:text-crimson11 active:text-crimson11 transition-colors no-underline py-1"
          >
            View Projects →
          </Link>
          <Link
            href="https://github.com/GajendrasinghDawar"
            target="_blank"
            className="text-slate11 hover:text-slate12 active:text-slate12 transition-colors no-underline py-1"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/gajendrasinghdawar"
            target="_blank"
            className="text-slate11 hover:text-slate12 active:text-slate12 transition-colors no-underline py-1"
          >
            LinkedIn
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
