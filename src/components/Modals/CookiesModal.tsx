"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CookiesModal = () => {
  const pathname = usePathname();

  const setCookie = (name: string, value: string, days: number) => {
    const expirationDate = new Date();
    expirationDate.setTime(
      expirationDate.getTime() + days * 24 * 60 * 60 * 1000
    );
    const expires = `expires=${expirationDate.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const getCookie = (name: string) => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  };

  const acceptCookies = () => {
    setCookie("olashoreSchoolsCookiesAccepted", "true", 30);
    hideModal();
  };

  const rejectCookies = () => {
    hideModal();
  };

  const hideModal = () => {
    const cookiesModal = document.querySelector(".cookies-modal");
    if (cookiesModal) {
      cookiesModal.classList.add("modal-hidden-animate");
      setTimeout(() => {
        cookiesModal.classList.remove("modal-visible");
        cookiesModal.classList.add("modal-hidden");
      }, 1100);
    }
  };

  useEffect(() => {
    const cookiesAccepted = getCookie("olashoreSchoolsCookiesAccepted");

    if (cookiesAccepted !== "true" && cookiesAccepted !== "false") {
      const cookiesModal = document.querySelector(".cookies-modal");
      if (cookiesModal) {
        cookiesModal.classList.remove("hidden");
        cookiesModal.classList.add("modal-hidden");
        setTimeout(() => {
          cookiesModal.classList.remove("modal-hidden");
          cookiesModal.classList.add("modal-visible");
        }, 1000);
      }
    } else {
      hideModal();
    }
  }, []);

  if (pathname !== "/") return;

  return (
    <>
      <div className="hidden cookies-modal modal-hidden fixed bottom-0 lg:bottom-6 lg:right-[4rem] z-30 transform transition-transform duration-1000">
        <div className="cookies bg-white p-6 rounded-md shadow-md max-w-xl">
          <p className="text-sm text-start text-[var(--grey-color-1)]">
            We use cookies on your device to enhance your navigation experience,
            analyze usage to improve our site, and customize our marketing
            efforts. <br />
            You can learn more about cookies in our{" "}
            <Link
              href="/legal"
              className="text-[var(--primary-color)] underline font-semibold"
            >
              Cookie Notice
            </Link>
            .
          </p>
          <div className="flex items-center gap-4 mt-6 justify-end">
            <button onClick={rejectCookies}>Reject Cookies</button>
            <button onClick={acceptCookies}>Accept Cookies</button>
          </div>
        </div>
        <style jsx>{`
          .cookies-modal {
            box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
          }

          button {
            background-color: var(--primary-color);
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 10px;
            cursor: pointer;
            font-size: 14px;
          }

          button:hover {
            opacity: 0.8;
          }

          .cookies {
            transition: transform 1s ease-in-out;
          }

          .modal-hidden {
            opacity: 0;
            visibility: hidden;
            transform: translateY(100%);
          }

          .modal-visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .modal-hidden-animate {
            transition: transform 1s ease-in-out;
            transform: translateY(100%);
          }
        `}</style>
      </div>
    </>
  );
};

export default CookiesModal;
