import { Article } from "@/store/AppContext";
import { IconArrowLeft } from "@tabler/icons-react";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async (...args: RequestInfo[]): Promise<any> => {
  // @ts-ignore
  const res = await fetch(...args);
  return res.json();
};

const SlugTitle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [article, setArticle] = useState<Article>();

  const id = pathname?.split("news/")[1];

  const { data, error, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_BACKEND_URL + `article/${id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setArticle(data.data);
    }
  }, [data]);

  if (!article) return;

  return (
    <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
      <Link
        href="/information/news"
        className="flex items-center gap-4 hover:text-[var(--secondary-color)]"
      >
        <IconArrowLeft />
        <p>Back to Newsroom</p>
      </Link>

      <div className="mt-16">
        <h1 className="text-5xl font-bold text-[#344854]">{article?.title}</h1>

        <p className="mt-4 text-[#666666]">{article?.date}</p>
        <p className="text-[#344854]">By {article?.writerName}</p>
      </div>

      <div className="grid lg:grid-cols-6 gap-10 mt-10">
        <article className="col-span-4">
          <Image
            className="w-full"
            src={article?.image as string}
            alt={article?.title as string}
            width={600}
            height={400}
          />

          <div className="mt-10">{parse(article?.content as string)}</div>
        </article>
        <aside className="hidden lg:block"></aside>
      </div>
    </section>
  );
};

export default SlugTitle;
