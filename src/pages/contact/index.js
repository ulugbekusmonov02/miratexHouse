import { Link } from "react-router-dom";
import BlackFooter from "../../components/layout/footerB";
import BlackHeader from "../../components/layout/headerB";
import { WhiteBand } from "../../utils/icon";

function ContactPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-black">
        <BlackHeader />
        <div className="flex-1 p-3">
          <div className=" max-w-5xl mx-auto mt-12 md:mt-24 text-white">
            <p className="text-3xl sm:text-center sm:text-4xl md:text-5xl font-semibold uppercase ">
              Контакты Miratex house
            </p>
            <div className="flex sm:justify-around md:justify-between mt-14 md:mt-28 ">
              <div className="hidden sm:block">
                <div className="flex items-center">
                  {WhiteBand}
                  <span className="uppercase font-medium ">приезжайте</span>
                </div>
                <div>
                  <p className=" text-sm font-thin">
                    Miratex Group OU <br></br>
                    Registry code 14940959 <br></br>
                    Address: Sepapaja 6, Tallinn
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-20 sm:flex sm:space-x-10  sm:items-start md:space-x-16">
                <div>
                  <div className="flex items-center">
                    {WhiteBand}
                    <p className=" uppercase font-medium ">пишите</p>
                  </div>

                  <span className=" text-sm font-thin">
                    info@miratexgroup.com
                  </span>
                </div>

                <div className="">
                  <div className="flex items-center">
                    {WhiteBand}
                    <p className="uppercase font-medium ">Звоните</p>
                  </div>
                  <div className="flex flex-col text-sm font-thin">
                    <span>GB +4420 4577089</span>
                    <span>RU +7 499 3227009</span>
                    <span>PL +48 784 806484</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-16">
              <iframe
                className=" h-300 w-full sm:w-900"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50263767486!2d69.13928252010831!3d41.282512545785664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1647262265133!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <Always />
          </div>
        </div>

        <BlackFooter />
      </div>
    </>
  );
}

function Always() {
  return (
    <div className="sm:flex sm:flex-col sm:items-center  md:items-start sm:justify-center md:grid md:grid-cols-2  mt-10 sm:mt-28 mb-20 ">
      <div className=" sm:flex sm:flex-col sm:items-center md:flex md:items-start  space-y-12">
        <p className="text-3xl sm:text-4xl  md:text-5xl font-semibold ">
          Вы всегда можете связаться нами
        </p>
        <div className=" max-w-sm text-lg font-medium space-y-10">
          <p>Решили присоединиться к нашей команде или задать вопрос?</p>
          <p>
            Заполните форму, и наш менеджер свяжется с Вами в ближайшее время.
          </p>
        </div>
      </div>
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-8 sm:space-y-10 md:space-y-0 md:space-x-8  md:flex">
          <EmailBoxShort name={"Имя"} />
          <EmailBoxShort name={"Фамилия"} />
        </div>
        <EmailBoxLong type={"email"} name={"Ваш email*"} />
        <EmailBoxLong type={"tel"} name={"Ваш телефон*"} />
        <textarea
          type={"text"}
          className="bg-black w-44 sm:w-80 md:w-full outline-none border-b-2"
          placeholder="Сообщение"
        />
        <p className="text-sm sm:max-w-sm">
          Отправляя ваш email, вы соглашаетесь получать рассылки и соглашаетесь
          с
          <span className="text-blue-700 ">
            <Link to={"#"}> политикой приватности.</Link>
          </span>
        </p>
        <button className="py-4 md:py-6 md:px-6 mt-20 w-full  bg-black border-2 shadow-md  text-center hover:border-opacity-50 uppercase font-semibold">
          <Link to={"#"}>Отправить</Link>
        </button>
      </div>
    </div>
  );
}

function EmailBoxShort(props) {
  return (
    <form>
      <input
        className="bg-black border-b-2 outline-none sm:w-80 md:w-60"
        type={"text"}
        placeholder={props.name}
      ></input>
    </form>
  );
}

function EmailBoxLong(props) {
  return (
    <div>
      <form>
        <input
          className="bg-black border-b-2 outline-none sm:w-80 md:w-full"
          type={props.type}
          placeholder={props.name}
        ></input>
      </form>
    </div>
  );
}

export default ContactPage;
