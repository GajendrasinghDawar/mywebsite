interface ResourceGroupProps {
  children: React.ReactNode;
  category: string;
}

export function ResourceGroup({ children, category }: ResourceGroupProps) {
  return (
    <section className="not-prose mb-8 md:mb-10">
      <h2 className="text-[10px] md:text-xs font-medium text-slate9 uppercase tracking-wider mb-3 md:mb-4">
        {category}
      </h2>
      <div>{children}</div>
    </section>
  );
}
