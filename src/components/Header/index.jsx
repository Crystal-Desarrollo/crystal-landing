import { Section } from "../Section";
import { t } from "i18next";
import logo from "../../assets/crystal-logo.png";

export const Header = () => {
  return (
    <div className="w-full flex flex-col bg-black text-white justify-center items-center gap-6 py-4 px-2 fixed z-10">
      <div div className="flex flex-row items-center justify-center bg-black">
        <img
          src={logo.src}
          alt="Logo Crystal Desarrollo"
          className="h-[32px] mr-2"
        />
        <h1 className="text-xl font-bold">Crystal Desarrollo S.R.L.</h1>
      </div>
      <nav className="w-full flex justify-center items-center bg-black py-6">
        <ul className="flex flex-row gap-10">
          <li>
            <a href="#home">{t("nav.home")}</a>
          </li>
          <li>
            <a href="#services">{t("nav.services")}</a>
          </li>
          <li>
            <a href="#projects">{t("nav.projects")}</a>
          </li>
          <li>
            <a href="#contact">{t("nav.contact")}</a>
          </li>
        </ul>
      </nav>

    </div>
    // <Section className="w-full flex flex-col fixed">
    //   <div className="flex flex-row items-center justify-center bg-black">
    //     <img
    //       src={logo.src}
    //       alt="Logo Crystal Desarrollo"
    //       className="h-[32px] mr-2"
    //     />
    //     <h1 className="text-xl font-bold">Crystal Desarrollo S.R.L.</h1>

    //   </div>
    //   <nav className="w-full flex justify-center items-center bg-black py-6">
    //     <ul className="flex flex-row gap-10">
    //       <li>
    //         <a href="#home">Inicio</a>
    //       </li>
    //       <li>
    //         <a href="#about">Nosotros</a>
    //       </li>
    //       <li>
    //         <a href="#services">Servicios</a>
    //       </li>
    //       <li>
    //         <a href="#customers">Clientes</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </Section>
  );
};
