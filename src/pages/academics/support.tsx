import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/learning-support";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const LearningSupports = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Learning Supports - Olashore International School" />

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
          <div
            dangerouslySetInnerHTML={{
              __html: data.sections[0].text,
            }}
            id="curriculum-text"
          />
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <h1 className="text-center font-bold text-2xl lg:text-3xl">
            Academic Support Programs
          </h1>
          <div className="grid lg:grid-cols-3 gap-10 mt-5 lg:mt-10">
            <aside className="flex flex-col gap-4 bg-[#E5EFFF] p-2 py-4 rounded-lg items-center">
              <h1 className="text-xl font-semibold">
                {data.sections[1].left_academic_title}
              </h1>
              <p className="text-center">
                {data.sections[1].left_academic_content}
              </p>
            </aside>
            <aside className="flex flex-col  gap-4 bg-[#FFE5EF] p-2 py-4 rounded-lg items-center">
              <h1 className="text-xl font-semibold">
                {data.sections[1].middle_academic_title}
              </h1>
              <p className="text-center">
                {data.sections[1].middle_academic_content}
              </p>
            </aside>
            <aside className="flex flex-col gap-4 bg-[#E5F7FF] p-2 py-4 rounded-lg items-center">
              <h1 className="text-xl font-semibold">
                {data.sections[1].right_academic_title}
              </h1>
              <p className="text-center">
                {data.sections[1].right_academic_content}
              </p>
            </aside>
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <h1 className="text-center font-bold text-2xl lg:text-3xl">
            Counseling and Well-being
          </h1>
          <div className="grid lg:grid-cols-3 gap-10 mt-5 lg:mt-10">
            <aside className="flex flex-col gap-4 bg-[#E5FFE8] p-2 py-4 rounded-lg items-center">
              <h1 className="text-xl font-semibold">
                {data.sections[2].left_counseling_title}
              </h1>
              <p className="text-center">
                {data.sections[2].left_counseling_content}
              </p>
            </aside>
            <aside className="flex flex-col  gap-4 bg-[#FFF5E5] p-2 py-4 rounded-lg items-center">
              <h1 className="text-xl font-semibold">
                {data.sections[2].middle_counseling_title}
              </h1>
              <p className="text-center">
                {data.sections[2].middle_counseling_content}
              </p>
            </aside>
            <aside className="flex flex-col gap-4 bg-[#FFE5E5] p-2 py-4 rounded-lg items-center">
              <h1 className="text-xl font-semibold">
                {data.sections[2].right_counseling_title}
              </h1>
              <p className="text-center">
                {data.sections[2].right_counseling_content}
              </p>
            </aside>
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <h1 className="text-center font-bold text-2xl lg:text-3xl">
            Special Education Support
          </h1>
          <div className="grid lg:grid-cols-3 gap-10 mt-5 lg:mt-10">
            <aside className="flex flex-col gap-4 bg-[#F5E8FF] p-2 py-4 rounded-lg items-center">
              <h1 className="text-xl font-semibold">
                {data.sections[3].left_special_title}
              </h1>
              <p className="text-center">
                {data.sections[3].left_special_content}
              </p>
            </aside>
            <aside className="flex flex-col  gap-4 bg-[#E8F6E8] p-2 py-4 rounded-lg items-center">
              <h1 className="text-xl font-semibold">
                {data.sections[3].middle_special_title}
              </h1>
              <p className="text-center">
                {data.sections[3].middle_special_content}
              </p>
            </aside>
            <aside className="flex flex-col gap-4 bg-[#E8E5FF] p-2 py-4 rounded-lg items-center">
              <h1 className="text-xl font-semibold">
                {data.sections[3].right_special_title}
              </h1>
              <p className="text-center">
                {data.sections[3].right_special_content}
              </p>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default LearningSupports;
