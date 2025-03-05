import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import dynamic from "next/dynamic";

import "swiper/css";
import "swiper/css/navigation";

const TestimonialCard = dynamic(() => import("./TestimonialCard"), {
  ssr: false,
});

const Testimonials = ({
  testimonials: testimonies,
}: {
  testimonials: any[];
}) => {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={20}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled",
      }}
      modules={[Autoplay, Navigation]}
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      <div>
        {testimonies.map((testimony, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimony} index={index} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Testimonials;
