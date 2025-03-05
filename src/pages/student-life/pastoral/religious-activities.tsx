import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/religious-activities";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const ReligiousActivities = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Religious Activities - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            {
              title: "School Life",
              route: "/school-life/extracurricular-activities",
            },
            { title: "Religious Activities", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16">
          <div
            dangerouslySetInnerHTML={{
              __html: data.sections[0].text,
            }}
          />
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            <aside className="p-4 rounded-md bg-[#E5EFFF]">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_one,
                }}
                className="text-center"
              />
            </aside>

            <aside className="p-4 rounded-md bg-[#FFE8E5]">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_two,
                }}
                className="text-center"
              />
            </aside>

            <aside className="p-4 rounded-md bg-[#E8F6E8]">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_three,
                }}
                className="text-center"
              />
            </aside>

            <aside className="p-4 rounded-md bg-[#FFEBE5]">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_four,
                }}
                className="text-center"
              />
            </aside>

            <aside className="p-4 rounded-md bg-[#FFDDEE]">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_five,
                }}
                className="text-center"
              />
            </aside>

            <aside className="p-4 rounded-md bg-[#DDFFEE]">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_six,
                }}
                className="text-center"
              />
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReligiousActivities;
