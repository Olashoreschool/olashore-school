import { StaticImageData } from "next/image";
import defaultImage from "/public/images/DJI_0109-min.jpg";

type HeroProps = {
  title: string;
  description: string;
  backgroundImage?: string | StaticImageData;
};

const Hero: React.FC<HeroProps> = ({ title, description, backgroundImage }) => {
  return (
    <section
      className="hero -mt-20 h-[calc(100vh_-_80px)]"
      style={{
        backgroundImage: `url(${backgroundImage || defaultImage.src})`,
      }}
    >
      <div className="hero-overlay justify-end">
        <div className="   container mx-auto p-4 xl:px-16 mb-[10rem]">
          <h1 className="font-bold text-[2rem] lg:text-[3rem] uppercase text-white">
            {title}
          </h1>
          <p className="lg:text-[1.2rem] lg:w-[800px]">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
