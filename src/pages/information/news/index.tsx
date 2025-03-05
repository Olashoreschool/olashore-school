import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";

import NewsCard from "@/components/NewsCard";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";
import { useApp } from "@/store/AppContext";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/information";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const News = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { articles } = useApp();

  return (
    <>
      <NextSeo title="News - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            {
              title: "Information",
              route: "/information/news",
            },
            { title: "News", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <NewsCard {...article} key={index} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
