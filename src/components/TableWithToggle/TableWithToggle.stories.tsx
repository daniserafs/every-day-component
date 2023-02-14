import {  ComponentMeta, ComponentStory } from '@storybook/react'

import TableWithToggle from '.'

export default {
  title: 'Components/TableWithToggle',
  args: {
    columns: [
      { id: "name", name: "Name" },
      { id: "email", name: "Email" },
      { id: "address", name: "Address" },
      { id: "phone", name: "Phone" },
      { id: "company", name: "Company" },
      {id: "is_Active", name: "Actions"}
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
          name: "Jane Doe",
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
      }
    ]
  },
  component: TableWithToggle
}

export const Default: ComponentStory<typeof TableWithToggle> = (args) => <TableWithToggle {...args} />