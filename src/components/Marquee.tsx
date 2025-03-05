import Image from "next/image";
import React, { useEffect, useState } from "react";

const Marquee = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const endpoint =
        process.env.NEXT_PUBLIC_BACKEND_URL + "content/accreditation";
      const res = await fetch(endpoint);
      const data = await res.json();

      const sections = data.data.sections;
      const allImages = sections.map((section: any) => section.images);

      const flattenedImages = [].concat(...allImages) as string[];

      setImages(flattenedImages);
    }

    fetchData();
  }, []);

  return (
    <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
      <h1 className="font-bold text-center mb-8">Our Partners</h1>
      <div className="marquee-container">
        <div className="marquee-content">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="olashore"
              unoptimized
              width={100}
              height={100}
              className="object-contain"
            />
          ))}
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="olashore"
              unoptimized
              width={100}
              height={100}
              className="object-contain"
            />
          ))}
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="olashore"
              unoptimized
              width={100}
              height={100}
              className="object-contain"
            />
          ))}
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="olashore"
              unoptimized
              width={100}
              height={100}
              className="object-contain"
            />
          ))}
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="olashore"
              unoptimized
              width={100}
              height={100}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
