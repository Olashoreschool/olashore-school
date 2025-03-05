import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/our-story";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const OurStory = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Our Story - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "About", route: "/about-us/our-story" },
            { title: "Our Story", route: null },
          ]}
        />

        <section className="container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div dangerouslySetInnerHTML={{ __html: data.sections[0].text }} />
        </section>
      </div>
    </>
  );
};

export default OurStory;
