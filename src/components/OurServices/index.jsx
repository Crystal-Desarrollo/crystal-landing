import ScreenPointer from "@/icons/screen-pointer";
import { Section } from "../Section";
import BarChart from "@/icons/bar-chart";
import Code from "@/icons/code";
import ExclamationPoints from "@/icons/exclamation-points";
import { t } from "i18next";

export const OurServices = () => {
  return (
    <Section id="services" className="relative !px-8 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 my-12 max-w-screen-xl">
        <div className=" flex flex-col items-center lg:items-start justify-center gap-4 w-full lg:w-1/2">
          <h2 className="text-font-light text-center text-xl animate-fade-in-up animate-delay-200 ">
            {t("services.preTitle")}
          </h2>
          <h3 className="text-5xl font-bold text-center">{t("services.title")}</h3>
          <p className="text-2xl text-center text-balance lg:text-left">{t("services.description")}</p>
        </div>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 w-full lg:w-1/2">
          <div className="flex flex-col gap-4 items-center justify-center p-8 lg:p-4 min-h-44 rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <ScreenPointer />
            <h3 className="text-xl font-semibold text-center text-pretty">{t("services.cardWebTitle")}</h3>
            <p className="text-center">{t("services.cardWebDescriptrion")}</p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center p-8 lg:p-4 min-h-44 rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <BarChart />
            <h3 className="text-xl font-semibold text-center text-pretty">{t("services.cardSoftwareTitle")}</h3>
            <p className="text-center">{t("services.cardSoftwareDescription")}</p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center p-8 lg:p-4 min-h-44 rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <Code />
            <h3 className="text-xl font-semibold text-center text-pretty">{t("services.cardDevelopmentTitle")}</h3>
            <p className="text-center">{t("services.cardDevelopmentDescription")}</p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center p-8 lg:p-4 min-h-44 rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <ExclamationPoints />
            <h3 className="text-xl font-semibold text-center text-pretty">{t("services.cardSolutionsTitle")}</h3>
            <p className="text-center">{t("services.cardSolutionsDescription")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
