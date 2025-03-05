import {
  IconBook,
  IconBuildingCommunity,
  IconCompass,
} from "@tabler/icons-react";

import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";

import { NextSeo } from "next-seo";
import Image from "next/image";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/mission";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Mission = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Mission - Olashore International School" />
      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "About", route: "/about-us/our-story" },
            { title: "Mission Statement and Core Values", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <h2 className="font-bold text-2xl lg:text-3xl uppercase text-center">
            The Mission Statement
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-10">
            <aside>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.sections[0].text_left,
                }}
              />
            </aside>

            <aside className="flex justify-center">
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
          <h1 className="text-center text-2xl lg:text-3xl font-bold uppercase">
            Our Core Values
          </h1>

          <div className="grid md:grid-cols-3 lg:gap-10 mt-10">
            <aside className="flex flex-col gap-4 bg-[#E5EFFF] p-2 py-4 rounded-lg items-center">
              <IconBook size={40} stroke={1.5} color="var(--secondary-color)" />
              <h1 className="text-2xl font-semibold">
                {data.sections[1].value_left_title}
              </h1>

              <p className="text-center">
                {data.sections[1].value_left_content}
              </p>
            </aside>

            <aside className="flex flex-col gap-4 bg-[#FFEEE5] p-2 py-4 rounded-lg items-center">
              <IconBuildingCommunity
                size={40}
                stroke={1.5}
                color="var(--secondary-color)"
              />
              <h1 className="text-2xl font-semibold">
                {data.sections[1].value_middle_title}
              </h1>

              <p className="text-center">
                {data.sections[1].value_middle_content}
              </p>
            </aside>

            <aside className="flex flex-col gap-4 bg-[#FFFBE5] p-2 py-4 rounded-lg items-center">
              <IconCompass
                size={40}
                stroke={1.5}
                color="var(--secondary-color)"
              />
              <h1 className="text-2xl font-semibold">
                {data.sections[1].value_right_title}
              </h1>

              <p className="text-center">
                {data.sections[1].value_right_content}
              </p>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default Mission;
