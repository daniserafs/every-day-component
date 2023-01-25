import { ComponentStory, ComponentMeta} from '@storybook/react'

import Input4 from '.';

export default {
    title: 'Example/Input4',
    component: Input4
} as ComponentMeta<typeof Input4>;

export const Default: ComponentStory<typeof Input4> = (args) => <Input4 {...args} />