import { IconChevronDown, IconMenu2, IconPhoneCall } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "/public/logo.png";
import nav_links from "@/nav-data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-20 ${
        scrolled || pathname !== "/"
          ? "bg-[#241A1E]"
          : `${open ? "bg-[#241A1E]" : "bg-transparent"}`
      }`}
    >
      <div className="container mx-auto nav p-4 xl:px-16 overflow-x-clip">
        <div className="nav__data">
          <Link href="/" className="nav__logo w-[50px]">
            <Image src={logo} alt="logo" />
          </Link>

          <div className="nav__toggle" id="nav-toggle">
            <button onClick={() => setOpen((open) => !open)}>
              <IconMenu2 color="#fff" size={30} />
            </button>
          </div>
        </div>

        <div className={`nav__menu ${open ? "show-menu" : "hidden xl:block"}`}>
          <ul className={`nav__list`}>
            {nav_links.map(
              (links, index) => (
                // links.route ? (
                //   <li key={index} className={!open ? "text-white" : "text-black"}>
                //     <Link href={links.route} className="nav__link font-[500]">
                //       {links.label}
                //     </Link>
                //   </li>
                // ) : (
                <li key={index} className="dropdown__item">
                  <div
                    className={`nav__link font-[500] ${
                      !open ? "text-white" : "text-black"
                    }`}
                  >
                    <span>{links.label}</span>
                    <IconChevronDown stroke={1.5} />
                  </div>

                  <ul className="dropdown__menu">
                    {links.links?.map((link, index) =>
                      link.sub_links ? (
                        <li key={index} className="dropdown__subitem">
                          <div className="dropdown__link">
                            <span>{link.label}</span>
                            <IconChevronDown stroke={1.5} />
                          </div>

                          <ul className="dropdown__submenu">
                            {link.sub_links.map((sub_link, index) => (
                              <li key={index}>
                                <Link
                                  href={sub_link.route}
                                  className="dropdown__sublink"
                                  onClick={() =>
                                    setTimeout(() => {
                                      setOpen(false);
                                    }, 500)
                                  }
                                >
                                  {sub_link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={index}>
                          <Link
                            href={link.route}
                            className="dropdown__link"
                            onClick={() =>
                              setTimeout(() => {
                                setOpen(false);
                              }, 500)
                            }
                          >
                            {link.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              )
              // )
            )}
          </ul>
        </div>

        <div className="hidden xl:block">
          <button
            onClick={() => push("/contact")}
            className="flex items-center gap-2 bg-[var(--yellow-color)] p-3 rounded-lg hover:opacity-80"
          >
            <IconPhoneCall size={20} />
            <span>contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
