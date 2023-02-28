import { ComponentStory, ComponentMeta } from '@storybook/react'

import Carousel from '.'
import { Images } from './images'

export default {
  title: 'Example/Carousel',
  args: {
    images: Images
  },

  component: Carousel
} as ComponentMeta<typeof Carousel>

export const Default: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
)
