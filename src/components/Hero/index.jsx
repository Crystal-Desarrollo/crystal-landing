import { Section } from "../Section";
import bolt from "../../assets/bolt.svg";
import { t } from "i18next";

export const Hero = () => {
  return (
    <Section className="relative">
      <div className="flex flex-col items-center max-w-prose gap-2">
        <h2 className="text-font-light text-center text-xl">{t("home.hero.preTitle")}</h2>
        <h3 className="text-5xl text-center font-bold leading-snug">
          {t("home.hero.title")}
          <img
            loading="eager"
            width="30"
            height="50"
            decoding="async"
            data-nimg="1"
            className="w-[16px] lg:w-[20px] xl:w-[30px] inline-block ml-4"
            src={bolt.src}
            alt="icono de rayo"
          ></img>
        </h3>
        <h4 className="text-font-light text-center text-md">{t("home.hero.subtitle")}</h4>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <a
          className="px-4 py-2 bg-primary border-2 border-primary rounded-md font-semibold text-xl"
          href="https://cal.com/crystal-desarrollo/contanos-tu-idea"
          target="_blank"
        >
          {t("home.hero.cta")}
        </a>
        <a className="px-4 py-2 border-2 border-primary rounded-md font-semibold text-xl" href="/#projects">
          {t("home.hero.cta2")}
        </a>
      </div>
    </Section>
  );
};
