import { ComponentStory, ComponentMeta} from '@storybook/react'

import Table from '.';

export default {
    title: 'Example/Table',
    args: {
        columns: [
            {id: "name", name: "Name"},
            {id: "email", name: "Email"},
            {id: "address", name: "Address"},
            {id: "phone", name: "Phone"},
            {id: "company", name: "Company"}
        ],
        rows: [
            {
                id: "1",
                values: {
                    name: "John Doe",
                    email: "email@email.com",
                    address: "123 Main St",
                    phone: "123-456-7890",
                    company: "Company"
                }
            },
            {
                id: "2",
                values: {
                    name: "John Doe",
                    email: "email@email.com",
                    address: "123 Main St",
                    phone: "123-456-7890",
                    company: "Company"
                }
            },
            {
                id: "3",
                values: {
                    name: "John Doe",
                    email: "email@email.com",
                    address: "123 Main St",
                    phone: "123-456-7890",
                    company: "Company"
                }
            },
            {
                id: "4",
                values: {
                    name: "John Doe",
                    email: "email@email.com",
                    address: "123 Main St",
                    phone: "123-456-7890",
                    company: "Company"
                }
            },

        ]

    },
    component: Table
} 

export const Default: ComponentStory<typeof Table> = (args) => <Table {...args} />