import { BackHomeLink } from "../../_components/BackHomeLink";

export default function ProjectLayout({ children }) {
  return (
    <section className="mt-6 mb-12 prose">
      <BackHomeLink />
      {children}
    </section>
  );
}
