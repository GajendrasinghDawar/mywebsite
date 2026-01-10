"use client"

import { useState } from "react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  href: string
  stack?: string[]
  status?: "live" | "archived"
}

const projects: Project[] = [
  {
    title: "AHEM",
    description: "AI-powered application with data streaming and real-time features.",
    href: "/projects/ahem",
    stack: ["Next.js", "Node.js", "AI", "Streaming"],
    status: "live",
  },
  {
    title: "Forum Application",
    description: "Reddit-like app for posting threads and commenting.",
    href: "/projects/forum-app",
    stack: ["React", "Node.js", "PostgreSQL"],
    status: "live",
  },
  {
    title: "Note Taking App",
    description: "Progressive web app for taking notes, built with React.",
    href: "/projects/note-taking-app",
    stack: ["React", "PWA", "IndexedDB"],
    status: "live",
  },
]

const archivedProjects: Project[] = [
  {
    title: "Old Portfolio",
    description: "Previous portfolio website built with vanilla HTML/CSS.",
    href: "#",
    status: "archived",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group block py-4 md:py-5 border-b border-slate3 last:border-b-0 no-underline active:opacity-70 transition-opacity"
    >
      <div className="flex items-start justify-between gap-3 md:gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm md:text-base font-medium text-slate12 group-hover:text-crimson11 transition-colors mb-1">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-slate11 mb-2 leading-relaxed">
            {project.description}
          </p>
          {project.stack && (
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] md:text-xs text-slate9 bg-slate3 px-1.5 md:px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="text-slate8 group-hover:text-slate11 transition-colors text-sm shrink-0 mt-0.5">
          →
        </span>
      </div>
    </Link>
  )
}

export default function ProjectsPage() {
  const [showArchived, setShowArchived] = useState(false)

  return (
    <div className="py-6 md:py-8">
      <h1 className="text-xl md:text-2xl font-semibold text-slate12 tracking-tight mb-1.5 md:mb-2">
        Projects
      </h1>
      <p className="text-sm md:text-base text-slate11 mb-6 md:mb-8">
        Selected work and systems I've built.
      </p>

      <div className="mb-10 md:mb-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="border-t border-slate3 pt-6 md:pt-8">
        <button
          onClick={() => setShowArchived(!showArchived)}
          className="flex items-center gap-2 text-sm text-slate9 hover:text-slate11 active:text-slate11 transition-colors cursor-pointer py-1"
        >
          <span
            className={`transition-transform duration-200 ${
              showArchived ? "rotate-90" : ""
            }`}
          >
            →
          </span>
          Archived Projects
        </button>

        {showArchived && (
          <div className="mt-4">
            {archivedProjects.map((project) => (
              <div
                key={project.title}
                className="py-3 md:py-4 border-b border-slate3 last:border-b-0"
              >
                <h4 className="text-sm text-slate10 mb-1">{project.title}</h4>
                <p className="text-xs md:text-sm text-slate9 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
