"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface Project {
  title: string;
  description: string;
  href: string;
  stack?: string[];
}

const projects: Project[] = [
  {
    title: "AHEM",
    description:
      "AI-powered application with data streaming and real-time features.",
    href: "/projects/ahem",
    stack: ["Next.js", "Node.js", "AI", "Streaming"],
  },
];

const archivedProjects: Project[] = [
  {
    title: "Forum Application",
    description: "Reddit like app for posting threads and commenting.",
    href: "/projects/forum-app",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Note Taking App",
    description: "Progressive web app for taking notes, built with React.",
    href: "/projects/note-taking-app",
    stack: ["React", "PWA", "IndexedDB"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group not-prose block py-5 border-b border-slate3 last:border-b-0 no-underline"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-slate12 group-hover:text-crimson11 transition-colors mb-1.5">
            {project.title}
          </h3>
          <p className="text-sm text-slate11 mb-3">{project.description}</p>
          {project.stack && (
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-slate9 bg-slate3 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="text-slate7 group-hover:text-slate11 transition-colors shrink-0">
          →
        </span>
      </div>
    </Link>
  );
}

function ArchivedCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group not-prose block py-4 border-b border-slate3 last:border-b-0 no-underline"
    >
      <h4 className="text-sm text-slate10 group-hover:text-slate11 transition-colors mb-1">
        {project.title}
      </h4>
      <p className="text-xs text-slate9">{project.description}</p>
    </Link>
  );
}

export default function ProjectsPage() {
  const [showArchived, setShowArchived] = useState(false);

  return (
    <>
      <h1>Projects</h1>
      <p>Selected work and systems I&apos;ve built.</p>

      <div className="not-prose mt-8 mb-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="not-prose border-t border-slate3 pt-8">
        <button
          onClick={() => setShowArchived(!showArchived)}
          className="flex items-center gap-2.5 text-sm text-slate9 hover:text-slate11 transition-colors cursor-pointer"
        >
          <motion.span
            animate={{ rotate: showArchived ? 90 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-slate7"
          >
            →
          </motion.span>
          Archived
        </button>

        <AnimatePresence initial={false}>
          {showArchived && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6">
                {archivedProjects.map((project) => (
                  <ArchivedCard key={project.title} project={project} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
