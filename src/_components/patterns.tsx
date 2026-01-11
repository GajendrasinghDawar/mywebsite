export function WaveBackground() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-x-hidden pointer-events-none -z-10">
      <svg
        className="absolute w-full h-full opacity-100 md:opacity-100 max-md:opacity-60"
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
      <div className="absolute inset-0 bg-linear-to-b from-slate1 via-transparent to-slate1 opacity-80" />
    </div>
  );
}

export function NightBackground() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-slate1" />

      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="moonGlow" cx="85%" cy="15%" r="40%">
            <stop
              offset="0%"
              stopColor="hsl(220, 10%, 20%)"
              stopOpacity="0.04"
            />
            <stop
              offset="50%"
              stopColor="hsl(220, 8%, 12%)"
              stopOpacity="0.02"
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ambientGlow" cx="20%" cy="80%" r="50%">
            <stop
              offset="0%"
              stopColor="hsl(215, 12%, 15%)"
              stopOpacity="0.03"
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              result="noise"
            />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noise"
              result="monoNoise"
            />
            <feComponentTransfer in="monoNoise" result="dimNoise">
              <feFuncA type="linear" slope="0.015" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="dimNoise" mode="screen" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#moonGlow)" />
        <rect width="100%" height="100%" fill="url(#ambientGlow)" />
        <rect
          width="100%"
          height="100%"
          fill="hsl(220, 6%, 7%)"
          opacity="0.015"
          filter="url(#noise)"
        />
      </svg>

      <div className="absolute inset-0 bg-linear-to-t from-slate1 via-transparent to-transparent opacity-60" />
    </div>
  );
}
