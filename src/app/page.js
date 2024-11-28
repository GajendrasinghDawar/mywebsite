import { Linkedin, Github, Home2 } from "@/components/Icons"
import Image from "next/image"
import Link from "next/link"
import profilePic from "./profile.jpg"
import Skills from "@/components/SkillSection"
import ProjectSection from "@/components/ProjectSection"

export default function RootPage() {
    return (
        <main className="md:mx-auto md:max-w-2xl">
            <header className="w-full flex justify-between items-center px-4 md:px-0 pt-4">
                <section className="flex flex-col ">
                    <h1 className="text-2xl font-bold mb-4">Gajendrasingh Dawar</h1>
                    <div className="flex items-center gap-2 ">
                        <div >
                            <Home2 />
                        </div>
                        <h2> Indore, India</h2>
                    </div>
                    <div className="flex items-center  min-h-14  gap-2  z-10">
                        { socialIcons.map((item) => (
                            <Link
                                key={ item.link }
                                href={ item.link }
                                className="rounded-lg p-1 border border-yellow-800 cursor-pointer h-8 w-8 sm:h-8 sm:w-8 items-center justify-center flex "
                                target="_blank"
                                aria-label={ `this my ${item.name} link` }
                            >
                                { item.icon }
                            </Link>
                        )) }
                    </div>
                </section>
                <section>
                    <Image
                        src={ profilePic }
                        alt="Gajendrasingh Dawar"
                        className="w-32 h-32 rounded-lg"
                    />
                </section>
            </header>
            <article className="px-4 md:px-0 mt-4">
                <section className="mb-6 text-gray12 ">
                    <b>
                        Hello 👋, I'm a Web developer with a foundation in both backend and frontend technologies. Live in Khargone(M.P.), India.
                    </b>

                    <p>
                        Over the past months, I have dedicated myself to understanding Web technologies, like Progresive web app, Web Apis, and NodeJs on Backend, and tried learning other backend languages like Python and PHP.
                    </p>
                    <p>
                        What i want to learn more in future: Local frist software, or LLms.
                    </p>
                </section>
            </article>
            <Skills />
            <ProjectSection />
        </main>
    )
}

const socialIcons = [
    {
        icon: <Github />,
        link: "https://github.com/GajendrasinghDawar/",
        name: "github",
    },
    {
        icon: <Linkedin />,
        link: "https://www.linkedin.com/in/gajendrasinghdawar/",
        name: "linkedin",
    },
]


