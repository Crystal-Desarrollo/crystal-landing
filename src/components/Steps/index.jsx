import { Section } from "../Section";
import ArrowRight from "../../icons/arrow-right.jsx";
import Underline from "../../icons/underline.jsx";

import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";

export const Steps = () => {
  return (
    <Section>
      <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black p-8 rounded-2xl">
        <div className="flex flex-col items-center gap-2 mb-12">
          <p className="text-xl text-font-light">Nuestro trabajo</p>
          <p className="text-5xl font-bold text-center relative">
            En 3 simples pasos
            <Underline className="absolute sm:bottom-[-100%] left-[33%]" />
          </p>
        </div>
        <ul className="flex gap-16 flex-col lg:flex-row items-center justify-center">
          <li className="mb-8 relative">
            <Step
              image={one.src}
              title="Diseño"
              description="Escuchamos tus necesidades y buscamos la mejor forma de ayudarte usando la tecnología."
            />
            <ArrowRight className="absolute text-white rotate-90 top-[160%] right-[35%] lg:rotate-0 lg:top-[40%] lg:right-[-10%]" />
          </li>
          <li className="mb-8 relative">
            <Step
              image={two.src}
              title="Desarrollo"
              description="Desarrollamos tu proyecto y te mostramos los avances para que puedas aportar tu visión."
            />
            <ArrowRight className="absolute text-white rotate-90 top-[160%] right-[35%] lg:rotate-0 lg:top-[40%] lg:right-[-10%]" />
          </li>
          <li className="mb-8">
            <Step
              image={three.src}
              title="Entrega"
              description="Te brindamos manuales de uso y capacitamos a todo tu equipo en el uso del sistema."
            />
          </li>
        </ul>
      </div>
    </Section>
  );
};

const Step = ({ title, description, image }) => {
  return (
    <div className="relative flex flex-col text-center w-[300px] xl:w-[400px]">
      <img
        alt="Design"
        loading="eager"
        width="50"
        height="50"
        decoding="async"
        data-nimg="1"
        className="w-[80px] h-[120px] lg:w-[100px] lg:h-[140px]"
        src={image}
      />
      <div className="absolute bottom-[-40px] left-0 right-0 flex flex-col items-center space-y-2 justify-center p-2">
        <span className="text-2xl font-bold">{title}</span>
        <span className="text-font-light">{description}</span>
      </div>
    </div>
  );
};
