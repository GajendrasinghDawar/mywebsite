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
    textHindi: "हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले,\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले।",
    author: "Mirza Ghalib",
  },
  {
    textHindi: "ज़िंदगी में तो सभी प्यार किया करते हैं,\nमौत हो जाए किसी की तो संभल जाना।",
    author: "Unknown",
  },
  {
    text: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    author: "Albert Camus",
  },
]

export default function CoupletsPage() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold text-slate12 tracking-tight mb-2">
        Couplets
      </h1>
      <p className="text-slate11 mb-12">
        Words that stay.
      </p>

      <div className="space-y-16">
        {couplets.map((couplet, index) => (
          <div key={index} className="max-w-lg">
            {couplet.textHindi ? (
              <p className="font-devanagari text-lg text-slate12 leading-relaxed whitespace-pre-line">
                {couplet.textHindi}
              </p>
            ) : (
              <p className="text-lg text-slate12 leading-relaxed italic">
                "{couplet.text}"
              </p>
            )}
            {couplet.author && (
              <p className="mt-3 text-sm text-slate9">— {couplet.author}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
