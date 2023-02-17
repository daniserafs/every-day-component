import { AccordionItems } from './AccordionItem'
import './styles.css'

export type Faqs = {
  question: string
  answer: string
}

export type AccordionProps = {
  faqs: Faqs[]
}

const Accordion = ({ faqs }: AccordionProps) => (
  <div className="container">
    <h1 className="text"> danidinha </h1>
    <ul>
      {faqs.map((faq, index) => (
        <AccordionItems faq={} active={true} onToggle={()=>{console.log("wowowo")}} />
      ))}
    </ul>
  </div>
)

export default Accordion
