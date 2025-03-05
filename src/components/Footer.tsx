import Image from "next/image";
import React from "react";
import logo from "/public/logo.png";
import Link from "next/link";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
  IconLocation,
  IconPhoneCall,
  IconMail,
} from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";

const Footer = () => {
  const quickLinks = [
    { href: "/pastoral/boarding", text: "Student Life" },
    { href: "academics/junior-secondary", text: "Junior Secondary School" },
    { href: "academics/senior-secondary", text: "Senior Secondary School" },
    {
      href: "/student-life/pastoral/arrange-a-visit",
      text: "Schedule a Visit",
    },
  ];

  const affiliations = [
    { href: "https://www.cobis.org.uk/", text: "COBIS", targetBlank: true },
    {
      href: "https://www.collegeboard.org/",
      text: "SAT Test Center",
      targetBlank: true,
    },
    {
      href: "https://www.bradfordcollege.ac.uk/",
      text: "Bratford College",
      targetBlank: true,
    },
  ];

  const otherServices = [
    { href: "enrichment-opportunities/innovation-hub", text: "Innovation Hub" },
    {
      href: "enrichment-opportunities/football-academy",
      text: "Football Academy",
    },
    { href: "/about-us/our-story", text: "About" },
    { href: "/information/news", text: "News" },
  ];

  const renderFooterLinks = (links: { href: string; text: string }[]) =>
    links.map((link: any, index: number) => (
      <li key={index}>
        <Link
          href={link.href}
          className="text-[#D9D9D9] hover:underline"
          target={link.targetBlank ? "_blank" : ""}
          rel={link.targetBlank ? "noopener noreferrer" : ""}
        >
          {link.text}
        </Link>
      </li>
    ));

  return (
    <footer className="pt-4 lg:pt-8">
      <div className="bg-[var(--black-color)] text-white">
        <div className="container mx-auto p-4 xl:px-16">
          <div className="flex flex-col lg:flex-row justify-between gap-10 py-10">
            <aside>
              <Image src={logo} alt="logo" width={100} />

              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="https://facebook.com/OlashoreSchool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandFacebook stroke="#fff" color="#fff" size={25} />
                </Link>

                <Link
                  href="https://twitter.com/OlashoreSchool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandTwitter stroke="#fff" color="#fff" size={25} />
                </Link>

                <Link
                  href="https://www.instagram.com/olashoreschool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandInstagram stroke="#fff" color="#fff" size={25} />
                </Link>

                <Link
                  href="https://www.linkedin.com/school/olashoreschool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin stroke="#fff" color="#fff" size={25} />
                </Link>
              </div>
            </aside>

            <aside>
              <p className="text-xl mb-4 font-bold text-white">Contact</p>

              <ul className="flex flex-col gap-2 text-sm">
                <li className="flex gap-4 text-[#D9D9D9]">
                  <IconLocation stroke={1.5} width={25} />
                  <span>
                    Oba Oladele Olashore Way Iloko-Ijesa P.M.B. 5059,
                    Iloko-Ijesa, Osun State, Nigeria
                  </span>
                </li>

                <li className="flex gap-2 text-[#D9D9D9]">
                  <IconPhoneCall stroke={1.5} width={25} />
                  <span>
                    <a href="tel:+2348077124311" className="hover:underline">
                      +234 807 712 4311
                    </a>
                    ,{" "}
                    <a href="tel:+2349031639208" className="hover:underline">
                      +234 903 163 9208
                    </a>
                  </span>
                </li>

                <li className="flex gap-2 text-[#D9D9D9] hover:underline">
                  <IconMail stroke={1.5} width={25} />
                  <a
                    href="mailto:info@olashoreschool.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>info@olashoreschool.com</span>
                  </a>
                </li>
              </ul>
            </aside>

            <aside>
              <p className="text-xl mb-4 font-bold text-white">Quick Links</p>
              <ul className="flex flex-col gap-2 text-sm">
                {renderFooterLinks(quickLinks)}
              </ul>
            </aside>

            <aside>
              <p className="text-xl mb-4 font-bold text-white">Affiliations</p>
              <ul className="flex flex-col gap-2 text-sm">
                {renderFooterLinks(affiliations)}
              </ul>
            </aside>

            <aside>
              <p className="text-xl mb-4 font-bold text-white">Services</p>
              <ul className="flex flex-col gap-2 text-sm">
                {renderFooterLinks(otherServices)}
              </ul>
            </aside>
          </div>

          <div className="border-t border-[#D9D9D9]"></div>

          <div className="text-sm pt-4 lg:pt-8 text-[#D9D9D9] flex flex-col lg:flex-row lg:items-center justify-between">
            <p className="">
              &copy; {new Date().getFullYear()} Olashore International School.
              All rights reserved.
            </p>

            <div className="flex flex-col lg:flex-row  lg:items-center gap-4 mt-6 lg:mt-0">
              <Link href="" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="" className="hover:underline">
                Terms and Conditions
              </Link>
              <Link href="" className="hover:underline">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
