import Slider from "react-slick";
import { Section } from "../Section";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const customersList = [
  {
    name: "Quantum Fit",
    logo: "/assets/logo.png",
  },
  {
    name: "Cámara de Comercio exterior",
    logo: "/assets/logo.png",
  },
  {
    name: "ExpoJuy",
    logo: "/assets/logo.png",
  },
  {
    name: "Otro cliente",
    logo: "/assets/logo.png",
  },
  {
    name: "Otro cliente",
    logo: "/assets/logo.png",
  },
  {
    name: "Otro cliente",
    logo: "/assets/logo.png",
  },
];

export const Customers = () => {
  return (
    <Section>
      <p className="text-xl text-font-light">Ya confiaron en nosotros</p>

      <Slider
        adaptiveHeight={true}
        arrows={false}
        dots={false}
        autoplay={true}
        slidesToShow={4}
        slidesToScroll={1}
        speed={2000}
        autoPlaySpeed={1}
        cssEase="linear"
        responsive={[
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {customersList.map((item) => {
          return (
            <div key={item.name}>
              <div className="flex flex-col items-center mb-2">
                <img
                  src={item.logo}
                  alt={`Logo de ${item.name}`}
                  className="h-[32px]"
                />
              </div>
              <p className="text-font-light text-center">{item.name}</p>
            </div>
          );
        })}
      </Slider>
    </Section>
  );
};
