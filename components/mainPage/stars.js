// import Image from "next/image";
// import stars from "../../public/stars.webp";
import Lottie from "lottie-react";
import animationData from "../../public/animation/stars.json";

export default function Stars() {
  
  return (
    // <Image
    //   src={stars}
    //   alt="stars"
    //   className="md:w-auto md:h-auto absolute md:right-0 md:mt-0 mt-80 hidden md:block  "
    // />
    <Lottie
      animationData={animationData}
      loop={true} 
      autoplay={true}
      className="md:w-2/3 md:h-auto absolute md:right-0 md:mt-0 mt-80 hidden md:block"
      
    />
  );
}
