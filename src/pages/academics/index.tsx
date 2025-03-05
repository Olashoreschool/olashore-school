import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { IconBulb } from "@tabler/icons-react";
import { NextSeo } from "next-seo";
import Image from "next/image";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/academics-overview";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Academics = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Academics Overview - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data?.homeBanner}
          title={data?.heading}
          description={data?.description}
        />

        <Breadcrumbs
          links={[
            { title: "Academics", route: "/academics" },
            { title: "Academic Overview", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.sections[0].text_left,
                }}
              />
            </aside>

            <aside>
              <Image
                src={data?.sections[0].image_right}
                alt={data?.heading}
                unoptimized
                className="rounded-lg"
                width={600}
                height={600}
              />
            </aside>
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="text-center p-4 rounded-lg flex flex-col justify-center items-center gap-4 bg-[#F2F7F9]">
            <IconBulb stroke={1.5} size={50} />
            <div
              dangerouslySetInnerHTML={{
                __html: data?.sections[1].text,
              }}
            />
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.sections[2].text,
            }}
          />
        </section>
      </div>
    </>
  );
};

export default Academics;
