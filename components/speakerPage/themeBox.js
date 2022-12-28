import { motion } from "framer-motion";
export default function ThemeBox({ list }) {
  return (
    <motion.div className="flex rounded-lg bg-white justify-center p-10 m-5  items-center ml-5 px-2 w-full h-1/3 " whileHover={{scale:1.05}} whileTap={{scale:0.90}}>
      <div className=" ">{list}</div>
    </motion.div>
  );
}
