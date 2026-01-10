import Link from "next/link"

function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1600 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fadeDown" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="30%" stopColor="white" stopOpacity="0.6" />
            <stop offset="70%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="fadeMask">
            <rect width="100%" height="100%" fill="url(#fadeDown)" />
          </mask>
        </defs>
        <g mask="url(#fadeMask)">
          <path
            d="M-100,500 Q400,420 800,480 T1700,450"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-slate6 opacity-40"
          />
          <path
            d="M-100,540 Q500,480 900,520 T1700,490"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            className="text-slate5 opacity-30"
          />
          <path
            d="M-100,580 Q350,530 750,570 T1700,540"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-slate5 opacity-25"
          />
          <path
            d="M-100,620 Q600,580 1000,610 T1700,590"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-slate4 opacity-20"
          />
        </g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-slate1 via-transparent to-slate1 opacity-80" />
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="relative py-16 md:py-24">
      <WaveBackground />
      <h1 className="text-3xl md:text-4xl font-semibold text-slate12 tracking-tight mb-4">
        Gajendrasingh Dawar
      </h1>
      
      <p className="text-lg text-slate11 mb-6">
        Full Stack Developer
      </p>

      <p className="text-slate11 leading-relaxed max-w-lg mb-8">
        I build web applications using{" "}
        <span className="text-slate12">Next.js</span>,{" "}
        <span className="text-slate12">Node.js</span>, and{" "}
        <span className="text-slate12">AI</span>. My focus is on clean code, 
        understanding systems, and solving real problems.
      </p>

      <div className="flex items-center gap-3 text-sm mb-12">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-jade9" />
          <span className="text-slate11">Open for opportunities</span>
        </span>
        <span className="text-slate6">·</span>
        <span className="text-slate9">Indore, India</span>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <Link 
          href="/projects" 
          className="text-slate11 hover:text-crimson11 transition-colors no-underline"
        >
          View Projects →
        </Link>
        <Link 
          href="https://github.com/GajendrasinghDawar" 
          target="_blank"
          className="text-slate11 hover:text-slate12 transition-colors no-underline"
        >
          GitHub
        </Link>
        <Link 
          href="https://linkedin.com/in/gajendrasinghdawar" 
          target="_blank"
          className="text-slate11 hover:text-slate12 transition-colors no-underline"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  )
}
