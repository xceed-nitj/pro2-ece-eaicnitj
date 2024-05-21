import Timeline from "../components/Timeline";
import OurEvents from "../components/OurEvents";
import HeroSection from "../components/HeroSection";
// import Speakers from "../components/SpeakerSection/Speakers";
import Footer from "../components/Footer";
import AboutNITJ from "../components/AboutNITJ";
import AboutNews from "../components/AboutNews";
// import SponsorShip from "../components/Sponsorship";
import { useEffect } from "react";
// import Slider from "../components/Slider";
import SecNavbar from "../components/SecNavbar";
import Navbar from "../components/Navbar"
// import AboutNews from "./components/Dummy";
function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="fixed top-0 w-screen z-40 ">
        <Navbar />
      </div>
    <div className=" overscroll-none"><HeroSection confid={props.confId} />
      <SecNavbar />
      <AboutNews confid={props.confId} />
      {/* <Slider/> */}
      <Timeline confid={props.confId} />
      {/* <Speakers /> */}
      <OurEvents />
      <AboutNITJ/>
      {/* <SponsorShip/> */}
      <Footer /></div>
      
      
    </>
  );
}

export default Home;
