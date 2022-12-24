import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/logo.webp";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between h-full align-middle items-center ">
        <div className="ml-5">
            <Image src={Logo} alt="logo" width={150} height={150} />
        </div>
        <div className="flex items-center ">
          <div className="flex items-center ">
            <h1 className="p-5" >
              <a href="#about">ABOUT</a>
            </h1>

            <h1 className="p-5">
              <a href="#speaker">SPEAKER</a>
            </h1>

            <h1 className="p-5">
              <a href="#sponsors">SPONSORS</a>
            </h1>

            <h1 className="p-5">
              <a href="#schedule">SCHEDULE</a>
            </h1>

            <h1 className="p-5">
              <a href="#tracks">TRACKS</a>
            </h1>

            <h1 className="p-5">
              <a href="#faqs">FAQs</a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
