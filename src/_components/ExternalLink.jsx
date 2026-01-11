import { External } from "./Icons";

export function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group inline-flex items-center gap-0.5 
        font-normal text-slate11
        underline underline-offset-[3px] decoration-crimson8/40
        transition-colors duration-200 
        hover:text-slate12 hover:decoration-crimson8 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson8/40 focus-visible:rounded-sm
      "
    >
      {children}
      <External
        aria-hidden="true"
        className=" ml-1.5
          h-[0.85em] w-[0.85em] 
          opacity-30 
          transition-all duration-200 
          group-hover:opacity-100 group-hover:-translate-y-px group-hover:translate-x-px  group-hover:text-crimson8
        "
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}