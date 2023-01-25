import { ComponentStory, ComponentMeta} from '@storybook/react'

import Input3 from '.';

export default {
    title: 'Example/Input3',
    component: Input3
} as ComponentMeta<typeof Input3>

export const Default: ComponentStory<typeof Input3> = (args) => <Input3 {...args} />