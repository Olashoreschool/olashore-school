import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import Image from "next/image";

import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/senior";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Senior = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Senior Secondary School - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Academics", route: "/academics" },
            { title: "Schools", route: "/academics/schools/junior" },
            { title: "Senior Secondary Schools", route: null },
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
              id="curriculum-text"
            />
            <aside>
              <Image
                src={data.sections[1].image_right}
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
          <div
            dangerouslySetInnerHTML={{
              __html: data.sections[2].text,
            }}
            id="curriculum-text"
          />
        </section>

        <div className="bg-[#FFF9F3] py-8 mb-8 lg:mb-16">
          <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
            <h1 className="font-semibold text-[1.5rem] lg:text-[2rem] text-center mb-10">
              Gallery
            </h1>
            <div className="grid lg:grid-cols-4 gap-10">
              <aside className="col-span-2">
                <Image
                  src={data.sections[3].img_one}
                  alt={data.heading}
                  width={400}
                  height={400}
                  className="lg:h-[400px] lg:w-[700px] object-cover"
                />
              </aside>
              <aside className="col-span-2">
                <Image
                  src={data.sections[3].img_two}
                  alt={data.heading}
                  width={400}
                  height={400}
                  className="lg:h-[400px] lg:w-[700px] object-cover"
                />
              </aside>
              <aside className="col-span-2">
                <Image
                  src={data.sections[3].img_three}
                  alt={data.heading}
                  width={400}
                  height={400}
                  className="lg:h-[400px] lg:w-[700px] object-cover"
                />
              </aside>
              <aside className="col-span-2">
                <Image
                  src={data.sections[3].img_four}
                  alt={data.heading}
                  width={400}
                  height={400}
                  className="lg:h-[400px] lg:w-[700px] object-cover"
                />
              </aside>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Senior;
