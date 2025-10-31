import { External } from "./Icons"

export function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2  underline decoration-jade8 hover:decoration-jade7 transition-colors duration-200"
      target="_blank"
      aria-label={`this is my ${href} link`}
    >
      <span className="text-slate11">{children}</span>
      <External className={` inline-block align-baseline mt-1`}/>
    </a>
  )
}
