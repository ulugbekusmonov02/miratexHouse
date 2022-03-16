import { useState } from "react";
import { Link } from "react-router-dom";
import { FacebookB, InstagramB, Pinterest, YouTubeB } from "../../utils/icon";
import Button from "../btn";
const slader = [
  {
    title: "Model Home 15",
    mainImg: "/img/modelhome15_1.png",
    fiImg: "/img/modelhome15_2.png",
    twImg: "/img/modelhome15_3.png",
    thImg: "/img/modelhome15_4.png",
    foImg: "/img/modelhome15_5.png",
    fImg: "/img/modelhome15_6.png",
    sevImg: "/img/modelhome15_7.png",
    text: "Идеальный вариант для жизни. Может быть использован для постоянного проживания, для отдыха на природе, гостевого домика. ",
    list: [
      "Изготовлен из одного 20Ft контейнера площадью 15 кв.м;",
      "Имеет полноценное спальное место диван-кровать;",
      "Кухня с индукционной плитой и холодильником;",
      "Душ и туалет;",
      "Телевизор",
      "Wi-Fi Router;",
      "Теплый пол, обогревательные керамопанели;",
      "Климат-контроль;",
      "Автономное электричество;",
      "Климат-контроль;",
      "Автономная канализация.",
    ],
  },

  {
    title: "Model Home 30",
    mainImg: "/img/modelhome30_1.jpg",
    fiImg: "/img/modelhome30_21.jpg",
    twImg: "/img/modelhome30_33.jpg",
    thImg: "/img/modelhome30_111111.jpg",
    foImg: "/img/modelhome30_51.jpg",
    fImg: "/img/modelhome30_31.jpg",
    sevImg: "/img/modelhome30_4.jpg",
    text: "Идеальный вариант для жизни. Может быть использован для постоянного проживания, для отдыха на природе, гостевого домика. ",
    list: [
      "Изготовлен из одного 20Ft контейнера площадью 15 кв.м;",
      "Имеет полноценное спальное место диван-кровать;",
      "Кухня с индукционной плитой и холодильником;",
      "Душ и туалет;",
      "Телевизор",
      "Wi-Fi Router;",
      "Теплый пол, обогревательные керамопанели;",
      "Климат-контроль;",
      "Автономное электричество;",
      "Климат-контроль;",
      "Автономная канализация.",
    ],
  },
  {
    title: "Model Cafe",
    mainImg: "/img/mainkafe.jpg",
    fiImg: "/img/modelkafe_2.jpg",
    twImg: "/img/modelkafe_3.jpg",
    thImg: "/img/modelkafe_444444.jpg",
    foImg: "/img/modelkafe_2.jpg",
    fImg: "/img/modelkafe_1.jpg",
    sevImg: "/img/modelkafe_4.jpg",
    text: "Идеальный вариант для жизни. Может быть использован для постоянного проживания, для отдыха на природе, гостевого домика. ",
    list: [
      "Изготовлен из одного 20Ft контейнера площадью 15 кв.м;",
      "Имеет полноценное спальное место диван-кровать;",
      "Кухня с индукционной плитой и холодильником;",
      "Душ и туалет;",
      "Телевизор",
      "Wi-Fi Router;",
      "Теплый пол, обогревательные керамопанели;",
      "Климат-контроль;",
      "Автономное электричество;",
      "Климат-контроль;",
      "Автономная канализация.",
    ],
  },
  {
    title: "Model WC",
    mainImg: "/img/mainWC.jpg",
    fiImg: "/img/wc 1.jpg",
    twImg: "/img/wc 2.jpg",
    thImg: "/img/modelkafe31.jpg",
    foImg: "/img/wc 4.jpg",
    fImg: "/img/wc 2.jpg",
    sevImg: "/img/wc 4.jpg",
    text: "Идеальный вариант для жизни. Может быть использован для постоянного проживания, для отдыха на природе, гостевого домика. ",
    list: [
      "Изготовлен из одного 20Ft контейнера площадью 15 кв.м;",
      "Имеет полноценное спальное место диван-кровать;",
      "Кухня с индукционной плитой и холодильником;",
      "Душ и туалет;",
      "Телевизор",
      "Wi-Fi Router;",
      "Теплый пол, обогревательные керамопанели;",
      "Климат-контроль;",
      "Автономное электричество;",
      "Климат-контроль;",
      "Автономная канализация.",
    ],
  },
];
function Third() {
  const [count, setCount] = useState(0);
  const countAdd = () => {
    setCount((count + 1) % 4);
  };
  const countDist = () => {
    setCount(count - 1 < 0 ? 3 : count - 1);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="mt-10">
          <p className="text-4xl uppercase font-semibold">
            {slader[count].title}
          </p>
          <div className=" w-62 h-130">
            <img className="w-full h-full mt-10" src={slader[count].mainImg} />
          </div>
        </div>
        <MainImg
          img1={slader[count].fiImg}
          img2={slader[count].twImg}
          img3={slader[count].thImg}
        />
        <InsideHome
          plus={countAdd}
          minus={countDist}
          img4={slader[count].foImg}
          img5={slader[count].fImg}
          img6={slader[count].sevImg}
          tx={slader[count].text}
          list={slader[count].list}
        />
      </div>
    </>
  );
}

