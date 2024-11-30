import { Tools } from "@/components/Icons";

const skills = {
    Languages: [ "JavaScript", "CSS", "HTML", "ReactJs", "NextJs", "Tailwind", ],
    FrameworksLibraries: [ "NodeJs", "PHP", "Laravel", "Python", ],
    ToolsPlatforms: [ "GitHub", "AWS", "Linux (Ubuntu)" ]
};


export function Skills() {
    return (
        <div className="w-full px-4 md:px-0">
            <div className="flex items-baseline -ml-2 gap-2">
                <Tools />
                <h3 className="font-bold">Tools</h3>
            </div>

            <div className="flex w-full flex-wrap items-baseline gap-1 sm:gap-4 ">
                <h4>Frontend:</h4>
                <p className="font-medium">{ skills.Languages.join(', ') }</p>
            </div>

            <div className="flex w-full flex-wrap  items-baseline gap-1 sm:gap-4">
                <h4>Backend:</h4>
                <p className="font-medium">{ skills.FrameworksLibraries.join(', ') }</p>
            </div>

            <div className="flex flex-wrap  w-full items-baseline  gap-1 sm:gap-4">
                <h4>Tools & Platforms:</h4>
                <p className="font-medium">{ skills.ToolsPlatforms.join(', ') }</p>
            </div>
        </div>
    );
}

