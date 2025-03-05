import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/medical-care";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const MedicalFacilities = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Medical Facilities - Olashore International School" />

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
            { title: "Medical Facilities", route: null },
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
                  __html: data.sections[1].text_left,
                }}
                className="mt-2"
              />

              <aside
                dangerouslySetInnerHTML={{
                  __html: data.sections[1].text_right,
                }}
                id="curriculum-text"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MedicalFacilities;
