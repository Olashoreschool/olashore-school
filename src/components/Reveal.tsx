"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

type RevealProps = {
  children: JSX.Element;
  width?: "fit-content" | "100%";
};

const Reveal: React.FC<RevealProps> = ({ children, width }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Reveal;
