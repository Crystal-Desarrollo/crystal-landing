import { Section } from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const customersList = [
  {
    name: "Quantum Fit",
    logo: "/assets/logo.png",
  },
  {
    name: "Cámara de Comercio Exterior de Jujuy",
    logo: "/assets/logo.png",
  },
  {
    name: "ExpoJuy",
    logo: "/assets/logo.png",
  },
  {
    name: "El Galpón",
    logo: "/assets/logo.png",
  },
  {
    name: "CAPSE",
    logo: "/assets/logo.png",
  },
  {
    name: "RPM",
    logo: "/assets/logo.png",
  },
];

export const Customers = () => {
  return (
    <Section client:load>
      <p className="text-xl text-font-light">Ya confiaron en nosotros</p>

      <Swiper slidesPerView={3}>
        {customersList.map((item) => {
          return (
            <SwiperSlide key={item.name}>
              <div className="flex flex-col items-center mb-2">
                <img
                  src={item.logo}
                  alt={`Logo de ${item.name}`}
                  className="h-[32px]"
                />
              </div>
              <p className="text-font-light text-center">{item.name}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
};
