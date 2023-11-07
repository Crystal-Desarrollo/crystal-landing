import { Section } from "../Section";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const customersList = [
  {
    name: "Quantum Fit",
    logo: "/assets/quantum.png",
    size: "h-32",
  },
  {
    name: "Cámara de Comercio Exterior de Jujuy",
    logo: "/assets/camcomex.png",
  },
  {
    name: "ExpoJuy",
    logo: "/assets/expojuy.png",
  },
  {
    name: "El Galpón",
    logo: "/assets/el_galpon.webp",
    size: "h-32",
  },
  {
    name: "CAPSE",
    logo: "/assets/capce.png",
  },
  {
    name: "Russet",
    logo: "/assets/russet.png",
    size: "h-32",
  },
];

export const Customers = () => {
  return (
    <Section client:load>
      <p className="text-xl text-font-light mb-4">
        Clientes que confían en nosotros
      </p>

      <div className="w-full max-w-7xl mx-auto h-full items-center">
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
                    src={item.logo}
                    alt={`Logo de ${item.name}`}
                    className={`white-logo mx-auto opacity-70 ${
                      item.size || "h-16"
                    }`}
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
