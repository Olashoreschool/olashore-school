import Reveal from "@/components/Reveal";
import Image from "next/image";

import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

const colors = [
  "#E5EFFF",
  "#FFEBE5",
  "#F5E8FF",
  "#E8F6E8",
  "#FFE8E5",
  "#E8E5FF",
];

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/trustees";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Trustees = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const trustees = data.sections[1].trustees;

  return (
    <>
      <NextSeo title="Trustees - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "About", route: "/about-us/history" },
            { title: "Governance", route: "/about-us/governance/trustees" },
            { title: "Trustees", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16">
          <div dangerouslySetInnerHTML={{ __html: data.sections[0].text }} />
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-1 gap-10 mt-6">
            {trustees.map(
              (
                {
                  name,
                  role,
                  img,
                }: { name: string; role: string; img: string },
                index: number
              ) => (
                <Reveal key={index}>
                  <aside
                    className="grid lg:grid-cols-4 items-center"
                    style={{
                      background:
                        colors[Math.floor(Math.random() * colors.length)],
                    }}
                  >
                    <div className="lg:col-span-3 p-8 order-last lg:-order-1">
                      <p className="font-semibold text-2xl lg:text-3xl">
                        {name}
                      </p>
                      <p className="lg:text-xl mt-2">{role}</p>
                    </div>

                    <Image
                      src={img}
                      alt={name}
                      className="h-[300px] object-cover object-top w-full"
                      width={300}
                      height={300}
                    />
                  </aside>
                </Reveal>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Trustees;
