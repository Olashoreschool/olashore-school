import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import { Autoplay } from "swiper/modules";

const HomeSlider = ({
  heading,
  description,
  images,
}: {
  heading: string;
  description: string;
  images: {
    image_one: string;
    image_two: string;
    image_three: string;
  };
}) => {
  const slides = [
    { image: images.image_one },
    { image: images.image_two },
    { image: images.image_three },
  ];
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide">
          <div
            className="slideContent"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay justify-end">
              <div className="container mx-auto p-4 xl:px-16 relative bottom-[4rem]">
                <h1 className="font-bold text-[2rem] lg:text-[3.5rem] uppercase text-white lg:w-[51rem]">
                  {heading}
                </h1>
                <p className="lg:text-[1.2rem] w-[500px]">{description}</p>
                <div className="flex mt-4">
                  <Link
                    href="/admissions/apply"
                    className="p-3 bg-[var(--primary-color)] text-white rounded-md hover:opacity-80"
                  >
                    Apply for admission
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
