import { ComponentStory, ComponentMeta} from '@storybook/react'

import Navbar from '.';

export default {
    title: 'Example/Navbar',
    args: {
        logo: "Some Logo",
        items: [
            {
                href: '/',
                label: 'Home'
            },
            {
                href: '/',
                label: 'About'
            },
            {
                href: '/',
                label: 'Contact'
            },
        ],
    },
    component: Navbar
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />