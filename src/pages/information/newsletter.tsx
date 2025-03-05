import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import getFileNameFromGoogleDriveLink from "@/utils/getFileNameFromGoogleDriveLink";
import type { InferGetServerSidePropsType } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/newsletter";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Newsletter = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const sections = useMemo(() => data.sections || [], [data.sections]);
  const [fileNames, setFileNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchFileNames = async () => {
      const names = await Promise.all(
        sections.flatMap((section: any) =>
          section.files.map((fileUrl: string) =>
            getFileNameFromGoogleDriveLink(fileUrl)
          )
        )
      );
      setFileNames(names);
    };

    fetchFileNames();
  }, [sections]);

  return (
    <>
      <NextSeo title="Newsletter - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Information", route: "/information/news" },
            { title: "Newsletter", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {sections.map((section: any, index: number) => (
              <div
                key={index}
                className="p-4 lg:p-6"
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <h2 className="font-bold text-3xl">{section.title}</h2>
                <div className="border-b pt-2"></div>

                <ul className="mt-4 space-y-4 list-[square] ml-4 lg:ml-8">
                  {section.files.map((fileUrl: string, idx: number) => (
                    <li
                      key={idx}
                      className="hover:text-[var(--secondary-color)]"
                    >
                      <Link href={fileUrl} target="_blank">
                        {fileNames[idx]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Newsletter;
