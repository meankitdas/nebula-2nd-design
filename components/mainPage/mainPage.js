import Stars from "./stars";
import MainContent from "./maincontent";
import Navbar from "./navbar";
import Image from "next/image";
// import Mark from "../../public/pencil.webp";
import MenuBox from "../animation/menuScreen/menuBox";

// import { motion } from "framer-motion";

import BottomNav from "./bottomNav";

export default function MainPage() {
  return (
    <section className=" min-h-screen p-2 " id="about">
      {/* we will suspend it in small screen */}

      <nav className="bg-white min-w-screen h-14 mx-10 my-5 rounded-2xl relative  text-black text-sm overflow-hidden hidden lg:block md:block">
        <Navbar />
      </nav>
      <div className="block md:hidden">
        <MenuBox />
      </div>

      {/* stars image  */}
      {/* <div>
        <Stars />
      </div> */}

      {/* main content */}

      <MainContent />

      {/* live section */}
      <div className="relative">
        {/* <Image
          src={Mark}
          className="absolute w-28 bottom-12 right-0 md:right-20"
        /> */}
        <div className="flex justify-center items-center h-24 overflow-hidden md:m-32 md:mb-5 m-10 bg-white rounded-2xl ">
          <BottomNav />
        </div>
      </div>
    </section>
  );
}
