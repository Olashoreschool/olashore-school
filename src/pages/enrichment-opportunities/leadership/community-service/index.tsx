import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";

import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/doe";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const CommunityService = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Community Service - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Leadership", route: "/leadership" },
            { title: "Community Service", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside
              dangerouslySetInnerHTML={{ __html: data.sections[0].text_left }}
            />

            <aside
              className="-mt-6"
              dangerouslySetInnerHTML={{ __html: data.sections[0].text_right }}
            />
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="flex justify-center mt-8">
            <iframe
              className="rounded-lg lg:w-[90%]"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/AR2fO4m0AKc"
              title="Y10 Community Service 2017"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommunityService;
