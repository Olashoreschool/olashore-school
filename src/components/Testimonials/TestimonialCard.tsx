import { useEffect, useState } from "react";

type TestimonialCardProps = {
  parent_name: string;
  content: string;
  index: number;
};

const colors = ["#FAEA73", "#CCEFF6", "#E6FFD7", "#F7CEDC"];

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  parent_name,
  content,
  index,
}) => {
  const [backgroundColor, setBackgroundColor] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const colorIndex = index % colors.length;
      const selectedColor = colors[colorIndex];
      setBackgroundColor(selectedColor);
    }
  }, [index]);

  return (
    <article
      className={`flex flex-col lg:flex-row items-center gap-10 p-6 rounded-lg`}
      style={{ backgroundColor }}
    >
      <div className="text-center lg:text-start">
        <div className="h-[15rem]">
          <q className="text-[#080A47] text-lg">{content}</q>
        </div>
        <div className="border-b border-white my-4"></div>

        <div className="flex justify-center">
          <div className="flex items-center gap-6">
            <h3 className="font-semibold text-[#100012] text-lg">
              {parent_name}
            </h3>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
