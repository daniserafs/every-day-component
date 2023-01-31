import { ComponentStory, ComponentMeta} from '@storybook/react'

import Tooltip from '.';

export default {
    title: 'Example/Tooltip',
    component: Tooltip
} as ComponentMeta<typeof Tooltip>;

export const Default: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />