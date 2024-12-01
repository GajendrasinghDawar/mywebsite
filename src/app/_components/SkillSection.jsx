import { Tools } from "@/components/Icons"

const skills = [
  {
    category: "Frontend",
    items: ["JavaScript", "CSS", "HTML", "ReactJs", "NextJs", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["NodeJs", "PHP", "Laravel", "Python"],
  },
  {
    category: "Platforms",
    items: ["GitHub", "AWS", "Linux (Ubuntu)"],
  },
]

export function Skills() {
  return (
    <article className="w-full ">
      <div className="flex items-baseline px-1 md:px-0 -ml-2 gap-2">
        <Tools />
        <h3 className="font-bold">Tools</h3>
      </div>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4 flex flex-wrap items-baseline">
          <b className="mr-2 my-0">{skill.category}:</b>
          {skill.items.map((item, itemIndex) => (
            <p key={itemIndex} className="mr-2 my-0">
              {item}
              {itemIndex < skill.items.length - 1 && ","}
            </p>
          ))}
        </div>
      ))}
    </article>
  )
}
