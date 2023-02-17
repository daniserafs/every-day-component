import { Faqs } from '.'

export type AccordionItems = {
  faq: Faqs
  active: boolean
  toggle: () => void
}

export const AccordionItems = (faq, active, onToggle) => {
   
    const { question, answer} = faq
   
    return(
    <div>
        <div>{answer}</div>
        <div>{question}</div>
    </div>
   )
}
