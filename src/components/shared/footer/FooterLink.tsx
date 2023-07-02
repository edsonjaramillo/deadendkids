import Link from 'next/link';

type FooterLinkProps = {
  title: string;
  href: string;
};

export default function FooterLink({ title, href }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="animate text-sm leading-6 text-base-400 hover:text-white line-clamp-1">
        {title}
      </Link>
    </li>
  );
}
