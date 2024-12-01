import { CanvasDotted } from "@/components/Icons"
import Link from "next/link"

const projects = [
  {
    title: "Forum Application",
    description: "Reddit like app for posting thread and commenting.",
    link: "/projects/forum-app",
  },
  {
    title: "Note Taking App",
    description:
      "A progressive web App for taking notes oine built using React.",
    link: "/projects/note-taking-app",
  },
]

export function ProjectSection() {
  return (
    <div className=" pb-12 w-full">
      <div className="flex items-center gap-4">
        <CanvasDotted />
        <h3 className="font-bold">Projects</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ title, description, link }) => {
  return (
    <Link
      href={link}
      className="block border w-full border-gray5  p-6 shadow-sm bg- rounded-lg  hover:border-gray7 bg-gray1 transition duration-300"
    >
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h3>
      <p className="font-normal text-gray-700">{description}</p>
    </Link>
  )
}
