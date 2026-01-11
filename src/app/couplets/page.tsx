interface Couplet {
  text?: string;
  textHindi?: string;
  author?: string;
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
];

export default function CoupletsPage() {
  return (
    <>
      {/* <NightBackground /> */}
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
                  &quot;{couplet.text}&quot;
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
  );
}
