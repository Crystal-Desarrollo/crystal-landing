import { t } from "i18next";

import { Section } from "../Section";
import { Coffee } from "../../icons/coffee";

export const ContactUs = () => {
  return (
    <Section id="contact">
      <div className="flex flex-col items-center max-w-prose gap-2">
        <h3 className="text-5xl text-center font-bold leading-snug flex flex-row items-center">
          {t("contact.title")}
          <Coffee className="ml-4" />
        </h3>
        <h2 className="text-font-light text-center text-xl">{t("contact.subtitle")}</h2>
      </div>

      <div className="w-full lg:w-[60vw] mt-8">
        <a href="https://cal.com/crystal-desarrollo/contanos-tu-idea" target="_blank">
          <button className="rounded-xl border p-4 h-[4rem] md:h-[7rem] lg:px-16 text-2xl font-bold text-white cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out w-full hover:bg-primary hover:text-white">
            {t("contact.cta")}
          </button>
        </a>
      </div>
    </Section>
  );
};
