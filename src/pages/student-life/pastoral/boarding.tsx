import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";

import { NextSeo } from "next-seo";
import Image from "next/image";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/boarding";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Boarding = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Boarding - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Student-life", route: "/student-life/pastoral/boarding" },
            { title: "Pastoral", route: "/student-life/pastoral/boarding" },
            { title: "Boarding", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside
              dangerouslySetInnerHTML={{
                __html: data.sections[0].text_left,
              }}
            />
            <aside>
              <Image
                src={data.sections[0].image_right}
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
                src={data.sections[1].image_left}
                alt={data.heading}
                width={600}
                height={600}
                className="rounded-lg"
              />
            </aside>
            <aside
              dangerouslySetInnerHTML={{
                __html: data.sections[1].text_right,
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Boarding;
