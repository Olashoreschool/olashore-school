import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/child-protection";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const ChildProtection = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Child Protection - Olashore International School" />

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
            { title: "Child Protection", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div
            dangerouslySetInnerHTML={{
              __html: data.sections[0].text,
            }}
          />
        </section>

        <section className="bg-[#FFF9F3] mb-4 lg:mb-8">
          <div className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center py-8">
              <aside
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_one,
                }}
                className="h-[13rem]"
              />
              <aside
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_two,
                }}
                className="h-[13rem]"
              />
              <aside
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_three,
                }}
                className="h-[13rem]"
              />
              <aside
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_four,
                }}
                className="h-[13rem]"
              />
              <aside
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_five,
                }}
                className="h-[13rem]"
              />
              <aside
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_six,
                }}
                className="h-[13rem]"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChildProtection;
