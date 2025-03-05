import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/academic-excellence";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const AcademicsExcellence = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Academics Excellence - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Academics", route: "/academics" },
            { title: "Academic Excellence", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <h1 className="text-center font-bold text-2xl lg:text-3xl">
            {data.sections[0].heading}
          </h1>
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            <aside className="flex flex-col gap-4 bg-[#E5EFFF] p-2 py-4 rounded-lg items-center">
              <h1 className="text-lg lg:text-2xl font-semibold">
                {data.sections[0].left_year}
              </h1>
              <p className="text-center">
                {data.sections[0].left_year_content}
              </p>
            </aside>
            <aside className="flex flex-col  gap-4 bg-[#FFE5EF] p-2 py-4 rounded-lg items-center">
              <h1 className="text-lg lg:text-2xl font-semibold">
                {data.sections[0].middle_year}
              </h1>
              <p className="text-center">
                {data.sections[0].middle_year_content}
              </p>
            </aside>
            <aside className="flex flex-col gap-4 bg-[#E5FFE8] p-2 py-4 rounded-lg items-center">
              <h1 className="text-lg lg:text-2xl font-semibold">
                {data.sections[0].right_year}
              </h1>
              <p className="text-center">
                {data.sections[0].right_year_content}
              </p>
            </aside>
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <h1 className="text-center font-bold text-2xl lg:text-3xl">
            {data.sections[1].heading}
          </h1>

          <div className="mt-10 bg-[whitesmoke] p-4 lg:p-8">
            <p>{data.sections[1].text}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AcademicsExcellence;
