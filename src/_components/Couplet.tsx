interface CoupletProps {
  children: React.ReactNode;
  author: string;
}

export function Couplet({ children, author }: CoupletProps) {
  return (
    <article className="not-prose py-10 md:py-14 first:pt-0">
      <div className="font-devanagari text-base md:text-lg text-slate11 leading-loose whitespace-pre-line [&>p]:m-0">
        {children}
      </div>
      <span className="block mt-4 md:mt-5 text-xs text-amber12/80">
        — {author}
      </span>
    </article>
  );
}
