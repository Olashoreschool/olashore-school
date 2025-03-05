import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

type PageTransitionProps = {
  children: JSX.Element;
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const router = useRouter();

  const backgroundVariants = {
    initial: { backgroundColor: "#0f0f0f" }, // Initial background color
    animate: { backgroundColor: "#0f0f0f" }, // Target background color
    exit: { backgroundColor: "#0f0f0f" }, // Background color when exiting
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100vh" }}
          // variants={backgroundVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
          // style={{ minHeight: "100vh", overflowX: "hidden" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
