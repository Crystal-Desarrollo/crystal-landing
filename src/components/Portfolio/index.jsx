import { Section } from "../Section";
import Heart from "../../icons/heart";
import FunArrow from "../../icons/fun-arrow.jsx";

import camcomexjujuy from "../../assets/camcomexjujuy.png";

export const Portfolio = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col items-center gap-2 mb-12 relative">
        <p className="text-xl text-font-light flex flex-row items-center">
          Amamos
          <Heart className="ml-1 h-8" />
        </p>
        <p className="text-5xl font-bold text-center relative">
          Lo que hacemos
        </p>
        <FunArrow className="rotate-180 absolute left-[-20%] bottom-[-80%] flex flex-row items-center gap-2" />
      </div>

      <div className="relative">
        <div className="w-full flex flex-row overflow-x-scroll">
          <img
            src={camcomexjujuy.src}
            alt="Sitio web de la Cámara de comercio exterior de Jujuy"
            className="w-[800px]"
          />
          <img
            src={camcomexjujuy.src}
            alt="Sitio web de la Cámara de comercio exterior de Jujuy"
            className="w-[800px]"
          />
          <img
            src={camcomexjujuy.src}
            alt="Sitio web de la Cámara de comercio exterior de Jujuy"
            className="w-[800px]"
          />
        </div>
      </div>
    </Section>
  );
};
