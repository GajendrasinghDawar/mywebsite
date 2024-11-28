import { geistSans, geistMono } from "@/app/_fonts/font"

export function Footer() {
    return (
        <footer className={ `md:mt-4 mt-2 mb-2 min-h-20 text-center px-4 ${geistSans.className}` }>
            <p className="text-base sm:text-lg  leading-relaxed text-gray11">
                The woods are lovely, dark and deep, But I have promises to keep, And
                miles to go before I sleep.
            </p>
            <p
                className={ `mt-2 text-sm sm:text-base text-gray11 font-medium ${geistMono.className}` }
            >
                - Robert Frost
            </p>
        </footer>
    )
}
