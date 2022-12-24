import BirthPage from "./birthPage";
import ThemePage from "./themePage";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

export default function SpeakerPage() {
  function ParallaxText(_a) {
    var children = _a.children,
      _b = _a.baseVelocity,
      baseVelocity = _b === void 0 ? 100 : _b;
    var baseX = useMotionValue(0);
    var scrollY = useScroll().scrollY;
    var scrollVelocity = useVelocity(scrollY);
    var smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    var velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });
    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    var x = useTransform(baseX, function (v) {
      return "".concat(wrap(-20, -45, v), "%");
    });
    var directionFactor = useRef(1);
    useAnimationFrame(function (t, delta) {
      var moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });
    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
      <div className="parallax overflow-hidden -tracking-wider leading-5 m-0 whitespace-nowrap flex flex-nowrap">
        <motion.div
          className="scroller flex whitespace-nowrap flex-nowrap"
          style={{ x }}
        >
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
          <span className="block mr-10">{children} </span>
        </motion.div>
      </div>
    );
  }
  return (
    <section className=" min-h-screen p-0  bg-white  md:block" id="speaker">
      <div className="text-secondary text-4xl relative font-sans  ">
        {/* <ParallaxText baseVelocity={-5}>Nebula Techfest</ParallaxText> */}
        <ParallaxText baseVelocity={2}>nebula hackathon</ParallaxText>
      </div>
      <div className=" h-screen ">
        {/* birth of Innovator */}
        <div className="flex w-full h-1/2 ">
          <BirthPage />
        </div>
        <div className="text-secondary text-4xl relative font-sans   ">
          <ParallaxText baseVelocity={-2}>
            India's Biggest hackathon
          </ParallaxText>
          {/* <ParallaxText baseVelocity={2}>nebula hackathon</ParallaxText> */}
        </div>
        {/* theme  */}
        <div className="flex w-full h-1/2 bg-primary overflow-hidden">
          <ThemePage />
        </div>
      </div>
    </section>
  );
}
