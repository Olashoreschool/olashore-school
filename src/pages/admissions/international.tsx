import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/international-admission";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const InternationalAdmission = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="International Admission - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Admission", route: "/admissions" },
            { title: "International Admission", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 lg:gap-10 items-center">
            <aside
              dangerouslySetInnerHTML={{ __html: data.sections[0].text_left }}
            />

            <aside>
              <iframe
                className="rounded-lg"
                src="https://player.vimeo.com/video/183975749?h=ba06f98d92"
                width="100%"
                height="300"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default InternationalAdmission;
