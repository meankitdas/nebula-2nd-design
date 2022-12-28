import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-Dimension";
import { MenuToggle } from "./menuToggle";
import { Navigation } from "./navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 4 + 200}px at 260px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    },
    backgroundColor: "white"
  }),
  closed: {
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40
    },
    backgroundColor: "transparent"
  }
};

export default function MenuBox() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="navigation"
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}