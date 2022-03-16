function First() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="mt-10 md:mt-20  md:flex  md:justify-between md:items-start">
          <p className="uppercase text-lg font-medium">
            Кто мы такие?
            <br></br>
            <span className="text-6xl font-semibold uppercase">
              Miratex House
            </span>
          </p>
          <div className="my-4 sm:flex sm:items-end sm:justify-end">
            <p className=" max-w-sm text-sm font-medium">
              Мы перерабатываем грузовые контейнеры в автономные крипто-дома,
              гостиницы, офисы, кафе, которые можно разместить там, где Вы
              хотите. Они абсолютно не зависят от коммуникаций, полностью готовы
              к эксплуатации, а в свободное от работы время они добывают
              крипто-валюту.
            </p>
          </div>
        </div>
        <Image />
      </div>
    </>
  );
}

function Image() {
  return (
    <div className="sm:mt-10 md:mt-32 max-w-5xl ">
      <img className="w-full h-130" src="/img/first_img.jpg" />
    </div>
  );
}
export default First;
