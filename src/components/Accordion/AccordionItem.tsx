import { MutableRefObject, useRef } from 'react'
import { Faqs } from '.'

export type AccordionItems = {
  faq: Faqs
  active: boolean
  onToggle: () => void
}

export const AccordionItems = ({ faq, active, onToggle }: AccordionItems) => {
  const { question, answer } = faq

  const contentEl = useRef(null)

  const activeList = `accordion-item ${active ? 'active' : ''} `
  const activeControl = active ? '-' : '+'

  const handleWithScrool = (contentEl: { current: {scrollHeight: string}} | MutableRefObject<null>) => {
    return contentEl?.current?.scrollHeight
  }

  return (
    <li className={activeList}>
      <button className="button" onClick={onToggle}>
        {question}
        <span className="control">{activeControl}</span>
      </button>
      <div ref={contentEl} className="answer-wrapper" style={active ? {height: handleWithScrool(contentEl)  } : {height: '0px'}}>
        <div className='answer'>{answer}</div>
      </div>
    </li>
  )
}
