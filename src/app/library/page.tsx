import Link from "next/link"

interface Resource {
  title: string
  description: string
  href: string
  category: string
}

const resources: Resource[] = [
  {
    title: "MDN Web Docs",
    description: "Comprehensive documentation for web technologies.",
    href: "https://developer.mozilla.org",
    category: "Documentation",
  },
  {
    title: "React Documentation",
    description: "Official React docs with interactive examples.",
    href: "https://react.dev",
    category: "Documentation",
  },
  {
    title: "Next.js Documentation",
    description: "Learn Next.js features and API.",
    href: "https://nextjs.org/docs",
    category: "Documentation",
  },
  {
    title: "Node.js Documentation",
    description: "Official Node.js API reference.",
    href: "https://nodejs.org/docs",
    category: "Documentation",
  },
  {
    title: "TypeScript Handbook",
    description: "Learn TypeScript from the official handbook.",
    href: "https://www.typescriptlang.org/docs",
    category: "Documentation",
  },
  {
    title: "Patterns.dev",
    description: "Modern web app design patterns.",
    href: "https://patterns.dev",
    category: "Learning",
  },
  {
    title: "web.dev",
    description: "Google's resource for modern web development.",
    href: "https://web.dev",
    category: "Learning",
  },
  {
    title: "Refactoring UI",
    description: "Design tips for developers.",
    href: "https://www.refactoringui.com",
    category: "Design",
  },
]

const groupedResources = resources.reduce(
  (acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = []
    }
    acc[resource.category].push(resource)
    return acc
  },
  {} as Record<string, Resource[]>
)

export default function LibraryPage() {
  return (
    <div className="py-6 md:py-8">
      <h1 className="text-xl md:text-2xl font-semibold text-slate12 tracking-tight mb-1.5 md:mb-2">
        Library
      </h1>
      <p className="text-sm md:text-base text-slate11 mb-6 md:mb-8">
        Resources I've learned from and recommend.
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
  )
}
