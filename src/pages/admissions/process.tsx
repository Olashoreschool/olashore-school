import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/admission-process";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const AdmissionProcess = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Hero
        backgroundImage={data.homeBanner}
        title={data.heading}
        description={data.description}
      />

      <Breadcrumbs
        links={[
          { title: "Admission", route: "/admissions" },
          { title: "Admission Process", route: null },
        ]}
      />

      <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
        <p
          className="font-bold mb-10 text-lg"
          dangerouslySetInnerHTML={{ __html: data.sections[0].text }}
        />

        <div className="grid lg:grid-cols-2 gap-10">
          <aside className="p-4 bg-[#E5EFFF] rounded-lg">
            <div
              dangerouslySetInnerHTML={{ __html: data.sections[1].text_one }}
            />
          </aside>

          <aside className="p-4 bg-[#E8F6E8] rounded-lg">
            <div
              id="curriculum-text"
              dangerouslySetInnerHTML={{ __html: data.sections[1].text_two }}
            />
          </aside>

          <aside className="p-4 bg-[#E8E5FF] rounded-lg">
            <div
              id="curriculum-text"
              dangerouslySetInnerHTML={{ __html: data.sections[1].text_three }}
            />
          </aside>

          <aside className="p-4 bg-[#FFF5E5] rounded-lg">
            <div
              dangerouslySetInnerHTML={{ __html: data.sections[1].text_four }}
            />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcess;
