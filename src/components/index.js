import BlackFooter from "./layout/footerB";
import BlackHeader from "./layout/headerB";

function Layout(props) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-black ">
        <BlackHeader />

        <section className="flex-auto">
          <div className="max-w-5xl mx-auto ">{props.children}</div>
        </section>

        <BlackFooter />
      </div>
    </>
  );
}

export default Layout;
