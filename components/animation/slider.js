import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Slider({ list }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div>
      <svg
        id="progress"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="hidden md:block "
      >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        {list.map((item) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => console.log(item.name)}
          >
            {item.name}
          </motion.li>
        ))}
        {/* <li>Apple</li> */}
      </ul>
    </div>
  );
}
