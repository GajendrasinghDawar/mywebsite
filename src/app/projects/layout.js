import { BackHomeLink } from "@/components/BackHomeLink"
import Link from "next/link"

export default function ProjectLayout({ children }) {
    return (

        <main
            className="md:mx-auto md:max-w-2xl py-12 px-4 md:px-0"
        >
            <BackHomeLink />
            { children }
        </main>
    )
}
