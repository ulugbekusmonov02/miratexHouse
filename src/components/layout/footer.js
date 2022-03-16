import { FooterLine, WhiteBand, WhiteLogo, WhiteWand } from "../../utils/icon";

function Footer() {
  return (
    <>
      <div className="bg-black mt-36">
        <div className="max-w-6xl mx-auto pt-16 p-3">
          <div className="md:grid md:grid-cols-2">
            <div>
              {WhiteLogo}

              <p className="text-white hidden md:block text-sm max-w-sm ml-12 mt-6">
                Наша команда берет на себя все: от разработки идеи и до
                реализации. Функциональность и традиции — это то, что мы
                внедряем в каждый наш проект.
              </p>
            </div>
            <div className="mt-6 md:mt-0 space-y-8 md:space-y-0 md:flex md:justify-end md:space-x-4 mb-16">
              <div className="md:space-y-9">
                <div className="flex items-center space-x-5">
                  {WhiteBand}
                  <span className="text-white uppercase ">Звоните</span>
                </div>
                <div className=" text-white space-y-4 text-sm ">
                  <p>GB +4420 45770896</p>
                  <p>RU +7 499 3227009</p>
                  <p>PL +48 784 806484</p>
                </div>
              </div>
              <div className="md:space-y-9">
                <div className="flex items-center space-x-5">
                  {WhiteBand}
                  <span className="text-white uppercase">пишите</span>
                </div>
                <p className="text-white text-sm">info@miratexhouse.com</p>
              </div>
              <div className="md:space-y-9">
                <div className="flex items-center space-x-5">
                  {WhiteBand}
                  <span className="text-white uppercase ">приезжайте</span>
                </div>
                <p className="text-white text-sm">
                  Miratex House OU <br></br> Registry code 14940959 <br></br>
                  Address: Sepapaja 6, Tallinn
                </p>
              </div>
            </div>
          </div>
          {FooterLine}

          <div className="flex justify-between my-4">
            <p className="text-white">© MiratexHouse. all rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
