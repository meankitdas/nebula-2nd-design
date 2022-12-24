import { RxDividerVertical } from "react-icons/rx";
import { RiTeamFill } from "react-icons/ri";
import { GiEarthAmerica } from "react-icons/gi";

export default function BottomNav() {
  return (
    <>
      <div className="flex justify-evenly  w-1/2">
        <a href="">
          <div className="flex flex-col  items-center">
            <RiTeamFill className="text-5xl" />
            <div>
              <h4>Registeration</h4>
            </div>
          </div>
        </a>
        <a href="">
          <div className="flex flex-col   items-center">
            <RiTeamFill className="text-5xl" />
            <div>
              <h4>Teams</h4>
            </div>
          </div>
        </a>
      </div>
      <RxDividerVertical className="text-5xl" />
      <div className="flex justify-evenly w-1/2">
        <a href="">
          <div className="flex flex-col  items-center">
            <GiEarthAmerica className="text-5xl" />
            <div>
              <h4>College</h4>
            </div>
          </div>
        </a>
        <a href="">
          <div className="flex flex-col   items-center">
            <GiEarthAmerica className="text-5xl" />
            <div>
              <h4>Cities</h4>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
