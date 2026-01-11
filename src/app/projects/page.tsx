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
    stack: ["Next.js", "Node.js", "AI Engineering", "Typescript"],
  },
];

const archivedProjects: Project[] = [
  {
    title: "Forum Application",
    description: "Reddit like app for posting threads and commenting.",
    href: "/projects/forum-app",
    stack: ["React", "Node.js", "PostgreSQL", "Laravel"],
  },
  {
    title: "Note Taking App",
    description: "Progressive web app for taking notes, built with React.",
    href: "/projects/note-taking-app",
    stack: ["React", "PWA", "IndexedDB", "offline"],
  },
];

function ProjectCard({
  project,
  variant = "default",
}: {
  project: Project;
  variant?: "default" | "archived";
}) {
  const isArchived = variant === "archived";

  return (
    <Link
      href={project.href}
      className="group not-prose block py-4 -mx-3 px-3  border-slate3 last:border-b-0 no-underline transition-colors hover:bg-slate2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson8 focus-visible:ring-offset-2 focus-visible:ring-offset-slate1 hover:rounded-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3
            className={`font-medium transition-colors  ${
              isArchived
                ? "text-sm text-slate10 group-hover:text-slate11 group-focus-visible:text-slate11"
                : "text-base text-slate12 group-hover:text-crimson11 group-focus-visible:text-crimson11"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`mb-0 ${
              isArchived ? "text-xs text-slate9" : "text-sm text-slate11"
            }`}
          >
            {project.description}
          </p>
          {project.stack && !isArchived && (
            <div className="flex flex-wrap gap-2 mt-3">
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
        <span
          className="text-slate6 group-hover:text-slate9 group-focus-visible:text-slate9 transition-colors shrink-0"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  const [showArchived, setShowArchived] = useState(false);

  return (
    <>
      <h1>Projects</h1>
      <p>Selected projects I&apos;ve built.</p>

      <div className="not-prose mt-8 mb-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="not-prose pt-4 border-0 border-t border-dotted border-slate6">
        <button
          type="button"
          onClick={() => setShowArchived(!showArchived)}
          aria-expanded={showArchived}
          aria-controls="archived-projects"
          className="group text-sm text-slate8 hover:text-slate10 transition-colors duration-150 cursor-pointer touch-manipulation focus-visible:outline-none focus-visible:text-slate11 bg-inherit border-none "
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ rotate: showArchived ? 90 : 0 }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              className="text-slate6 group-hover:text-slate8 transition-colors duration-150"
              aria-hidden="true"
            >
              →
            </motion.span>
            <span>Archived</span>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {showArchived && (
            <motion.div
              id="archived-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <div className="pt-6 ">
                {archivedProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    variant="archived"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
