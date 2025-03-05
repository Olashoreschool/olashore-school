import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";
import Image from "next/image";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/placement-assessment";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const PlacementAssessments = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Placement Assessments - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Admission", route: "/admissions" },
            { title: "Placement Assessments", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16">
          <div dangerouslySetInnerHTML={{ __html: data.sections[0].text }} />
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside>
              <Image
                src={data.sections[1].image_left}
                alt={data.heading}
                unoptimized
                className="rounded-lg"
                width={600}
                height={600}
              />
            </aside>

            <aside
              dangerouslySetInnerHTML={{
                __html: data.sections[1].text_right,
              }}
            />
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <h1 className="text-center font-bold text-2xl lg:text-3xl">
            Purpose of the Assessment
          </h1>
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            <aside
              className="flex flex-col bg-[#E5FFE8] p-2 py-4 rounded-lg text-center"
              dangerouslySetInnerHTML={{
                __html: data.sections[2].text_one,
              }}
            />

            <aside
              className="flex flex-col bg-[#FFF5E5] p-2 py-4 rounded-lg text-center"
              dangerouslySetInnerHTML={{
                __html: data.sections[2].text_two,
              }}
            />

            <aside
              className="flex flex-col bg-[#FFE5E5] p-2 py-4 rounded-lg text-center"
              dangerouslySetInnerHTML={{
                __html: data.sections[2].text_three,
              }}
            />
          </div>
        </section>

        <section className="bg-[#FFF9F3] mb-4 lg:mb-8">
          <div className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
            <div className="grid lg:grid-cols-2 gap-10 py-8">
              <aside
                dangerouslySetInnerHTML={{
                  __html: data.sections[3].text_left,
                }}
              />

              <aside
                dangerouslySetInnerHTML={{
                  __html: data.sections[3].text_right,
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlacementAssessments;
