import Image from "next/image";
import icon1 from "/public/images/icon-1.png";
import icon2 from "/public/images/icon-2.png";
import icon3 from "/public/images/icon-3.png";

const Offer = ({ offers }: { offers: any }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-10">
        <aside className="bg-[#F2F7F9] p-8 rounded-lg pt-12 flex flex-col gap-3">
          <div
            style={{
              background: "#2455A833",
            }}
            className="p-4 rounded-full w-fit"
          >
            <Image src={icon1} alt={"one"} width={30} />
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: offers.text_one }}
            className="offers mt-2"
          />
        </aside>

        <aside className="bg-[#F2F7F9] p-8 rounded-lg pt-12 flex flex-col gap-3">
          <div
            style={{
              background: "#7E067833",
            }}
            className="p-4 rounded-full w-fit"
          >
            <Image src={icon2} alt={"one"} width={30} />
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: offers.text_two }}
            className="offers mt-2"
          />
        </aside>

        <aside className="bg-[#F2F7F9] p-8 rounded-lg pt-12 flex flex-col gap-3">
          <div
            style={{
              background: "#43870B33",
            }}
            className="p-4 rounded-full w-fit"
          >
            <Image src={icon3} alt={"three"} width={30} />
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: offers.text_three }}
            className="offers mt-2"
          />
        </aside>
      </div>
    </div>
  );
};

export default Offer;
