import { Section } from "../Section";
import Heart from "../../icons/heart";
import FunArrow from "../../icons/fun-arrow.jsx";
import { t } from "i18next";

import camcomexjujuy from "../../assets/projects/camcomexjujuy.webp";
import expojuy from "../../assets/projects/expojuy.webp";
import capse from "../../assets/projects/capse.webp";
import espaciopurmamarca from "../../assets/projects/espaciopurmamarca.webp";
import aapdpp from "../../assets/projects/aapdpp.webp";

export const Portfolio = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col items-center gap-2 mb-12 relative">
        <p className="text-xl text-font-light flex flex-row items-center">
          {t("ourWork.preTitle")}
          <Heart className="ml-1 h-8" />
        </p>
        <p className="text-5xl font-bold text-center relative">{t("ourWork.title")}</p>
        <FunArrow className="rotate-180 absolute md:left-[-20%] bottom-[-80%] flex flex-row items-center gap-2" />
      </div>

      <div className="w-full flex flex-row items-center overflow-x-scroll gap-32 mt-8 px-8 scrollbar snap-x">
        <img
          src={camcomexjujuy.src}
          alt="Sitio web de la Cámara de comercio exterior de Jujuy"
          className="snap-center max-w-lg md:max-w-2xl"
          width={672}
          height={446}
        />
        <img
          src={espaciopurmamarca.src}
          alt="Sitio web de Espacio Purmamarca"
          className="snap-center max-w-lg md:max-w-2xl"
          width={672}
          height={446}
        />
        <img
          src={expojuy.src}
          alt="Sitio web de la ExpoJuy Edición 2022"
          className="snap-center max-w-lg md:max-w-2xl"
          width={672}
          height={446}
        />
        <img
          src={aapdpp.src}
          alt="Sitio web de la Asociación Argentina de Profesionales de Derecho Procesal Penal"
          className="snap-center max-w-lg md:max-w-2xl"
          width={672}
          height={446}
        />
        <img
          src={capse.src}
          alt="Sitio web de CAPSE"
          className="snap-center max-w-lg md:max-w-2xl"
          width={672}
          height={446}
        />
      </div>
    </Section>
  );
};
