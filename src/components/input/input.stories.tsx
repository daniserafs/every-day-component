import { Story, Meta} from '@storybook/react'

import Input from '.';

export default {
    title: 'Example/Input',
    component: Input
} as Meta

export const Default: Story = (args) => <Input {...args} />