import { HandWaving } from "@/components/Icons"

export function Intro() {
  return (
    <article className="my-6">
      <p className="font-medium text-lg md:text-2xl">
        Hello <HandWaving className="h-5 w-5 inline-block align-baseline" />,
        I&apos;m a Web developer with a foundation in both backend and frontend
        technologies. Live in Khargone(M.P.), India.
      </p>

      <p className="text-lg sm:text-xl  my-4">
        I am always interested in learning new things and understanding how
        things work together. I am brave enough 😉 to take on new challenges and
        practice new technologies. Over the past few months, I have decided to
        understand web technologies such as Progressive Web Apps, Web APIs, and
        Node.js for backend development. I have also explored other backend
        languages like Python and PHP.
      </p>

      <p className="text-lg md:text-xl  my-4">
        In the future, I am interested in learning more about local-first
        software and large language models (LLMs). Currently I am looking for
        job opportunities in web development.
      </p>
    </article>
  )
}
