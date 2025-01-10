import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Protofolio from "../components/Protofolio";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div id="#">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="protofolio">
        <Protofolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
