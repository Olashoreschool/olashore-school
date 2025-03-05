import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Olashore International School",
  description:
    "Olashore International School is a private co-educational boarding secondary school located in Osun State, Nigeria.",
  canonical: "https://www.olashoreschool.com/",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.olashoreschool.com/",
    siteName: "Olashore International School",
    title: "Olashore International School",
    description:
      "Olashore International School is a private co-educational boarding secondary school located in Osun State, Nigeria.",
    images: [
      {
        url: "/public/logo.png",
        width: 800,
        height: 600,
        alt: "Olashore International School",
      },
    ],
  },
  twitter: {
    handle: "@OlashoreSchool",
    site: "@OlashoreSchool",
    cardType: "summary_large_image",
  },
};

export default config;
