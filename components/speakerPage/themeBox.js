import { motion } from "framer-motion";
import { useState } from "react";

export default function ThemeBox({ list, describtion }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="flex flex-col rounded-lg bg-white cursor-pointer justify-center p-28 m-5 items-center  ml-5 px-5 w-full h-1/3 "
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.9 }}
    >
      <motion.h1
        layout="position"
        className="text-lg font-bold mb-2 text-center"
      >
        {list}
      </motion.h1>

      {isOpen && (
        <motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {describtion}
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}
