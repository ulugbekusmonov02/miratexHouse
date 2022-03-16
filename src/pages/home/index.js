import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import First from "../../components/Homecomponents/firstp";
import Second from "../../components/Homecomponents/secondp";
import Third from "../../components/Homecomponents/thirdp";

function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 p-3">
          <First />
          <Second />
          <Third />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
