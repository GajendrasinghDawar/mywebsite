interface Couplet {
  text?: string
  textHindi?: string
  author?: string
}

const couplets: Couplet[] = [
  {
    text: "The heart that loves is always young.",
    author: "Greek Proverb",
  },
  {
    textHindi:
      "हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले,\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले।",
    author: "Mirza Ghalib",
  },
  {
    textHindi:
      "ज़िंदगी में तो सभी प्यार किया करते हैं,\nमौत हो जाए किसी की तो संभल जाना।",
    author: "Unknown",
  },
  {
    text: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    author: "Albert Camus",
  },
]

function NightBackground() {
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
            <stop offset="0%" stopColor="hsl(220, 10%, 20%)" stopOpacity="0.04" />
            <stop offset="50%" stopColor="hsl(220, 8%, 12%)" stopOpacity="0.02" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ambientGlow" cx="20%" cy="80%" r="50%">
            <stop offset="0%" stopColor="hsl(215, 12%, 15%)" stopOpacity="0.03" />
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
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate1 via-transparent to-transparent opacity-60" />
    </div>
  )
}

export default function CoupletsPage() {
  return (
    <>
      <NightBackground />
      <div className="relative z-10 py-8 md:py-12">
        <h1 className="text-xl md:text-2xl font-semibold text-slate12 tracking-tight mb-1.5 md:mb-2">
          Couplets
        </h1>
        <p className="text-sm md:text-base text-slate10 mb-10 md:mb-14">
          Words that stay.
        </p>

        <div className="space-y-14 md:space-y-20">
          {couplets.map((couplet, index) => (
            <article key={index} className="max-w-xs sm:max-w-sm md:max-w-md">
              <span className="text-[10px] text-amber11/40 font-mono mb-3 block">
                {String(index + 1).padStart(2, "0")}
              </span>
              {couplet.textHindi ? (
                <p className="font-devanagari text-base md:text-lg text-slate12 leading-loose md:leading-loose whitespace-pre-line">
                  {couplet.textHindi}
                </p>
              ) : (
                <p className="text-base md:text-lg text-slate12 leading-relaxed md:leading-loose italic">
                  "{couplet.text}"
                </p>
              )}
              {couplet.author && (
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-slate8">
                  — {couplet.author}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
