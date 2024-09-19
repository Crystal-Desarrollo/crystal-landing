import { useState } from 'react'
import chat from '../../assets/chat.svg'

export const FAQ = ({ title, q1, a1, q2, a2, q3, a3, q4, a4, asideTitle, asideSubtitle, asideCta }) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-8">
      <div className="w-full">
        <div className="w-full flex flex-col items-center gap-6 mb-12 relative">
          <p className="text-5xl font-bold text-pretty text-center relative text-white">{title}</p>
        </div>
        <div className="w-full flex flex-col">
          <Collapse question={q1} answer={a1} />
          <Collapse question={q2} answer={a2} />
          <Collapse question={q3} answer={a3} />
          <Collapse question={q4} answer={a4} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <img alt="icono de mensaje" src={chat.src} />

        <p className="text-3xl font-bold text-center relative text-white">{asideTitle}</p>
        <p className="text-xl text-font-light text-center">{asideSubtitle}</p>
        <a
          href="https://cal.com/crystal-desarrollo/contanos-tu-idea"
          className="bg-primary text-white px-8 py-4 flex items-center rounded-md font-semibold text-lg hover:scale-105 ease-in-out duration-300"
        >
          {asideCta}
        </a>
      </div>
    </div>
  )
}

export const Collapse = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="item px-6 py-6 w-full">
      <button type="button" onClick={() => setOpen(!open)} className="w-full flex flex-row justify-between">
        <h4 className="text-font-light font-medium text-start">{question}</h4>
        <svg
          className={`transform w-5 h-5 text-gray-500 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <title>Caret icon</title>
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}
