import { ComponentStory, ComponentMeta} from '@storybook/react'

import Select from '.';

export default {
    title: 'Example/Select',
    args: {
        options: [
        {
            label: "option 1", value: "opition-1"
        },
        {
            label: "option 2", value: "opition-2"
        },
        {
            label: "option 3", value: "opition-3"
        },
        {
            label: "option 4", value: "opition-4"
        },
        {
            label: "option 5", value: "opition-5"
        },
        
    ]

    },
    component: Select
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args) => <Select {...args} />