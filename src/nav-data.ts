const nav_links = [
  // {
  //   label: "Home",
  //   route: "/",
  // },
  //  ABOUT
  {
    label: "About",
    links: [
      {
        label: "Our Story",
        sub_links: [
          { label: "Our Story", route: "/about-us/our-story" },
          {
            label: "Founder",
            route: "/about-us/our-story/oba-oladele-olashore",
          },
        ],
      },
      { label: "Philosophy", route: "/about-us/philosophy" },
      {
        label: "Mission Statement and Core Values",
        route: "/about-us/mission",
      },
      {
        label: "Governance",
        sub_links: [
          { label: "Trustees", route: "/about-us/governance/trustees" },
          {
            label: "Board of Governors",
            route: "/about-us/governance/board-of-governors",
          },
        ],
      },
      { label: "Principal’s Welcome", route: "/about-us/principals-welcome" },
      {
        label: "Accreditation and Partners",
        route: "/about-us/accreditation",
      },
    ],
  },

  // ACADEMICS
  {
    label: "Academics",
    links: [
      { label: "Academics Overview", route: "/academics" },
      {
        label: "Curriculum",
        route: "/academics/curriculum",
      },
      {
        label: "Junior Secondary",
        route: "/academics/junior-secondary",
      },
      {
        label: "Senior Secondary",
        route: "/academics/senior-secondary",
      },
      {
        label: "Learning Supports",
        route: "/academics/support",
      },
      {
        label: "External Examinations",
        route: "/academics/external-examinations",
      },
      {
        label: "Academics Excellence",
        route: "/academics/excellence",
      },
    ],
  },

  // STUDENT LIFE
  {
    label: "Student Life",
    links: [
      {
        label: "Pastoral",
        sub_links: [
          { label: "Boarding", route: "/student-life/pastoral/boarding" },
          {
            label: "Wellbeing & Medical Care",
            route: "/student-life/pastoral/well-being",
          },
          {
            label: "Child Protection Policy",
            route: "/student-life/pastoral/child-protection",
          },
          {
            label: " Student Leadership Opportunities",
            route: "/student-life/pastoral/student-leadership",
          },
          {
            label: "Learning Beyond the Classroom",
            route: "/student-life/pastoral/learning-beyond-the-classroom",
          },
          {
            label: "Religious Activities",
            route: "/student-life/pastoral/religious-activities",
          },
          {
            label: "Visiting Days",
            route: "/student-life/pastoral/arrange-a-visit",
          },
        ],
      },
      {
        label: "Extracurricular Activities",
        sub_links: [
          {
            label: "Arts",
            route: "/student-life/extracurricular-activities/arts",
          },
          {
            label: "Dance",
            route: "/student-life/extracurricular-activities/dance",
          },
          {
            label: "Drama",
            route: "/student-life/extracurricular-activities/drama",
          },
          {
            label: "Music",
            route: "/student-life/extracurricular-activities/music",
          },
          {
            label: "Public Speaking",
            route: "/student-life/extracurricular-activities/public-speaking",
          },
          {
            label: "Sports",
            route: "/student-life/extracurricular-activities/sports",
          },
        ],
      },
    ],
  },

  // ADMISSIONS
  {
    label: "Admissions",
    links: [
      { label: "Admissions Overview", route: "/admissions" },
      { label: "Admissions Process", route: "/admissions/process" },
      { label: "Apply now", route: "/admissions/apply" },
      {
        label: "Placement Assessments",
        route: "/admissions/placement-assessments",
      },
      { label: "International Admission", route: "/admissions/international" },
      {
        label: "Request a prospectus",
        route: "/admissions/request-a-prospectus",
      },
      { label: "Book a campus tour", route: "/admissions/book-a-campus-tour" },
      { label: "School Fees", route: "/admissions/school-fees" },
    ],
  },

  // ENRICHMENT OPPORTUNITIES
  {
    label: "Enrichment",
    links: [
      {
        label: "Leadership",
        sub_links: [
          {
            label: "DoE",
            route: "/enrichment-opportunities/leadership/community-service",
          },
        ],
      },
      {
        label: "Football Academy",
        route: "/enrichment-opportunities/football-academy",
      },
      {
        label: "Innovation Hub",
        route: "/enrichment-opportunities/innovation-hub",
      },
      {
        label: "Work Experience",
        route: "/enrichment-opportunities/work-experience",
      },
    ],
  },

  // INFORMATION
  {
    label: "Information",
    links: [
      { label: "News and Events", route: "/information/news" },
      { label: "Newsletter", route: "/information/newsletter" },
      { label: "Calendar", route: "/information/calendar" },
      {
        label: "Alumni Stories",
        route: "/information/alumni",
      },
      { label: "OASIS magazine", route: "/information/magazine" },
      { label: "Photo Gallery", route: "/information/photos" },
      { label: "Video Gallery", route: "/information/videos" },
    ],
  },
];

export default nav_links;
