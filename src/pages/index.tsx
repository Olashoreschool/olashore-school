import Extracurricular from "@/components/Extracurricular";
import HomeSlider from "@/components/HomeSlider";
import LatestPost from "@/components/LatestPost";
import Offer from "@/components/Offer";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import about from "/public/images/about.png";

import type { InferGetServerSidePropsType } from "next";
import Marquee from "@/components/Marquee";

export const getServerSideProps = async () => {
  const endpoint = process.env.BACKEND_URL + "content/home";
  const res = await fetch(endpoint);
  const data = await res.json();

  const testimonial_endpoint = process.env.BACKEND_URL + "testimonial";
  const testimonial_res = await fetch(testimonial_endpoint);
  const testimonial_data = await testimonial_res.json();
  return { props: { testimonials: testimonial_data.data, data: data.data } };
};

export default function Home({
  data,
  testimonials,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <section className="hero -mt-[5.2rem] mb-4 lg:mb-8">
        <HomeSlider
          heading={data.heading}
          description={data.description}
          images={data.sections[0]}
        />
      </section>

      <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
        <h1 className="font-semibold text-2xl lg:text-3xl text-[var(--dark-blue)] text-center">
          What we offer
        </h1>

        <div className="mt-10">
          <Offer offers={data.sections[1]} />
        </div>
      </section>

      <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
        <div className="grid lg:grid-cols-5 gap-10">
          <aside
            className="text-[#E7A728] text-center"
            dangerouslySetInnerHTML={{ __html: data.sections[2].text_one }}
          />
          <aside
            className="text-[#E7A728] text-center"
            dangerouslySetInnerHTML={{ __html: data.sections[2].text_two }}
          />
          <aside
            className="text-[#E7A728] text-center"
            dangerouslySetInnerHTML={{ __html: data.sections[2].text_three }}
          />
          <aside
            className="text-[#E7A728] text-center"
            dangerouslySetInnerHTML={{ __html: data.sections[2].text_four }}
          />
          <aside
            className="text-[#E7A728] text-center"
            dangerouslySetInnerHTML={{ __html: data.sections[2].text_five }}
          />
        </div>
      </section>

      <section className="bg-[#F9C81B1A] py-10 mb-4 lg:mb-8">
        <div className="   container mx-auto p-4 xl:px-16 grid lg:grid-cols-2 gap-10 items-center">
          <aside className="flex flex-col gap-10">
            <div
              dangerouslySetInnerHTML={{ __html: data.sections[3].text_one }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: data.sections[3].text_two }}
            />
          </aside>
          <aside className="flex justify-end">
            <Image
              src={data.sections[3].image_right}
              alt={data.heading}
              unoptimized
              width={500}
              height={500}
            />
          </aside>
        </div>
      </section>

      {/*  */}
      <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
        <h1 className="font-semibold text-2xl lg:text-3xl text-[var(--dark-blue)] text-center">
          Parents Testimonial
        </h1>

        <div className="mt-10">
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
        <h1 className="font-semibold text-2xl lg:text-3xl text-[var(--dark-blue)] text-center">
          Extracurricular Activities
        </h1>

        <div className="mt-10">
          <Extracurricular />
        </div>
      </section>

      <LatestPost />

      <Marquee />
    </div>
  );
}
