import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";
import Image from "next/image";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/accreditation";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Accreditation = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const sections = data.sections ?? [];
  return (
    <>
      <NextSeo title="Accreditation and Partners - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "About", route: "/about-us/our-story" },
            { title: "Accreditation and Partners", route: null },
          ]}
        />

        {sections.map((section: any, index: number) => (
          <section
            className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8"
            key={index}
          >
            <h1 className="text-xl lg:text-3xl font-bold underline underline-offset-2">
              {section.heading}
            </h1>

            <div className="grid grid-cols-4 gap-10 mt-10 place-items-center">
              {section.images.map((image: string, index: number) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt="olashore"
                    unoptimized
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Accreditation;
