import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";

import Image from "next/image";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/football-academy";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const FootballAcademy = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Football Academy - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            {
              title: "Enrichment opportunities",
              route: "/enrichment-opportunities/leadership/community-service",
            },
            { title: "Football Academy", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside
              dangerouslySetInnerHTML={{ __html: data.sections[0].text_left }}
            />

            <aside>
              <Image
                src={data.sections[0].image_right}
                alt={data.heading}
                unoptimized
                className="rounded-lg"
                width={600}
                height={600}
              />
            </aside>
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-4 gap-10 mt-10">
            <aside
              className="p-4 rounded-md bg-[#E5EFFF] text-center"
              dangerouslySetInnerHTML={{ __html: data.sections[1].text_one }}
            />
            <aside
              className="p-4 rounded-md bg-[#FFE8E5] text-center"
              dangerouslySetInnerHTML={{ __html: data.sections[1].text_two }}
            />
            <aside
              className="p-4 rounded-md bg-[#E8F6E8] text-center"
              dangerouslySetInnerHTML={{ __html: data.sections[1].text_three }}
            />
            <aside
              className="p-4 rounded-md bg-[#FFDDEE] text-center"
              dangerouslySetInnerHTML={{ __html: data.sections[1].text_four }}
            />
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside>
              <Image
                src={data.sections[2].image_left}
                alt={data.heading}
                unoptimized
                className="rounded-lg"
                width={600}
                height={600}
              />
            </aside>

            <aside
              id="curriculum-text"
              dangerouslySetInnerHTML={{ __html: data.sections[2].text_right }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default FootballAcademy;
