import { External } from "@/components/Icons"

export function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2  underline decoration-purple-600 hover:decoration-purple-800 transition-colors duration-200"
      target="_blank"
      aria-label={`this is my ${href} link`}
    >
      <span className="text-inherit">{children}</span>
      <External className="h-4 w-4 inline-block align-baseline mt-1" />
    </a>
  )
}
