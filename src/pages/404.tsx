import Image from "next/image";
import { useRouter } from "next/router";

import logo from "../../public/logo.png";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8 lg:gap-10">
      <Image src={logo} alt="logo" />

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl lg:text-5xl font-bold">Page not found</h1>

        <p>We can’t seem to find the page you are looking for.</p>
      </div>

      <button
        onClick={() => router.push("/")}
        className="!w-[7rem] bg-[var(--primary-color)] h-[3rem] hover:bg-[var(--primary-color)] hover:opacity-70 text-white"
      >
        Home
      </button>
    </div>
  );
}
