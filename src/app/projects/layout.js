import { BackHomeLink } from "@/components/BackHomeLink"

export default function ProjectLayout({ children }) {
  return (
    <section className="mt-6 mb-12">
      <BackHomeLink />
      {children}
    </section>
  )
}