function MainImg(props) {
  return (
    <div className="sm:flex mt-36 hidden">
      <div className="space-y-6 w-72 h-72 flex flex-col justify-between">
        <img className="w-full h-full " src={props.img1} />
        <img className=" w-full h-full " src={props.img2} />
      </div>
      <div className="ml-16 h-130 w-500 ">
        <img className="h-full w-full" src={props.img3} />
      </div>
    </div>
  );
}

function InsideHome(props) {
  return (
    <div className="mt-10 sm:mt-36 ">
      <div className="flex flex-col items-center justify-center sm:grid sm:place-items-center md:grid md:grid-cols-2">
        <div>
          <img className=" w-96 " src={props.img4} />
          <ul className=" list-disc mt-12 sm:mt-24 space-y-2 text-sm ml-6 font-medium">
            {props.list.map((content, index) => {
              return <li key={index}>{content}</li>;
            })}
          </ul>

          <Button
            Cstyle={
              "hidden md:block py-2 px-6 mt-20 w-96 mb-36 border-black border shadow-md  text-center hover:border-opacity-50 uppercase font-semibold"
            }
            text={"арендовать или приобрести"}
          />
        </div>
        <div className="md:content-start md:grid md:place-content-end mb-10 ">
          <p className=" max-w-sm font-medium my-10 sm:mb-24 md:mb-48">
            {props.tx}
          </p>

          <img className=" mb-6 w-96 h-300" src={props.img5} />
          <img className="w-96 h-300" src={props.img6} />
        </div>
      </div>
      <svg
        className="mb-10 w-full"
        height="2"
        viewBox="0 0 999 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.282715"
          y1="0.927734"
          x2="999"
          y2="0.927822"
          stroke="#161616"
        />
      </svg>

      <div className="max-w-5xl mx-auto flex justify-around items-start">
        <button className="p-4 border-black border" onClick={props.minus}>
          <svg
            className="w-8 h-8 transform rotate-180"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3067 0.677734L20 10.6777M20 10.6777L10.3067 20.6777M20 10.6777H0"
              stroke="#161616"
            />
          </svg>
        </button>
        <Button
          Cstyle={
            "md:hidden text-xs py-6 px-6   mb-10 border-black border shadow-md  text-center hover:border-opacity-50 uppercase font-medium"
          }
          text={"арендовать"}
        />
        <button className="p-4 border-black border" onClick={props.plus}>
          <svg
            className="w-8 h-8"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3067 0.677734L20 10.6777M20 10.6777L10.3067 20.6777M20 10.6777H0"
              stroke="#161616"
            />
          </svg>
        </button>
      </div>

      <div className="mt-14 sm:items-end sm:mt-36 flex flex-col">
        <div>
          <p className="text-5xl font-medium  max-w-md">
            ЧТО ЕЩЕ МОЖНО СДЕЛАТЬ ИЗ КОНТЕЙНЕРОВ?
          </p>
          <p className=" mt-10 max-w-xs text-md font-medium">
            Огромное количетсво идей в наших социальных сетях:
          </p>
          <div className="flex space-x-10 mt-12">
            <Link to={"#"}>{InstagramB}</Link>
            <Link to={"#"}>{FacebookB}</Link>
            <Link to={"#"}>{Pinterest}</Link>
            <Link to={"#"}>{YouTubeB}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
