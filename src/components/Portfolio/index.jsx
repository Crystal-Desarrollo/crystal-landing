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

      <h3>Aca mostramos los proyectos</h3>
    </Section>
  );
};
