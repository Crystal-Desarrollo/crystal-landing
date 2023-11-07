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
          <Collapse />
          <Collapse />
          <Collapse />
          <Collapse />
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
          href="https://cal.com/crystal-desarrollo/contanos-tu-idea?date=2023-11-07&month=2023-11"
          className="bg-primary text-white px-8 py-4 flex items-center rounded-md font-semibold text-lg hover:scale-105 ease-in-out duration-300"
        >
          ¡Agenda tu reunión!
        </a>
      </div>
    </div>
  );
};

export const Collapse = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="item px-6 py-6 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between"
      >
        <h4 className="text-font-light font-medium">Lorem Ipsum ?</h4>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      )}
    </div>
  );
};
