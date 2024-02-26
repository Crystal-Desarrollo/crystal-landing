import { useState } from "react";
import chat from "../../assets/chat.svg";

export const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-8">
      <div className="w-full">
        <div className="w-full flex flex-col items-center gap-6 mb-12 relative">
          <p className="text-5xl font-bold text-center relative text-white">
            Las respuestas que buscás
          </p>
        </div>
        <div className="w-full flex flex-col">
          <Collapse
            question="¿Cómo trabajamos juntos en el proceso de desarrollo?"
            answer="Nuestro proceso incluye consultas iniciales para comprender tus necesidades, diseño y desarrollo iterativo con tu retroalimentación constante, pruebas exhaustivas y finalmente, la implementación en tu servidor o alojamiento web."
          />
          <Collapse
            question="¿Pueden mantener y actualizar mi sitio web después de la entrega?"
            answer="Sí, ofrecemos servicios de mantenimiento y actualización de sitios web para garantizar que tu sitio esté siempre funcionando de manera óptima y actualizado con las últimas tecnologías."
          />
          <Collapse
            question="¿Pueden ayudarme a migrar mi sitio web actual a una nueva plataforma? "
            answer="Sí, ofrecemos servicios de migración de sitios web, lo que te permite cambiar a una plataforma más moderna y personalizada sin perder datos ni funcionalidades."
          />
          <Collapse
            question="¿Cómo gestionan los problemas técnicos o las interrupciones en el sitio web después del lanzamiento?"
            answer="Ofrecemos soporte técnico continuo y solucionamos problemas rápidamente. También implementamos monitoreo constante para prevenir problemas antes de que ocurran."
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <img alt="icono de mensaje" src={chat.src} />

        <p className="text-3xl font-bold text-center relative text-white">
          Te quedó alguna duda?
        </p>
        <p className="text-xl text-font-light text-center">
          Estamos ansiosos por responderlas
        </p>
        <a
          href="https://cal.com/crystal-desarrollo/contanos-tu-idea"
          className="bg-primary text-white px-8 py-4 flex items-center rounded-md font-semibold text-lg hover:scale-105 ease-in-out duration-300"
        >
          ¡Agenda tu reunión!
        </a>
      </div>
    </div>
  );
};

export const Collapse = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="item px-6 py-6 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex flex-row justify-between"
      >
        <h4 className="text-font-light font-medium text-start">{question}</h4>
        <svg
          className={`transform w-5 h-5 text-gray-500 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {open && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};
