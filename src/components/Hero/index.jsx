import { Section } from "../Section";
import Rocket from "../../icons/rocket";

export const Hero = () => {
  return (
    <Section className="relative">
      <div className="flex flex-col items-center max-w-prose gap-2">
        <h2 className="text-font-light text-center text-xl">
          Transformamos tus ideas en
        </h2>
        <h3 className="text-5xl text-center font-bold leading-snug">
          Experiencias tecnológicas de máxima calidad
          <img
            loading="eager"
            width="30"
            height="50"
            decoding="async"
            data-nimg="1"
            class="w-[16px] lg:w-[20px] xl:w-[30px] inline-block ml-4"
            src="/assets/bolt.svg"
          ></img>
        </h3>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <button className="px-4 py-2 bg-primary border-2 border-primary rounded-md font-semibold text-xl">
          Empecemos
        </button>
        <button className="px-4 py-2 border-2 border-primary rounded-md font-semibold  text-xl">
          Proyectos
        </button>
      </div>
    </Section>
  );
};
