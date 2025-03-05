import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/curriculum";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Curriculum = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Curriculum - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />
        <Breadcrumbs
          links={[
            { title: "Academics", route: "/academics" },
            { title: "Curriculum", route: null },
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
              <aside>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.sections[1].text_left,
                  }}
                />
              </aside>

              <aside>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.sections[1].text_right,
                  }}
                  id="curriculum-text"
                />
              </aside>
            </div>
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-[1.5rem] lg:text-[2rem] font-semibold">
              Our curriculum outcomes
            </h1>
            <p>Olashore International School’s curriculum:</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-10">
            <aside className="p-6 bg-[#E5EFFF] rounded-lg">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.sections[2].text_left,
                }}
                id="curriculum-text"
              />
            </aside>

            <aside className="p-6 bg-[#FFFBE5] rounded-lg">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.sections[2].text_right,
                }}
                id="curriculum-text"
              />
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default Curriculum;
