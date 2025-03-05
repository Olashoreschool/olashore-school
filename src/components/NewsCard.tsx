import {
  IconArrowNarrowRight,
  IconCalendarEvent,
  IconUser,
} from "@tabler/icons-react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type NewsCardProps = {
  writerName: string;
  title: string;
  date: string;
  image: string;
  content: string;
  _id?: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  writerName,
  title,
  date,
  image,
  content,
  _id,
}) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/information/news/${_id}`)}>
      <div className="bg-[#FFF9F3] overflow-hidden rounded-sm w-[350px] relative">
        <div className="blog-img relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="w-full h-[200px] transition-transform hover:scale-110 object-cover"
            width={200}
            height={200}
          />
        </div>

        <div className="p-4">
          <div className="flex mb-3 gap-4">
            <small className="flex items-center">
              <IconUser color="#01A7E5" size={16} />
              {writerName}
            </small>

            <small className="flex items-cen...">
              <IconCalendarEvent color="#01A7E5" size={16} />
              {date}
            </small>
          </div>
          <h4 className="mb-3 text-2xl font-semibold h-[4rem]">{title}</h4>
          <p
            className="h-[8rem]"
            style={{
              wordWrap: "break-word",
            }}
            dangerouslySetInnerHTML={{
              __html: content.slice(0, 150),
            }}
          />

          <Link
            href={`/information/news/${_id}`}
            className="mt-8 uppercase flex items-center gap-2 text-[#01A7E5]"
          >
            Read More <IconArrowNarrowRight stroke={1} color="#01A7E5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
