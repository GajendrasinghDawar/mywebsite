import { Skills } from "@/components/SkillSection"
import { ProjectSection } from "@/components/ProjectSection"
import { Header } from "@/components/Header"
import { Intro } from "@/components/Intro"

export default function RootPage() {
    return (
        <main className="md:mx-auto md:max-w-2xl">
          <Header />
          <Intro />
          <Skills />
          <ProjectSection />
      </main>
  )
}
