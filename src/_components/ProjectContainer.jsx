export function ProjectContainer({ children }) {
  return (
     <div
      className="mb-12 w-full mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
      role="list"
      aria-label="projects list"
    >
      {children}
    </div>
  )
}
