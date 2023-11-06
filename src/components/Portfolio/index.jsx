import { Section } from "../Section";
import Heart from "../../icons/heart";

export const Portfolio = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-2 mb-12">
        <p className="text-xl text-font-light flex flex-row items-center">
          Amamos
          <Heart className="ml-1 h-8" />
        </p>
        <p className="text-5xl font-bold text-center relative">
          Lo que hacemos
        </p>
      </div>

      <div className="w-full flex flex-row overflow-x-scroll">
        <img
          src="/assets/camcomexjujuy.png"
          alt="Sitio web de la Cámara de comercio exterior de Jujuy"
          className="w-[800px]"
        />
        <img
          src="/assets/camcomexjujuy.png"
          alt="Sitio web de la Cámara de comercio exterior de Jujuy"
          className="w-[800px]"
        />
        <img
          src="/assets/camcomexjujuy.png"
          alt="Sitio web de la Cámara de comercio exterior de Jujuy"
          className="w-[800px]"
        />
      </div>
    </Section>
  );
};
