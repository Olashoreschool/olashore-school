import Image from "next/image";

import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/founder";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const ObaOladeleOlashore = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Founder - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "About", route: "/about-us/history" },
            { title: "Our Story", route: "/about-us/our-story" },
            { title: "Founder", route: null },
          ]}
        />

        <section className="container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside
              dangerouslySetInnerHTML={{ __html: data.sections[0].text_left }}
            />

            <aside className="flex justify-end">
              <Image
                src={data.sections[0].image_right}
                alt={data.heading}
                unoptimized
                className="rounded-lg"
                width={500}
                height={500}
              />
            </aside>
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <article
            dangerouslySetInnerHTML={{ __html: data.sections[1].text }}
          />
        </section>
      </div>
    </>
  );
};

export default ObaOladeleOlashore;
