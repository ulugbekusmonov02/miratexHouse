import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ComeIn,
  Facebook,
  Instagram,
  Logo,
  Picsart,
  Share,
  Wand,
  YouTube,
} from "../../utils/icon";

function Header() {
  const [menu, setMenu] = useState(true);
  const open = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="border-b-2  px-4 py-2">
        {!menu && (
          <div className="fixed inset-0 backdrop-blur-md bg-white/30 z-30"></div>
        )}
        <div className=" max-w-6xl mx-auto flex  items-center gap-10 ">
          <div className="md:hidden">
            <div className={menu ? "visible" : "invisible"} onClick={open}>
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            {!menu && <MobileMenu open={open} />}
          </div>
          <div className="flex flex-1 justify-center md:justify-start items-center  ">
            <Link className="flex items-center space-x-2" to={"/"}>
              {Logo}
              {Wand}

              <span className="text-xs font-bold">
                miratex<br></br> house
              </span>
            </Link>
          </div>
          <Catalog />
        </div>
      </header>
      <SocialMedia />
    </>
  );
}

function Catalog() {
  return (
    <div className="flex items-center  justify-between ">
      <div className="hidden md:block items-center ">
        <ul className="flex text-xs uppercase gap-12 font-semibold md:mr-4">
          <li>
            <a href="#catalog">Каталог</a>
          </li>
          <li>
            <Link to={"/contact"}>Контакты </Link>
          </li>
          <li className="ml-12">
            <Link to={"earn"}> Зарабатывай с нами</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-14">
        <ul className="hidden md:flex text-xs space-x-1 font-semibold ">
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

function SocialMedia() {
  return (
    <div className="hidden  py-4 px-6  absolute t-0 md:flex top-12 right-60 shadow-lg gap-4">
      <Link to={"#"}>{Instagram}</Link>
      <Link to={"#"}>{Facebook}</Link>
      <Link to={"#"}>{Picsart}</Link>
      <Link to={"#"}>{YouTube}</Link>
    </div>
  );
}

function MobileMenu(props) {
  return (
    <div
      className="fixed z-40 flex gap-20 left-0 inset-y-0 p-8 bg-white shadow-lg shadow-slate-800"
      onClick={props.open}
    >
      <div className="flex flex-col justify-evenly ">
        <ul className="flex flex-col text-md capitalize gap-12 md:mr-4 font-bold  ">
          <li>
            <Link className=" hover:opacity-60" to={"/contact"}>
              Контакты
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
  );
}
export default Header;
