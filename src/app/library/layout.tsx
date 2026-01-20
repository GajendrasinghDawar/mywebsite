export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-4 md:py-6">
      <header className="mb-4 md:mb-8">
        <h1 className="text-lg md:text-xl font-medium text-slate12 tracking-tight">
          Library
        </h1>
        <div className="mt-1 text-sm text-slate9">
          <p>
            Resources I&apos;ve learned and learning from. Recommend exploring
            them.
          </p>
        </div>
      </header>
      <div className="divide-y divide-slate4/50">{children}</div>
    </div>
  );
}
