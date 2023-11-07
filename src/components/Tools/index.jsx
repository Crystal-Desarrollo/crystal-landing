import { Section } from "../Section";
import figma from "../../assets/tools/figma.webp";
import laravel from "../../assets/tools/laravel.png";
import react from "../../assets/tools/react.png";
import tailwind from "../../assets/tools/tailwind.webp";
import c from "../../assets/tools/c.png";
import java from "../../assets/tools/java.png";

export const Tools = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-2 mb-4">
        <p className="text-2xl text-font-light text-center">
          Usamos las herramientas líderes en la industria
        </p>
      </div>

      <div className="flex flex-row items-center gap-8">
        <img src={figma.src} alt="Logo Figma" className="h-12 white-logo" />
        <img
          src={tailwind.src}
          alt="Logo Tailwind"
          className="h-12 white-logo"
        />
        <img src={laravel.src} alt="Logo Laravel" className="h-16 white-logo" />
        <img src={react.src} alt="Logo React" className="h-16 white-logo" />
        <img src={c.src} alt="Logo C#" className="h-16 white-logo" />
        <img src={java.src} alt="Logo Java" className="h-16 white-logo" />
      </div>

      <p className="text-font-light text-center text-md">
        Si necesitás algo que no está en la lista ¡no dudes en consultarnos!
      </p>
    </Section>
  );
};
