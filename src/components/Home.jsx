import Footer from "./Footer";
import Header from "./Header";
import HeaderMiddle from "./HeaderMiddle";
import HeroBanner from "./Herobanner";
import Laptophome from "./Laptops&Tablets/Laptophome";
import Middlecarosel from "./Middlecarosel";
import MiddleNavbar from "./MiddleNavbar";
import Fivegmobilephones from "./Mobile&Accesories/5GMobilephones/Fivegmobilephones";
import Mobilehome from "./Mobile&Accesories/Mobilehome";


function Home() {
  return (
    <div className="d-flex  flex-column min-vh-100">
      <Header />
      <HeroBanner />
     
      <HeaderMiddle />
      <Middlecarosel />
      <MiddleNavbar />
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <Mobilehome />
      </div>
      <div style={{ marginTop: "0px", paddingTop: "0px" }}>
        <Fivegmobilephones />
      </div>
      <Laptophome/>



    </div>
  );
}

export default Home;
