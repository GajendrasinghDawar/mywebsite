import { Twitter, Linkedin, Instagram, Github } from "@/components/Icons";
import Link from "next/link";

export function Header() {
    return (
        <>
            { socialIcons.map((item) => (
                <Link
                    key={ item.link }
                    href={ item.link }
                    className=" h-8 w-8 sm:h-9 sm:w-9 bg-olive3  rounded-full  border-sand4  hover:bg-olive4 border p-1 cursor-pointer"
                    target="_blank"
                    aria-label={ `this my ${item.name} link` }
                >
                    { item.icon }
                </Link>
            )) }
        </>
    );
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
    // {
    //     icon: <Twitter />,
    //     link: "https://twitter.com/gajendrsinghdwr",
    //     name: "twitter",
    // },
    // {
    //     icon: <Instagram />,
    //     link: "#",
    //     name: "instagram",
    // },
];
