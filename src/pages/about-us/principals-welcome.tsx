import Image from "next/image";
import signature from "/public/images/about/signature.jpeg";

import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/principal-welcome";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const PrincipalsWelcome = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo title="Principal's Welcome - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "About", route: "/about-us/history" },
            { title: "Principal's Welcome", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-6 gap-10">
            <aside className="col-span-4">
              <article>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.sections[0].text_left,
                  }}
                />
                <Image
                  src={signature}
                  alt="vp-signature"
                  width={100}
                  className="mt-10 mb-6"
                />
                <p>
                  <strong>{data.sections[0].name}</strong>
                </p>
                <p>
                  <strong>{data.sections[0].role}</strong>
                </p>
              </article>
            </aside>

            <aside className="col-span-2">
              <Image
                src={data.sections[0].image_right}
                alt={data.sections[0].role}
                width={400}
                height={100}
              />
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrincipalsWelcome;
