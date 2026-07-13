import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ResourceProps {
  children: React.ReactNode;
  title: string;
  href: string;
}

export function Resource({ children, title, href }: ResourceProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group not-prose flex items-start justify-between py-3 md:py-4 border-b border-slate3 last:border-b-0 no-underline active:opacity-70 transition-opacity"
    >
      <div className="min-w-0 flex-1 pr-3">
        <h3 className="text-sm font-medium text-slate12 group-hover:text-crimson11 transition-colors mb-0.5">
          {title}
        </h3>
        <div className="text-xs md:text-sm text-slate10 leading-relaxed [&>p]:m-0">
          {children}
        </div>
      </div>
      <ExternalLink
        aria-hidden="true"
        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate10/50 group-hover:text-slate11"
      />
    </Link>
  );
}
