type PageHeaderProps = {
  header: string;
  subHeader?: string;
};

export default function PageHeader({ header, subHeader }: PageHeaderProps) {
  return (
    <div className="py-16 sm:py-24 border-b border-base-500 responsive">
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{header}</h1>
      {subHeader && <p className="mt-6 text-md md:text-lg max-w-2xl leading-8 text-base-400">{subHeader}</p>}
    </div>
  );
}
