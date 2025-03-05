import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";

import { NextSeo } from "next-seo";
import Image from "next/image";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/external-examination";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const ExternalExamination = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="External Examination - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Academics", route: "/academics" },
            { title: "External Examination", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div
            dangerouslySetInnerHTML={{
              __html: data.sections[0].text,
            }}
          />
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside
              dangerouslySetInnerHTML={{
                __html: data.sections[1].text_left,
              }}
            />
            <aside>
              <Image
                src={data.sections[1].image_right}
                alt={data.heading}
                width={600}
                height={600}
                className="rounded-lg"
              />
            </aside>
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside>
              <Image
                src={data.sections[2].image_left}
                alt={data.heading}
                width={600}
                height={600}
                className="rounded-lg"
              />
            </aside>

            <aside
              dangerouslySetInnerHTML={{
                __html: data.sections[2].text_right,
              }}
            />
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside
              dangerouslySetInnerHTML={{
                __html: data.sections[3].text_left,
              }}
            />
            <aside>
              <Image
                src={data.sections[3].image_right}
                alt={data.heading}
                width={600}
                height={600}
                className="rounded-lg"
              />
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExternalExamination;
