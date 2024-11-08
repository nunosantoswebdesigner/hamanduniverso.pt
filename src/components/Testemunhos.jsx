import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import star from "../assets/clientes/star.svg";
import clienteCard from "../assets/clientes/clienteCard.svg";
const Testemunhos = () => {
  return (
    <Section crosses id="testemunhos">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Os nossos Clientes dizem" tag="Testemunhos" />
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item) => (
            <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]" style={{ backgroundImage: `url(${item.backgroundUrl})`, }} key={item.id}>
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (<img key={index} src={star} alt="star" className="w-5 h-5" />))}
                    </div>
                  </div>
                </div>
                <p className="body-2 mt-6 text-n-3">{item.review}</p>
              </div>
              {item.light && <GradientLight />}
              <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && ( <img src={item.imageUrl} width={380} height={362} alt={item.title} className="w-full h-full object-cover" /> )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Testemunhos;