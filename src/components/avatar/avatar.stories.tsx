import { ComponentStory, ComponentMeta} from '@storybook/react'

import Avatar from '.';

export default {
    title: 'Example/Avatar',
    args: {
        imageURL: '',
    },
    component: Avatar
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />