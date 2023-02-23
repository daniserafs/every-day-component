import { ComponentStory, ComponentMeta } from '@storybook/react'

import Accordion from '.'
import { faqs } from './faqs'

export default {
  title: 'Example/Accordion',
  args: {
    faqs: faqs
  },
  component: Accordion
} as ComponentMeta<typeof Accordion>

export const Default: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
)
