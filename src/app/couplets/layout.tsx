export default function CoupletsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-10 md:py-16">
      <header className="mb-12 md:mb-16">
        <h1 className="text-lg md:text-xl font-medium text-slate12 tracking-tight ">
          Couplets <span className="font-devanagari">[ अशार ]</span>
        </h1>
        <p className="mt-1 text-sm text-slate9">
          here are the Words I like from poems.
        </p>
      </header>
      <div className="divide-y divide-slate4/50">{children}</div>
    </div>
  );
}
