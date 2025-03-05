import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useState } from "react";

import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/photo";
  const res = await fetch(endpoint);
  const data = await res.json();
  return { props: { data: data.data } };
};

const Photos = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const images = data.sections[0].images;

  const [visibleImages, setVisibleImages] = useState(3);
  const totalImages = images.length;

  const loadMoreImages = () => {
    setVisibleImages((prevVisible) => prevVisible + 3);
  };
  return (
    <>
      <NextSeo title="Photo Gallery - Olashore International School" />

      <div>
        <Hero
          backgroundImage={data.homeBanner}
          title={data.heading}
          description={data.description}
        />

        <Breadcrumbs
          links={[
            { title: "Information", route: "/information/news" },
            { title: "Photo Gallery", route: null },
          ]}
        />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {images.slice(0, visibleImages).map((image: any, index: number) => (
              <aside key={index}>
                <Image
                  src={image}
                  alt={`image-${index + 1}`}
                  className="lg:h-[300px] object-none"
                  width={500}
                  height={300}
                />
              </aside>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {visibleImages < totalImages && (
              <button
                className="p-4 bg-[#E7A728] rounded-lg mt-6 hover:opacity-80"
                onClick={loadMoreImages}
              >
                Load More
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Photos;
