import { useState } from 'react'
import { AccordionItems } from './AccordionItem'
import './styles.css'

export type Faqs = {
  question: string
  answer: string
}

export type AccordionProps = {
  faqs: Faqs[]
}

const Accordion = ({ faqs }: AccordionProps) => {
  const [clicked, setClicked] = useState(0)

  const handleToggle = (index: number) => {
    if(clicked === index ){
      return setClicked(0)
    }

    setClicked(index)
  }

  return (
    <div className="container">
      
      <ul className='accordion'>
        {faqs.map((faq, index) => (
          <AccordionItems
            onToggle={() => {
              handleToggle(index)
            }}
            active={clicked === index }
            key={index}
            faq={faq}
          />
        ))}
      </ul>
    </div>
  )
}

export default Accordion
