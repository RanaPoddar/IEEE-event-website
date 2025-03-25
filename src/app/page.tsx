import About from "@/components/About";
import ContactVenue from "@/components/ContactVenue";
import Dates from "@/components/Dates/Dates";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Hero from "@/components/Hero";
import HeroExp from "@/components/HeroExp";
import LowerHero from "@/components/LowerHero";
import Navbar from "@/components/Navbar";
import NavbarExp from "@/components/NavbarExp";
import Registration from "@/components/Registration";
import RegistrationStatus from "@/components/RegistrationStatus";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";

const Home = () => {

  return (
    <>
    <div className="">
    <div className="z-100"><NavbarExp/></div>
    <div className="z-0"><HeroExp/>
    <LowerHero/>
    </div>
    </div>
{/* max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */}
    <div className="">
      {/* <Navbar/> */}
      {/* <Hero/> */}
      
      <RegistrationStatus isOpen={true}/>
      <About/>
      <Dates/>
      <Registration/>
      <Speakers/>
      <Schedule/>
      <ContactVenue/>
      <Footer/>    
    </div>
    </>
    
  );
}

export default Home;