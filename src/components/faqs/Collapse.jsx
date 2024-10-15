import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { clsx } from 'clsx'

export const Collapse = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="item px-6 py-6 w-full">
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
        <div className={clsx('mt-3 text-gray-600')}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}
