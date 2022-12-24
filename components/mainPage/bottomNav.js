import { RxDividerVertical } from "react-icons/rx";
import { RiTeamFill } from "react-icons/ri";
import { GiEarthAmerica } from "react-icons/gi";

export default function BottomNav() {
  return (
    <>
      <div className="flex justify-evenly  w-1/2">
        <div className="  ">
          <a href="" className="flex flex-col h-full justify-between  items-center">
            <RiTeamFill className="md:text-5xl text-2xl" />
            <div className="">
              <h4 className="text-xs md:text-base">Registeration</h4>
            </div>
          </a>
        </div>

        <div className="">
          <a href="" className="flex flex-col h-full justify-between items-center">
            <RiTeamFill className="md:text-5xl text-2xl" />
            <div>
              <h4 className="text-xs md:text-base">Teams</h4>
            </div>
          </a>
        </div>
      </div>
      <RxDividerVertical className="text-5xl " />
      <div className="flex justify-evenly w-1/2">
        <div >
          <a href="" className="flex flex-col h-full justify-between items-center">
            <GiEarthAmerica className="md:text-5xl text-2xl" />
            <div>
              <h4 className="text-xs md:text-base">College</h4>
            </div>
          </a>
        </div>

        <div >
          <a href="" className="flex flex-col h-full justify-between items-center">
            <GiEarthAmerica className="md:text-5xl text-2xl" />
            <div>
              <h4 className="text-xs md:text-base">Cities</h4>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
