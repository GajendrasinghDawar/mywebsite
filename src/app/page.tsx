import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="flex-1 py-12 md:py-24">
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-8 md:grid-cols-[minmax(0,1fr)_11rem] md:gap-8">
          <figure className="w-28 overflow-hidden rounded-lg border border-slate5 bg-slate2 md:order-2 md:w-44">
            <Image
              src="/me.webp"
              alt="Portrait of Gajendrasingh Dawar"
              width={1080}
              height={1440}
              priority
              sizes="(min-width: 768px) 176px, 112px"
              className="aspect-4/5 h-auto w-full object-cover object-center"
            />
          </figure>

          <div className="min-w-0 md:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate12 tracking-tight mb-3 md:mb-4 -ml-0.5">
              Gajendrasingh Dawar
            </h1>

            <p className="text-base md:text-lg text-slate11 mb-5 md:mb-6">
              Full Stack Developer
            </p>

            <p className="text-sm md:text-base text-slate11 leading-relaxed md:leading-relaxed max-w-md md:max-w-lg ">
              I build web apps with Next.js, Node.js, and TypeScript. I am
              currently exploring AI engineering, And how to build durable AI
              agents. I also have a deep interest in local-first software.
            </p>

            <p className="mb-6 md:mb-8"></p>

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
        </div>
      </div>
      <Footer />
    </div>
  );
}
