import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/school-fees";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const SchoolFees = ({
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
          { title: "School Fees", route: null },
        ]}
      />

      <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <aside
            className="p-4 bg-[#E5EFFF] rounded-lg"
            dangerouslySetInnerHTML={{ __html: data.sections[0].text_one }}
          />

          <aside
            className="p-4 bg-[#E8F6E8] rounded-lg"
            dangerouslySetInnerHTML={{ __html: data.sections[0].text_two }}
          />

          <aside
            className="p-4 bg-[#E8E5FF] rounded-lg"
            dangerouslySetInnerHTML={{ __html: data.sections[0].text_three }}
          />

          <aside
            className="p-4 bg-[#FFF5E5] rounded-lg"
            dangerouslySetInnerHTML={{ __html: data.sections[0].text_four }}
          />
        </div>

        <div className="flex justify-center mt-12">
          <button
            type="submit"
            className="px-6 flex items-center gap-2 bg-[var(--yellow-color)] p-3 rounded-lg hover:opacity-80"
          >
            LATEST SCHOOL FEES SCHEDULE
          </button>
        </div>
      </section>
    </div>
  );
};

export default SchoolFees;
