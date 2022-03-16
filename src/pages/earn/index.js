import { Link } from "react-router-dom";
import Layout from "../../components";
import Button from "../../components/btn";

function EarnPage() {
  return (
    <>
      <Layout>
        <div className="md:mt-24  text-white p-4 px-4">
          <div>
            <MainEarn
              main={"Хочешь зарабатывать от 20% годовых в евро?"}
              text={
                "Присоединяйся к нам и становись партнером в бизнесе, обеспеченном реальными высоколиквидными активами. "
              }
              first={
                "Когда мне исполнилось 40 лет, я задумался чего же я хочу в жизни больше всего?"
              }
              second={
                "Я понял, что я хочу путешествовать со своей семьей, посвящать время спорту и просто хорошо проводить время. Я не хотел провести всю свою жизнь в офисе.  Я прочитал книгу «1000 мест которые, нужно посетить прежде чем ты умрешь», и это стало моей целью на ближайшие 10 лет."
              }
              third={
                "Но если ты все время путешествуешь, то где брать деньги на жизнь? "
              }
              fourth={
                "Как и многие, я задумался о том, что необходимо вложить деньги в недвижимость и получать проценты от сдачи её в аренду, но доходность от аренды в странах Европы едва ли превышает 5% в год, что совершенно не соответствовало моим желаниям, я хотел минимум 20%, а лучше больше, так как 20% годовых превращает каждую вложенную 1000 евро через 25 лет в 95 396.34 евро, что показывает обычный калькулятор сложных процентов. Но что может дать 20% без особого риска для инвестора?  Я не хотел играть на бирже, покупать крипто-валюту и вступать в какие-то сомнительные схемы. "
              }
            />
            <MainEarn
              main={"И тут меня осенило! "}
              text={"Я решил дать вторую жизнь старым контейнерам!"}
              secondm={
                "Переделка грузовых контейнеров в мобильные модульные крипто-дома, кафе, офисы и т.д., позволит мне сдавать недвижимость со значительно большей доходностью, чем стационарные квартиры и офисы. И в случае выбора неудачного места размещения, я всегда смогу перевезти их на новое место."
              }
              first={
                "Просто представьте, средняя стоимость однокомнатной квартиры в любой столице ЕС составляет не менее 100 000 евро. Максимально её можно сдать за 1000 евро/мес. "
              }
              second={
                "В случае с мобильными домиками, мы можем создать 10 гостиничных номеров, 10 офисов или 10 кафе, которые даже при минимальной цене аренды в 400 евро/месяц приносит нам 4000 евро! Кроме того, пока номер не заселён, он может майнить крипто-валюту, так как имеет свободные мощности электричества. "
              }
              third={"Просто представьте какой доход будет за 25 лет! "}
              fourth={
                "Это меня так впечатлило, что я создал завод по производству автономных домиков (что позволило снизить их стоимость на 50% от того, что представлено на рынке) и управляющую компанию которая сдает их в аренду. Теперь мы готовы пригласить Вас присоединится к нашей компании и зарабатывать вместе."
              }
            />
          </div>
          <Team />
          <House />
          <Buy
            main={"Нет денег на покупку домика целиком?"}
            text={
              "Не проблема, Вы можете купить домик в складчину с другими участниками и получать такой же доход. "
            }
          />
          <Buy
            main={"Сумма инвестиций всего от 1000 евро "}
            text={
              "Это стоимость недорогого IPhone, который через год потеряет 60% своей стоимости. "
            }
          />
          <Small />
          <Always />
        </div>
      </Layout>
    </>
  );
}

function MainEarn(props) {
  return (
    <>
      <div className=" ">
        <p className="text-2xl  font-medium sm:max-w-xs md:text-5xl md:max-w-fg">
          {props.main}
        </p>
        <div className="sm:max-w-xs sm:text-lg font-medium md:font-normal  md:text-xl md:max-w-md mt-10 space-y-6">
          <p>{props.text}</p>
          <p>{props.secondm}</p>
        </div>
      </div>
      <div className="sm:ml-4 max-w-sm mt-16 border-l border-white  md:ml-36 mb-36 ">
        <div className="pl-4 sm:pl-8 sm:max-w-xs sm:text-md md:pl-16 space-y-10 md:text-lg md:max-w-lg font-extralight">
          <p>{props.first}</p>
          <p>{props.second}</p>
          <p>{props.third}</p>
          <p>{props.fourth}</p>
        </div>
      </div>
    </>
  );
}

