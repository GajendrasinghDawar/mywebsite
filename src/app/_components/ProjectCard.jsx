import Link from "next/link"

export const ProjectCard = ({ title, description, link }) => {
  return (
    <Link
      href={link}
      className="block border w-full border-gray5  p-6 hover:shadow-sm bg- rounded-lg  hover:border-gray6 bg-gray2 transition duration-300"
    >
      <h3 className="mb-2 text-2xl font-bold tracking-tight">{title}</h3>
      <p className="font-normal text-gray11">{description}</p>
    </Link>
  )
}
