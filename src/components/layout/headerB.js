import { useState } from "react";
import { Link } from "react-router-dom";
import { ComeIn, Logo, Share, Wand, WhiteLogo } from "../../utils/icon";

function BlackHeader() {
  const [menu, setMenu] = useState(true);
  const open = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header className="border-b-2  py-2 text-white px-3 ">
        {!menu && (
          <div
            className="fixed inset-0 backdrop-blur-md z-30"
            onClick={open}
          ></div>
        )}
        <div className=" max-w-6xl mx-auto flex items-center gap-10  ">
          {menu && (
            <div className="md:hidden flex  " onClick={open}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          )}
          {!menu && <MobileMenu open={open} />}
          <div className="flex flex-1 justify-center md:justify-start">
            <Link to={"/"} className="">
              {WhiteLogo}
            </Link>
          </div>
          <Catalog />
        </div>
      </header>
    </>
  );
}

function Catalog() {
  return (
    <div className="flex items-center  justify-between ">
      <div className="hidden md:block items-center ">
        <ul className="flex text-xs uppercase gap-12 font-semibold">
          <li>
            <Link to={"/contact"}>Контакты </Link>
          </li>
          <li className="md:mr-12">
            <Link to={"/earn"}> Зарабатывай с нами</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-14">
        <ul className="hidden  md:flex text-xs space-x-1 font-semibold ">
          <li className="opacity-40 ">
            <Link to={"#"}>EN</Link>
          </li>
          <li className="opacity-40">
            <Link to={"#"}>DE</Link>
          </li>
          <li className="opacity-40">
            <Link to={"#"}>FR</Link>
          </li>
          <li className="opacity-40">
            <Link to={"#"}>ES</Link>
          </li>
          <li className="underline ">RU</li>
        </ul>
        <div className="hidden md:flex items-center">
          {Share}
          <Link to={"#"}>Поделиться</Link>
        </div>

        <div className="flex items-center ">
          {ComeIn}
          <Link to={"/user"}>войти</Link>
        </div>
      </div>
    </div>
  );
}

function MobileMenu(props) {
  return (
    <>
      <div
        className="fixed z-40 flex gap-20 bg-black left-0 inset-y-0 p-8"
        onClick={props.open}
      >
        <div className="flex flex-col justify-evenly ">
          <ul className="flex flex-col text-md capitalize gap-12 md:mr-4 font-bold  ">
            <li>
              <Link className=" hover:opacity-60" to={"/"}>
                Дом
              </Link>
            </li>
            <li>
              <Link className=" hover:opacity-60" to={"/earn"}>
                Зарабатывай с нами
              </Link>
            </li>
          </ul>
          <ul className="flex text-sm space-x-1 font-bold ">
            <li className="opacity-40 ">
              <Link to={"#"}>EN</Link>
            </li>
            <li className="opacity-40">
              <Link to={"#"}>DE</Link>
            </li>
            <li className="opacity-40">
              <Link to={"#"}>FR</Link>
            </li>
            <li className="opacity-40">
              <Link to={"#"}>ES</Link>
            </li>
            <li className="underline ">RU</li>
          </ul>
        </div>

        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </>
  );
}
export default BlackHeader;
