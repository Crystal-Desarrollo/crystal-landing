import { Section } from "../Section";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import star from "../../assets/star.svg";
import camcomex from "../../assets/sponsors/camcomexjujuy.png";
import quantum from "../../assets/sponsors/quantum.png";
import expojuy from "../../assets/sponsors/expojuy.png";
import elgalpon from "../../assets/sponsors/el_galpon.png";
import capce from "../../assets/sponsors/capce.png";
import russet from "../../assets/sponsors/russet.png";

const customersList = [
  {
    name: "Quantum Fit",
    logo: quantum,
    size: "h-32",
  },
  {
    name: "Cámara de Comercio Exterior de Jujuy",
    logo: camcomex,
    size: "h-16",
  },
  {
    name: "ExpoJuy",
    logo: expojuy,
    size: "h-16",
  },
  {
    name: "El Galpón",
    logo: elgalpon,
    size: "h-24",
  },
  {
    name: "CAPSE",
    logo: capce,
    size: "h-16",
  },
  {
    name: "Russet",
    logo: russet,
    size: "h-24",
  },
];

export const Customers = ({ title }) => {
  return (
    <Section>
      <p className="text-xl text-font-light mb-4 flex flex-row items-center gap-4">
        <img src={star.src} className="h-8" alt="icono estrella" role="icon" />
        {title}
        <img src={star.src} className="h-8" alt="icono estrella" role="icon" />
      </p>

      <div className="w-full px-8 mx-auto h-full items-center">
        <Slider
          infinite={true}
          arrows={false}
          dots={false}
          autoplay={true}
          slidesToShow={4}
          slidesToScroll={1}
          speed={500}
          autoPlaySpeed={1}
          cssEase="ease-in-out"
          responsive={[
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ]}
        >
          {customersList.map((item) => {
            return (
              <div key={item.name} className="flex items-center justify-center">
                {item.logo && (
                  <img
                    src={item.logo.src}
                    alt={`Logo de ${item.name}`}
                    className={`white-logo mx-auto opacity-70 ${item.size || "h-16"}`}
                  />
                )}
              </div>
            );
          })}
        </Slider>
      </div>
    </Section>
  );
};