function Team() {
  return (
    <>
      <div>
        <div className="space-y-10">
          <p className="sm:text-2xl sm:max-w-xs font-medium md:text-5xl md:max-w-md uppercase">
            Философия нашей команды
          </p>
          <p>4 шага:</p>
        </div>
        <div className=" sm:max-w-sm md:max-w-xl space-y-10 mt-10">
          <div className="flex items-center space-x-10">
            <Box text={"Шаг 1"} />
            <span>Мы хотим заработать денег.</span>
          </div>
          <div className="flex items-center space-x-10">
            <Box text={"Шаг 2"} />
            <span>Мы находим людей которые также хотят заработать денег. </span>
          </div>
          <div className="flex items-center space-x-10">
            <Box text={"Шаг 3"} />
            <span>Мы помогаем заработать нашим партнерам.</span>
          </div>
          <div className="flex items-center space-x-10">
            <Box text={"Шаг 4"} />
            <span>Мы радуемся когда наши партнеры зарабатывают. .</span>
          </div>
        </div>
        <div className="mt-10 sm:mt-7 font-medium sm:max-w-sm md:mt-10 md:max-w-lg ">
          <p>
            Эта простая система, которой более 2000 лет, позволяет всем нам быть
            успешными.
          </p>
          <div className="sm:ml-4 mt-16 sm:max-w-sm  border-l border-white md:ml-36  ">
            <p className="pl-3 sm:pl-8  sm:text-md  md:text-lg   font-extralight  md:pl-16  ">
              <span className=" font-medium">
                Если вам нравится наша философия и наша миссия, присоединяйтесь
                к нам.
              </span>
              Вы можете купить у нас любой продукт и самостоятельно сдавать его
              в аренду в своем городе, либо поручить заняться этим нашей
              управляющей компании в странах ЕС на очень выгодных условиях:
              Сначала мы возвращаем Вам 100% стоимость домика и только после
              этого делим с Вами прибыль 50% на 50%.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Box(props) {
  return (
    <div>
      <p className=" border-white px-2 py-4 border w-16">{props.text}</p>
    </div>
  );
}

function House() {
  return (
    <>
      <div className="mt-16 md:mt-40 ">
        <div className="flex flex-col space-y-11">
          <p className="text-xl sm:text-3xl md:text-5xl font-medium">
            ПРИСОЕДИНЯЙТЕСЬ!
          </p>
          <Button
            Cstyle={
              "py-2 px-4 sm:w-64 sm:py-2 md:py-4   md:w-96  border-white border shadow-md  text-center hover:border-opacity-50 uppercase font-medium"
            }
            text={"скачать каталог"}
          />
          <Button
            Cstyle={
              "py-2 px-4 sm:w-64 sm:py-2 md:py-4    md:w-96  border-white border shadow-md  text-center hover:border-opacity-50 uppercase font-medium"
            }
            text={"Скачать презентацию компании"}
          />
        </div>
      </div>
    </>
  );
}

function Buy(props) {
  return (
    <>
      <div className="space-y-6 mt-16 sm:mt-36 sm:space-y-11 md:mt-36 md:space-y-11">
        <p className="sm:text-3xl sm:max-w-md font-medium md:text-5xl md:max-w-xl uppercase ">
          {props.main}
        </p>
        <p className=" max-w-sm sm:font-thin">{props.text}</p>
      </div>
    </>
  );
}

function Small() {
  return (
    <>
      <div className="sm:ml-4 sm:text-md sm:max-w-sm  md:ml-36 border-l  border-white mt-16">
        <div className="pl-3 sm:pl-6 md:pl-16 md:text-lg max-w-lg space-y-11">
          <p className=" font-medium">
            Но что Вы хотите: Владеть телефоном или стать совладельцем бизнеса?
          </p>
          <p className=" font-thin">
            Covid-19 породил новый тренд! Люди хотят жить автономно за городом и
            по своим правилам. Мы даём им это!
          </p>
        </div>
      </div>
    </>
  );
}

function Always() {
  return (
    <div className="grid sm:grid-rows-2 md:grid-cols-2  mt-28 ">
      <div className=" space-y-6 sm:space-y-12 md:space-y-12 ">
        <p className="text-xl sm:text-3xl  sm:max-w-sm md:text-5xl  uppercase md:max-w-md">
          Станьте частью нашей команды!
        </p>
        <div className="text-lg max-w-sm  font-thin  space-y-12">
          <p>
            Решили присоединиться к нашей команде и вести жизнь богатого рантье?
          </p>
          <p className="text-xl font-medium ">
            Заполните форму, и наш менеджер свяжется с Вами в ближайшее время.
          </p>
        </div>
      </div>
      <div className="md:space-y-12 sm:space-y-12 space-y-8 ">
        <div className="space-y-8 sm:space-y-0 md:space-y-0  md:space-x-8 sm:space-x-8 sm:flex md:flex">
          <EmailBoxShort name={"Имя"} />
          <EmailBoxShort name={"Фамилия"} />
        </div>
        <EmailBoxLong type={"email"} name={"Ваш email*"} />
        <EmailBoxLong type={"tel"} name={"Ваш телефон*"} />

        <p className="text-xs max-w-xs sm:text-xs sm:max-w-sm md:max-w-sm md:text-sm">
          Отправляя ваш email, вы соглашаетесь получать рассылки и соглашаетесь
          с
          <span className="text-blue-700 ">
            <Link to={"#"}> политикой приватности.</Link>
          </span>
        </p>
        <button className="py-2 w-72 sm:px-4 md:py-6 md:px-6 mt-20 sm:w-96 md:w-full  bg-black border-2 shadow-md  text-center hover:border-opacity-50 uppercase font-medium">
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
        className="bg-black border-b-2 outline-none md:w-box"
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
          className="bg-black border-b-2 outline-none sm:w-350 md:w-full"
          type={props.type}
          placeholder={props.name}
        ></input>
      </form>
    </div>
  );
}
export default EarnPage;
