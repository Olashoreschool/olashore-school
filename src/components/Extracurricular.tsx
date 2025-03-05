import Link from "next/link";
import music from "/public/images/school-life/music-2.jpeg";
import ps from "/public/images/school-life/ps-3.jpeg";
import sport from "/public/images/school-life/sp-1.jpeg";

const activities = [
  {
    img: ps,
    title: "Public Speaking",
    route: "/student-life/extracurricular-activities/public-speaking",
  },
  {
    img: sport,
    title: "Sports",
    route: "/student-life/extracurricular-activities/sports",
  },
  {
    img: music,
    title: "Music",
    route: "/student-life/extracurricular-activities/music",
  },
];

const Extracurricular = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-10">
        {activities.map((activity, index) => (
          <aside
            key={index}
            className="hero !h-[21rem] object-cover cursor-pointer transition-transform hover:scale-110"
            style={{
              backgroundImage: `url(${activity.img.src})`,
            }}
          >
            <Link href={activity.route}>
              <div className="hero-overlay justify-end pb-8 text-center">
                <h2 className="text-xl font-bold">
                  {activity.title.toUpperCase()}
                </h2>
              </div>
            </Link>
          </aside>
        ))}
      </div>
    </div>
  );
};

export default Extracurricular;
