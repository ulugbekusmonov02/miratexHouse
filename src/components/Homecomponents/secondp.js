import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bad,
  Evro,
  GrandM,
  House,
  Monument,
  Study,
  Talk,
  Tv,
} from "../../utils/icon";
import Button from "../btn";

function Second() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="my-4 sm:flex sm:justify-end sm:items-end sm:mt-20 md:mt-40">
          <p className="max-w-sm text-sm font-medium">
            В последнее время мир меняется и совсем не понятно, что будет
            дальше, поэтому мы объединяем людей, которые хотят жить и вести
            бизнес по своим правилам.
          </p>
        </div>
        <div className="mt-16 sm:mt-14 md:mt-28">
          <p className="text-5xl font-semibold ">
            КАК ВЫ МОЖЕТЕ <br></br> ИХ ИСПОЛЬЗОВАТЬ
          </p>
        </div>
        <Use />
        <Earn />
        <div id="catalog">
          <Catalog />
        </div>
        <hr></hr>
      </div>
    </>
  );
}

function Use() {
  const [firstBtn, setFirstBtn] = useState(false);
  const [secondBtn, setSecondBtn] = useState(false);

  const firstArr = () => {
    setFirstBtn(!firstBtn);
  };

  const secondArr = () => {
    setSecondBtn(!secondBtn);
  };
  return (
    <div className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:mt-20 ">
      <div className="relative">
        <div className="flex items-center space-x-6 ">
          <button onClick={firstArr}>
            <svg
              className={`transform ${firstBtn ? "rotate-360" : "rotate-180"}`}
              width="60"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="59.5"
                y="1.07422"
                width="59"
                height="59"
                transform="rotate(90 59.5 1.07422)"
                stroke="#1D1D1D"
              />
              <path
                d="M19.875 30.2675L29.875 20.5742M29.875 20.5742L39.875 30.2675M29.875 20.5742L29.875 40.5742"
                stroke="black"
              />
            </svg>
          </button>

          <p>
            Дополнительное место <br></br> для дополнительных опций
          </p>
        </div>

        {firstBtn && (
          <div>
            <div className=" mt-6   inset-x-3   space-y-8 ml-3">
              <div className="flex space-x-2 ">
                {GrandM}

                <p>Добро пожаловать, бабушка.</p>
              </div>

              <div className="flex space-x-2">
                {Bad}

                <p>Приглашайте друзей без лишних хлопот</p>
              </div>

              <div className="flex space-x-2">
                {Tv}
                <p>Работайте, творите или тренируйтесь дома</p>
              </div>

              <div className="flex space-x-2">
                {Study}

                <p>Место для жизни после окончания учебы.</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center space-x-6 relative">
          <button onClick={secondArr}>
            {secondBtn ? (
              <svg
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="59.5"
                  y="1.07422"
                  width="59"
                  height="59"
                  transform="rotate(90 59.5 1.07422)"
                  stroke="#1D1D1D"
                />
                <path
                  d="M19.875 30.2675L29.875 20.5742M29.875 20.5742L39.875 30.2675M29.875 20.5742L29.875 40.5742"
                  stroke="black"
                />
              </svg>
            ) : (
              <svg
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="60.0742"
                  width="59"
                  height="59"
                  transform="rotate(-90 0.5 60.0742)"
                  stroke="#161616"
                />
                <path
                  d="M40.125 30.881L30.125 40.5742M30.125 40.5742L20.125 30.881M30.125 40.5742L30.125 20.5742"
                  stroke="#161616"
                />
              </svg>
            )}
          </button>

          <p>
            Доход от аренды для <br></br> мгновенного возврата вложений
          </p>
        </div>
        {secondBtn && (
          <div className="space-y-8 mt-6 ml-3">
            <div className="flex space-x-2 items-center">
              {Evro}
              <p>Нетто более 2 000 евро в месяц.</p>
            </div>
            <div className="flex space-x-2 items-center">
              {Monument}

              <p>Сдавайте в аренду помещения для бизнеса</p>
            </div>
            <div className="flex space-x-2 items-center">
              {House}

              <p>Сдавайте свой существующий дом. Живите в Miratex House</p>
            </div>
            <div className="flex space-x-2 items-center">
              {Talk}
              <p>
                Свяжитесь с нами, чтобы получить индивидуальную смету аренды для
                вашего региона
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Earn() {
  return (
    <div className="mt-10 sm:mt-0 sm:flex sm:items-end sm:justify-end">
      <div className="sm:mt-14 md:mt-36 max-w-sm ">
        <p className="text-5xl font-semibold">ЗАРАБАТЫВАЙ С НАМИ</p>
        <p className="my-10 text-sm font-medium">
          Любая из наших моделей позволит вам жить или запустить бизнес
          абсолютно автономно, а если вы оснастите её модулёс «МАЙНИНГ», она ещё
          и будет приносить вам деньги.
        </p>
        <Button
          Cstyle={
            "py-2 px-6 md:mt-20 w-60 sm:w-96  border-black border shadow-md  text-center hover:border-opacity-50 uppercase font-semibold"
          }
          text={"Узнать больше"}
        />
      </div>
    </div>
  );
}

function Catalog() {
  return (
    <div className="mt-14 sm:mt-28 ">
      <p className="uppercase text-5xl font-semibold">Каталог</p>
      <div className="flex space-x-9 uppercase font-medium mt-16 sm:text-sm">
        <span>Model Home 15</span>
        <span>Model Home 30</span>
        <span>Model cafe l15</span>
        <span>Model wc</span>
      </div>

      <Button
        Cstyle={
          "py-2 px-6 mt-20 w-60 sm:w-96 mb-16 sm:mb-36 md:mb-40 border-black border shadow-md  text-center hover:border-opacity-50 uppercase font-semibold"
        }
        text={"скачать каталог"}
      />
    </div>
  );
}
export default Second;
