import About from "@/components/About";
import ContactVenue from "@/components/ContactVenue";
import Dates from "@/components/Dates";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Registration from "@/components/Registration";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";


const Home = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar/>
      <Hero/>
      <About/>
      <Dates/>
      <Registration/>
      <Speakers/>
      <Schedule/>
      <ContactVenue/>
      <Footer/>    
    </div>
  );
}

export default Home;