import { MutableRefObject, useRef, useState } from 'react'
import { Faqs } from '.'

export type AccordionItems = {
  faq: Faqs
  
}

export const AccordionItems = ({ faq }: AccordionItems) => {
  const { question, answer } = faq
  const [clicked, setClicked] = useState(false)
  const contentEl = useRef(null)

  const activeList = `accordion-item ${clicked ? 'active' : ''} `
  const activeControl = clicked ? '-' : '+'

  const handleWithScrool = (contentEl: { current: {scrollHeight: string}} | MutableRefObject<null>) => {
    return contentEl?.current?.scrollHeight
  }

  return (
    <li className={activeList}>
      <button className="button" onClick={() => setClicked(!clicked)}>
        {question}
        <span className="control">{activeControl}</span>
      </button>
      <div ref={contentEl} className="answer-wrapper" style={clicked ? {height: handleWithScrool(contentEl)  } : {height: '0px'}}>
        <div className='answer'>{answer}</div>
      </div>
    </li>
  )
}
