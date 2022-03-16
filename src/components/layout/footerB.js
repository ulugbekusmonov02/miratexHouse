import { Link } from "react-router-dom";
import { WhiteStrip } from "../../utils/icon";

function BlackFooter() {
  return (
    <>
      <div className="border-t-2 border-t-gray-50 px-2">
        <div className="text-white max-w-6xl mx-auto py-2 font-thin">
          <div className="md:grid md:grid-cols-2 items-center ">
            <div>
              <p>© Miratexhouse. all rights reserved</p>
            </div>
            <div className="hidden md:block uppercase text-sm font-thin space-x-3   ">
              <span>
                <Link to={"#"}> Disclaimer</Link>
              </span>
              <span>
                <Link to={"#"}>Investments risks</Link>
              </span>
              <span>
                <Link to={"#"}>general loam tearms</Link>
              </span>
              <span>
                <Link to={"#"}>risk warning</Link>
              </span>
              <span>
                <Link to={"#"}>terms of use</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlackFooter;
