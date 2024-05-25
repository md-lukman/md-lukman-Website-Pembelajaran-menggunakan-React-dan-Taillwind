import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefites from "./components/Benefits";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <div>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <Benefites />
          <Collaboration />
          <Services />
          <Pricing />
          <Roadmap />
          <Footer />
        </div>
        <ButtonGradient />
      </div>
    </>
  );
};

export default App;
