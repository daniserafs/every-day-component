import { ComponentStory, ComponentMeta} from '@storybook/react'

import Accordion from '.';

export default {
    title: 'Example/Accordion',
    args: {

    },
    component: Accordion
} as ComponentMeta<typeof Accordion>;

export const Default: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />