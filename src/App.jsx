import Header from "./Layouts/Header";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import IntroVideo from "./Pages/IntroVideo";
import Portfolio from "./Pages/Portfolio";
import Pricing from "./Pages/Pricing";
import Team from "./Pages/Team";
import Intersect from "./Pages/Intersect";
import Clients from "./Pages/Clients";
import Footer from "./Layouts/Footer";
import Contact from "./Pages/Contact";
import HeaderResp from "./Pages/HeaderResp/HeaderResp";
import LatestNews from "./Pages/LatestNews";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Services />
      <IntroVideo />
      <Portfolio />
      <Pricing/>
      <Team/>
      <Intersect/>
      <LatestNews/>
      <Clients/>
      <Contact/>
      <Footer/>
      {/* <HeaderResp/> */}
    </>
  );
}

export default App;
