

import {IoCalendarSharp} from "react-icons/io5"


export default function MainContent() {
  return (
    <div className="relative md:p-10 p-7 mb-4 md:ml-5 ml-0  mt-16">
      <div className="  text-ourwhite">
        {/* <div className="mb-4 ">
          <Image src={jain} alt="jain" className="w-80 z-20 " />
        </div> */}
        {/* <h2 className="text-2xl  mb-4 ">Presents</h2> */}
        <div className="mb-4  md:text-8xl text-6xl">
          <h1 className="">India's Biggest</h1>
          <h1 className="">
            Tech <span className="text-secondary">Hackathon</span>
          </h1>
        </div>
        <h2 className="text-2xl mb-4 flex items-center">
          <IoCalendarSharp className="mr-2" /> <div>Apr 27<sup>th</sup> - 31<sup>st</sup>, 2023</div>
        </h2>
      </div>

      {/* button */}

      <div className="  md:mt-10 mt-28 z-20 text-primary ">
        <button
          className="bg-secondary p-2 pl-5 pr-5 md:mr-4 mb-2 mr-2 rounded-lg"
          onClick={() => console.log("Dashboard")}
        >
          <a href="#">Go to dashboard</a>
        </button>
        <button className="bg-secondary p-2 pl-5 pr-5 rounded-lg">
          <a href="https://discord.com">Join discord</a>
        </button>
      </div>
    </div>
  );
}
