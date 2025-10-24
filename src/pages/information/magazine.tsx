import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";
import Link from "next/link";
import type { InferGetServerSidePropsType } from "next";
import { useMemo } from "react";

// Helper function to extract file ID from Google Drive URL
const getFileIdFromUrl = (url: string): string => {
  const match = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : url;
};

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/magazine";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Magazine = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const magazines = useMemo(
    () => data.sections[0].files || [],
    [data.sections]
  );

  return (
    <>
      <NextSeo title="Magazine - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Information", route: "/information/news" },
            { title: "Magazine", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-2 gap-10 justify-center items-center">
            {magazines.map((fileUrl: string, index: number) => (
              <aside
                key={index}
                className="flex flex-col justify-center lg:items-center"
              >
                <iframe
                  src={`https://drive.google.com/file/d/${getFileIdFromUrl(
                    fileUrl
                  )}/preview`}
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
                    <h5>Magazine {index + 1}</h5>
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
      </div>
    </>
  );
};

export default Magazine;
