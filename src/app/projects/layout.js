import { BackArrow, Download, External } from "@/components/Icons"
import Link from "next/link"

export default function ProjectLayout({ children }) {
    return (

        <main
            className="md:mx-auto md:max-w-2xl py-8 px-4 md:px-0"
        >
            <Link
                href="/"
                className="text-base border-b-4 border-purple9 hover:border-iris12 font-bold text-iris11 hover:text-iris12 flex items-center gap-2 group w-max mb-2"
            >
                <BackArrow />
                Back to Home
            </Link>
            { children }
        </main>
    )
}
