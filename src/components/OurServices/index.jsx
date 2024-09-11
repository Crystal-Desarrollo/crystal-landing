import { Section } from "../Section";

export const OurServices = () => {
  return (
    <Section id="services" className="relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 my-12 max-w-screen-xl">
        <div className=" flex flex-col items-center lg:items-start justify-center gap-9 w-full lg:w-1/2">
          <h2 className="text-5xl font-bold">Nuestra especialidad</h2>
          <p className="text-2xl">
            Nos encanta involucrarnos en nuevos desafíos, por eso nos especializamos en desarrollar sistemas a medida
            para hacer que tu empresa crezca sin límites, garantizando siempre un resultado final de calidad y al nivel
            de los mejores.
          </p>
        </div>
        <div className="gap-20 grid grid-cols-1 lg:grid-cols-2 w-full lg:w-1/2">
          <div className="flex flex-col items-center justify-center p-1 min-h-44 rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <h3 className="text-xl font-semibold text-center">Paginas Web</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-1 min-h-44 rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <h3 className="text-xl font-semibold text-center">Sistemas empresariales</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-1 min-h-44 rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <h3 className="text-xl font-semibold text-center">Aplicaciones a medida</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-1 min-h-44 rounded-xl bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <h3 className="text-xl font-semibold text-center">Servicio técnico</h3>
          </div>
        </div>
      </div>
    </Section>
  );
};
