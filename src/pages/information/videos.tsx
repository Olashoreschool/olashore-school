import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/video";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Videos = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const videos = data.sections[0].videos;
  return (
    <>
      <NextSeo title="Video Gallery - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Information", route: "/information/news" },
            { title: "Video Gallery", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8 space-y-10 lg:space-y-20">
          {videos.map((video: string, index: number) => (
            <div className="flex justify-center mt-8" key={index}>
              <iframe
                className="rounded-lg lg:w-[90%]"
                width="100%"
                height="500"
                src={video}
                title="News @olashoreinternationalschoo8652"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Videos;
