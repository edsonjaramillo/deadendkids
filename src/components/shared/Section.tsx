type SectionProps = {
  header: string;
  subHeader?: string;
  children?: React.ReactNode;
};

export default function Section({ header, subHeader, children }: SectionProps) {
  return (
    <section className="responsive py-16 lg:py-24" aria-label={header}>
      <h2 className="text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">{header}</h2>
      {subHeader && <p className="text-md mx-auto mt-4 max-w-2xl text-center text-base-400 md:text-lg">{subHeader}</p>}
      {children && <div className="pt-12">{children}</div>}
    </section>
  );
}
