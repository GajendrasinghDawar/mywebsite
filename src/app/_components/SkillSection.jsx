import { Tools } from "@/components/Icons"

const skills = [
    {
        category: "Frontend",
        items: [ "JavaScript", "CSS", "HTML", "ReactJs", "NextJs", "Tailwind" ],
    },
    {
        category: "Backend",
        items: [ "NodeJs", "PHP", "Laravel", "Python" ],
    },
    {
        category: "Platforms",
        items: [ "GitHub", "AWS", "Linux (Ubuntu)" ],
    },
]

export function Skills() {
    return (
        <article className="w-full px-4 md:px-0">
            <div className="flex items-baseline -ml-2 gap-2">
                <Tools />
                <h3 className="font-bold">Tools</h3>
            </div>
            { skills.map((skill, index) => (
                <div key={ index } className="my-0 flex flex-wrap items-baseline">
                    <b className="mr-2">{ skill.category }:</b>
                    { skill.items.map((item, itemIndex) => (
                        <p key={ itemIndex } className="mr-2">
                            { item }
                            { itemIndex < skill.items.length - 1 && ',' }
                        </p>
                    )) }
                </div>
            )) }
        </article>
    )
}
