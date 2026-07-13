import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications | Gajendrasingh Dawar",
  description:
    "Professional certifications in AI engineering, full-stack development, and Python automation.",
};

const certifications = [
  {
    title: "The AI Engineer Path",
    issuer: "Scrimba",
    issuerHref: "https://scrimba.com/",
    year: "2025",
    credentialHref:
      "https://scrimba.com/@GajendrasinghDawar:certs;cert2uNje7fs5RPtygsgJEX7ShKvNS8gm4sKUKt",
    description:
      "Advanced architectural coursework covering AI agents, RAG implementation, Model Context Protocol (MCP), and multimodality.",
  },
  {
    title: "MERN Full Stack Development",
    issuer: "GeeksforGeeks",
    issuerHref: "https://www.geeksforgeeks.org/",
    year: "2022",
    credentialHref:
      "https://www.geeksforgeeks.org/certificate/8dfa30b9fb2ab953ed377142faca997c",
    description:
      "Core foundation in API development, frontend development, Node.js backend development, and DevOps.",
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Coursera",
    issuerHref: "https://www.coursera.org/",
    year: "2022",
    credentialHref:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/YUD3YWQYDTTT",
    description:
      "Covered Python programming, operating system interaction, Git and GitHub, and cloud configuration management.",
  },
];

export default function CertificationsPage() {
  return (
    <section className="py-10 md:py-16">
      <header className="mb-10 max-w-xl md:mb-14">
        <h1 className="text-3xl font-semibold tracking-tight text-slate12/90 md:text-4xl">
          Certifications
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate10">
          Selected programs that I have done over the years across domains like
          AI Engineering, Full Stack Development, and Automation.
        </p>
      </header>

      <div className="border-t border-dashed border-slate5">
        {certifications.map((certification) => (
          <article
            key={certification.title}
            className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-dashed border-slate6 py-7 md:grid-cols-[5rem_1fr] md:gap-8 md:py-9"
          >
            <time className="pt-1 font-mono text-xs tabular-nums text-slate8">
              {certification.year}
            </time>

            <div>
              <h2 className="text-lg font-medium leading-snug text-slate12 md:text-xl">
                {certification.title}
              </h2>
              <p className="mt-2 text-sm text-slate9">
                Issued by{" "}
                <a
                  href={certification.issuerHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate11 underline decoration-slate6 underline-offset-4 transition-colors hover:text-crimson11 hover:decoration-crimson8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson8"
                >
                  {certification.issuer}
                </a>
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate10 md:text-base">
                {certification.description}
              </p>
              <a
                href={certification.credentialHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-slate11 no-underline transition-colors hover:text-crimson11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson8"
              >
                View credential
                <ExternalLink
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-current"
                />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
