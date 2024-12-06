import { Linkedin, Github, Home2 } from "@/components/Icons"
import Image from "next/image"
import Link from "next/link"
import profilePic from "../_static/profile.jpg"

export function Header() {
  return (
    <header className="w-full flex flex-col-reverse md:flex-row justify-start md:justify-between items-center mt-4 md:mb-6">
      <section className="flex flex-col h-full gap-4  ">
        <div>
          <h2 className={`mb-0 tracking-normal`}>Gajendrasingh Dawar</h2>
          <div className="w-full flex items-center justify-center md:justify-start gap-2 mt-2">
            <section className="mb-1 md:mb-0">
              <Home2 />
            </section>
            <h4 className="my-0">Indore, (M.P.) India</h4>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-1">
          {socialIcons.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="rounded-lg p-1 border hover:border-yellow-900 hover:bg-yellow2 border-yellow-800 cursor-pointer h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center mr-2 transition duration-300"
              target="_blank"
              aria-label={`this is my ${item.name} link`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </section>
      <ProfileSection />
    </header>
  )
}

function ProfileSection() {
  return (
    <section className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
      <Image
        src={profilePic}
        alt="Gajendrasingh Dawar"
        className="object-contain rounded-lg select-none"
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
