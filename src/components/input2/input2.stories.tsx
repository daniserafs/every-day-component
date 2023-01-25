import { Story, Meta} from '@storybook/react'

import Input2 from '.';

export default {
    title: 'Component/Input2',
    component: Input2
} as Meta

export const Default: Story = (args) => <Input2 {...args} />