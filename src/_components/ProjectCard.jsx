import Link from "next/link"

export const ProjectCard = ({ title, description, link }) => {
  return (
    <Link
      href={link}
          className="block w-full p-6 rounded-md transition duration-300 bg-slate3 border border-slate5 hover:bg-slate4 hover:border-slate6
           hover:shadow-sm
           no-underline
           "
    >
     <h3 className="mb-2 text-2xl font-bold tracking-tight text-slate12">{title}</h3>
      <p className="font-normal text-gray11">{description}</p>
    </Link>
  )
}
