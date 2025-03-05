import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import React, { SetStateAction } from "react";

const FlyerModal = ({
  banner,
  setShowFlyerModal,
}: {
  banner: any;
  setShowFlyerModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="absolute w-full h-full top-0 overlay">
      <div className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8 lg:w-[500px] relative top-[12%]">
        <div className="flex justify-end">
          <button
            className="bg-white p-2 w-fit absolute"
            onClick={() => setShowFlyerModal(false)}
          >
            <IconX color="red" className="" />
          </button>
        </div>
        <div className="flyer">
          <Image src={banner?.image} alt="banner" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default FlyerModal;
