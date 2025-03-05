import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import getFileNameFromGoogleDriveLink from "@/utils/getFileNameFromGoogleDriveLink";
import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/alumni";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Alumni = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const images = data.sections[1].images || [];
  const files = useMemo(() => data.sections[0].files || [], [data.sections]);
  const [fileNames, setFileNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchFileNames = async () => {
      const names = await Promise.all(
        files.map((fileUrl: string) => getFileNameFromGoogleDriveLink(fileUrl))
      );
      setFileNames(names);
    };

    fetchFileNames();
  }, [files]);

  return (
    <>
      <NextSeo title="Alumni - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Information", route: "/information/news" },
            { title: "Alumni Stories", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 justify-center items-center">
            {files.map((fileUrl: string, index: number) => (
              <aside
                key={index}
                className="flex flex-col justify-center lg:items-center"
              >
                <iframe
                  src={`${fileUrl}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
                  height="250"
                  className="w-[480px] md:w-[350px] xl:w-[550px] rounded-t-xl overflow-hidden pointer-events-none"
                  style={{
                    border: "none",
                    margin: "0",
                    padding: "0",
                    overflow: "hidden",
                  }}
                />

                <div className="flex items-center justify-between p-6 border shadow w-[480px] md:w-[350px] xl:w-[550px] rounded-b-xl">
                  <div className="space-y-6">
                    <h5> {fileNames[index]}</h5>
                    <Link
                      href={`${fileUrl}`}
                      className="text-sm text-grey underline"
                      target="_blank"
                    >
                      Read
                    </Link>
                  </div>

                  <Link
                    href={fileUrl}
                    download
                    className="text-[var(--primary-color)]"
                    target="_blank"
                  >
                    Download
                  </Link>
                </div>
              </aside>
            ))}
          </div>
        </section>

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <h1 className="font-semibold text-[1.5rem] lg:text-[2rem] text-center mb-10">
            Prominent Alumni
          </h1>
          <div className="grid lg:grid-cols-2 gap-10 items-center justify-center">
            {images.map((image: string, index: number) => (
              <aside key={index}>
                <Image
                  src={image}
                  alt={data.heading}
                  className="lg:h-[400px] object-cover"
                  width={600}
                  height={400}
                />
              </aside>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Alumni;
