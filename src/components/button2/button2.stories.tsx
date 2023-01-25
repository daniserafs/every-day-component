import { Story, Meta} from '@storybook/react'

import Button2 from '.';

export default {
    title: 'Example/Button2',
    component: Button2
} as Meta

export const Default: Story = (args) => <Button2 {...args} />