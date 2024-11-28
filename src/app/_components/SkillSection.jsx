export function Skills() {
    return (
        <div className="w-full px-4 md:px-0">
            <div className="flex items-center gap-2 mb-8">
                {/* <Tools /> */ }
                <h2 className="text-3xl font-bold">Tools</h2>
            </div>

            <div className="mb-4 flex w-full items-baseline gap-4">
                <h3 className="text-2xl font-semibold mb-2">Languages:</h3>
                <p>{ skills.Languages.join(', ') }</p>
            </div>

            <div className="mb-4 flex w-full items-baseline  gap-4">
                <h3 className="text-2xl font-semibold mb-2">Frameworks & Libraries:</h3>
                <p>{ skills.FrameworksLibraries.join(', ') }</p>
            </div>

            <div className="flex w-full items-baseline  gap-4">
                <h3 className="text-2xl font-semibold mb-2">Tools & Platforms:</h3>
                <p>{ skills.ToolsPlatforms.join(', ') }</p>
            </div>
        </div>
    );
}

const skills = {
    Languages: [ "PHP", "JavaScript", "Python", "CSS", "HTML" ],
    FrameworksLibraries: [ "Laravel", "React", "Tailwind", "Next.js" ],
    ToolsPlatforms: [ "GitHub", "AWS", "Linux (Ubuntu)" ]
};
