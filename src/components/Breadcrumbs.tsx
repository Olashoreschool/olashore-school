import Link from "next/link";

type BreadcrumbsProps = {
  links: {
    title: string;
    route: string | null;
  }[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  return (
    <section className="container mx-auto p-4 xl:px-16">
      <div className="flex gap-2 items-center font-bold flex-wrap">
        <span className="flex items-center gap-2">
          <Link href="/" className="text-[var(--primary-color)]">
            Home
          </Link>
          &gt;
        </span>

        {links.map((link, index) => (
          <span key={index} className="flex items-center gap-2">
            {link.route !== null ? (
              <Link
                href={link.route}
                passHref
                className="text-[var(--primary-color)]"
              >
                {link.title}
              </Link>
            ) : (
              <span className="">{link.title}</span>
            )}
            {index !== links.length - 1 && <>&gt;</>}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Breadcrumbs;
