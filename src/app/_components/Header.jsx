import { Linkedin, Github, Home2 } from "@/components/Icons"
import Image from "next/image"
import Link from "next/link"
import profilePic from "@/static/profile.jpg"

export function Header() {
    return (
        <header className="w-full flex flex-col-reverse md:flex-row justify-start md:justify-between items-center px-4 md:px-0 mt-12">
            <section className="flex flex-col h-full gap-4  ">
                <div>
                    <h1 className="text-2xl mb-0 md:text-3xl ">Gajendrasingh Dawar</h1>
                    <div className="w-full flex items-center gap-2">
                        <section>
                            <Home2 />
                        </section>
                        <h2 className="my-0 text-xl ">Indore, India</h2>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    { socialIcons.map((item) => (
                        <Link
                            key={ item.link }
                            href={ item.link }
                            className="rounded-lg p-1 border border-yellow-800 cursor-pointer h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center"
                            target="_blank"
                            aria-label={ `this is my ${item.name} link` }
                        >
                            { item.icon }
                        </Link>
                    )) }
                </div>
            </section>
            <ProfileSection />
        </header>
    )
}

function ProfileSection() {
    return (
        <section className="w-24 h-24 ">
            <Image
                src={ profilePic }
                alt="Gajendrasingh Dawar"
                className="object-contain rounded-lg"
            />
        </section>
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
