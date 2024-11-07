import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import SobreNos from "./components/SobreNos";
import QuemSomos from "./components/QuemSomos";
import ComoFunciona from "./components/ComoFunciona";
import Testemunhos from "./components/Testemunhos";
import Contactos from "./components/Contactos";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Clients from "./components/Clients";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Servicos />
        <SobreNos />
        <QuemSomos />
        {/* <ComoFunciona /> */}
        <Testemunhos />
        {/* <Clients /> */}
        <Contactos />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};
export default App;