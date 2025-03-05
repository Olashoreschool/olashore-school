import Link from "next/link";

const brochure = {
  title: "School Brochure",
  file: "/documents/school-brochure.pdf",
};

const Enroll = () => {
  return (
    <section className="mb-4 lg:mb-8">
      <div className="bg-[var(--yellow-color)] py-14">
        <div className="   container mx-auto p-4 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <aside>
              <h1 className="font-bold text-3xl">Enroll your Child Today!</h1>
            </aside>

            <aside className="grid grid-cols-2 gap-4">
              <Link
                href="/admissions/apply"
                className="border-2 text-center border-[var(--black-color)] p-2"
              >
                APPLY FOR ADMISSION
              </Link>
              <Link
                href="/student-life/pastoral/arrange-a-visit"
                className="border-2 text-center border-[var(--black-color)] p-2"
              >
                SCHEDULE A VISIT
              </Link>
              <Link
                className="border-2 text-center border-[var(--black-color)] p-2"
                href={`${brochure.file}`}
                target="_blank"
              >
                DOWNLOAD BROCHURE
              </Link>
              <Link
                href="/admissions/request-a-prospectus"
                className="border-2 text-center border-[var(--black-color)] p-2"
              >
                REQUEST A PROSPECTUS
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
