import { Section } from "../Section";
import logo from "../../assets/crystal-logo.png";

export const Header = () => {
  return (
    <Section>
      <div className="flex flex-row items-center justify-center">
        <img
          src={logo.src}
          alt="Logo Crystal Desarrollo"
          className="h-[32px] mr-2"
        />
        <h1 className="text-xl font-bold">Crystal Desarrollo S.R.L.</h1>
      </div>

      {/* <nav>
        <ul className="flex flex-row gap-4">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#customers">Clientes</a>
          </li>
        </ul>
      </nav> */}
    </Section>
  );
};
