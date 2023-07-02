type FooterSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="mt-10 md:mt-0">
      <span className="text-sm font-semibold leading-6 text-white">{title}</span>
      <ul className="mt-6 space-y-4">{children}</ul>
    </div>
  );
}
