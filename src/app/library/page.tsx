import Link from "next/link";

interface Resource {
  title: string;
  description: string;
  href: string;
  category: "Books" | "Essays" | "Articles" | "Learning" | "Design";
}

const resources: Resource[] = [
  {
    title: "High Performance Browser Networking",
    description:
      "A book on web networking and protocols (HTTP, HTTP/2, SSE, TCP) that also builds strong general networking fundamentals.",
    href: "https://hpbn.co/",
    category: "Books",
  },
  {
    title: "Local-first software",
    description: "A eassy about building software that works offline.",
    href: "https://www.inkandswitch.com/essay/local-first/",
    category: "Essays",
  },
  {
    title: "A CRDT for Rich-Text Collaboration",
    description:
      "A CRDT(an algorithm and data structure) for rich-text collaboration.",
    href: "https://www.inkandswitch.com/peritext/",
    category: "Essays",
  },
  {
    title: "Agents",
    description: "Learn about agents and what they are. Author is Chip Huyen.",
    href: "https://huyenchip.com/2025/01/07/agents.html",
    category: "Articles",
  },
  {
    title:
      "The Logs What every software engineer should know about real-time data's unifying abstraction",
    description:
      "Jay Kreps on how the 'log'—an append-only, ordered sequence of records—serves as elegant solution for distributed systems and real-time stream processing.",
    href: "https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying",
    category: "Articles",
  },
  {
    title: "How Imports Work in RSC",
    description: "Learn about how imports work in React Server Components.",
    href: "https://overreacted.io/how-imports-work-in-rsc/",
    category: "Articles",
  },
  {
    title: "JSX Over The Wire",
    description: "Learn about how JSX is sent from server to client.",
    href: "https://overreacted.io/jsx-over-the-wire/",
    category: "Articles",
  },
  {
    title: "Learn PWA",
    description:
      "A course that breaks down every aspect of modern progressive web app development.",
    href: "https://web.dev/learn/pwa",
    category: "Learning",
  },
  {
    title: "Good vs Great Animations",
    description: "Learn when to add an animation.",
    href: "https://emilkowal.ski/ui/good-vs-great-animations",
    category: "Design",
  },
  {
    title: "The Bullshit Machines",
    description:
      "A book that teaches how to evaluate LLMs, like these are just algorithms not miracles. Explains how to adopt these tools thoughtfully.",
    href: "https://thebullshitmachines.com/",
    category: "Books",
  },
];

const groupedResources = resources.reduce(
  (acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  },
  {} as Record<string, Resource[]>,
);

export default function LibraryPage() {
  return (
    <div className="py-6 md:py-8">
      <h1 className="text-xl md:text-2xl font-semibold text-slate12 tracking-tight mb-1.5 md:mb-2">
        Library
      </h1>
      <p className="text-sm md:text-base text-slate11 mb-6 md:mb-8">
        Resources I&apos;ve learned and learning from. recommend exploring them.
      </p>

      {Object.entries(groupedResources).map(([category, items]) => (
        <div key={category} className="mb-8 md:mb-10">
          <h2 className="text-[10px] md:text-xs font-medium text-slate9 uppercase tracking-wider mb-3 md:mb-4">
            {category}
          </h2>
          <div>
            {items.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between py-3 md:py-4 border-b border-slate3 last:border-b-0 no-underline active:opacity-70 transition-opacity"
              >
                <div className="min-w-0 flex-1 pr-3">
                  <h3 className="text-sm font-medium text-slate12 group-hover:text-crimson11 transition-colors mb-0.5">
                    {resource.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate10 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <span className="text-slate8 group-hover:text-slate11 transition-colors text-xs shrink-0 mt-0.5">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
