import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import postBlog from "/public/images/post-bg.png";
import { useState, useEffect } from "react";
import { useApp } from "@/store/AppContext";

const LatestPost = () => {
  const { articles } = useApp();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return;

  return (
    <section className="py-4 lg:py-8 mb-4 lg:mb-8">
      <div
        style={{
          backgroundImage: `url(${postBlog.src})`,
          backgroundSize: "cover",
        }}
        className="py-10 text-white"
      >
        <div className="   container mx-auto p-4 xl:px-16 items-center">
          <div className="lg:w-[600px] mx-auto">
            <h1 className="font-semibold text-2xl lg:text-3xl text-center">
              Latest Post
            </h1>
            <p className="mt-4 text-center">
              Stay up-to-date with the latest news and events at our school
            </p>
          </div>

          <div className="mt-12">
            <div className="grid lg:grid-cols-2 gap-10 max-w-[1000px] mx-auto">
              <aside className="hidden lg:block">
                <PostItem {...articles[0]} type="left" />
                <button
                  className="p-4 bg-[#E7A728] rounded-lg mt-6 hover:opacity-80"
                  onClick={() => router.push("/information/news")}
                >
                  Read More
                </button>
              </aside>
              <aside className="flex flex-col gap-6">
                {articles.slice(1, 5).map((post, index) => (
                  <PostItem {...post} key={index} type="right" />
                ))}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PostItem = ({
  title,
  date,
  type,
  image,
  _id,
}: {
  type: "left" | "right";
  title: string;
  date: string;
  image: string;
  content: string;
  _id?: string;
}) => {
  return (
    <div>
      <Link
        href={`/information/news/${_id}`}
        className={`flex ${
          type === "left" ? "flex-col items-start" : "flex-row items-center"
        }  gap-4`}
      >
        <Image
          src={image}
          alt="blog"
          className={`${type === "left" ? "w-[500px]" : "w-[150px]"}`}
          unoptimized
          width={500}
          height={150}
        />
        <div className={`${type === "left" ? "text-lg" : "text-sm"}`}>
          <h3 className="font-bold">{title}</h3>
          <p
            className={`mt-4 font-light ${
              type === "left" ? "text-sm" : "text-xs"
            }`}
          >
            {date}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LatestPost;
