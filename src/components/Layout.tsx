import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AppProvider } from "@/store/AppContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const CookiesModal = dynamic(() => import("./Modals/CookiesModal"));
const FlyerModal = dynamic(() => import("./Modals/FlyerModal"));
const Enroll = dynamic(() => import("./Enroll"));

type LayoutProps = {
  children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [banner, setBanner] = useState<{ image: string; status: boolean }>({
    image: "",
    status: false,
  });

  useEffect(() => {
    async function fetchData() {
      const endpoint = process.env.NEXT_PUBLIC_BACKEND_URL + "banner";
      const res = await fetch(endpoint);
      const data = await res.json();
      setBanner(data.data[0]);
    }

    fetchData();
  }, []);

  const [showFlyerModal, setShowFlyerModal] = useState(false);

  useEffect(() => {
    if (!banner.status || pathname !== "/") return;

    const timer = setTimeout(() => {
      if (banner.status) {
        setShowFlyerModal(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [banner, pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setShowFlyerModal(false);
    }
  }, [pathname]);

  return (
    <AppProvider>
      <div className={showFlyerModal ? "h-screen overflow-hidden" : ""}>
        <Navbar />
        <main>{children}</main>
        <Enroll />
        <Footer />
      </div>

      <>
        <CookiesModal />

        {banner.status && showFlyerModal && pathname === "/" && (
          <FlyerModal banner={banner} setShowFlyerModal={setShowFlyerModal} />
        )}
      </>
    </AppProvider>
  );
};

export default Layout;
