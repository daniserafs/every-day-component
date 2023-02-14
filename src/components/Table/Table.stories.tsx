import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import Table from ".";
import Toggle from "../ToggleButton";

const ToggleRow = () => {
  const [check, setCheck] = useState(false);

  // called on every render

  return <Toggle id="bbbbb" checked={check} onChange={() => setCheck((c) => !c)} />;
};

export default {
  title: "Example/Table",
  args: {
    columns: [
      { id: "name", name: "Name" },
      { id: "email", name: "Email" },
      { id: "address", name: "Address" },
      { id: "phone", name: "Phone" },
      { id: "company", name: "Company" },
      { id: "toggle", name: "Toggle" },
    ],
    rows: [
      {
        id: "1",
        values: {
          name: "John Doe",
          email: "email@email.com",
          address: "123 Main St",
          phone: "123-456-7890",
          company: "Company",
          toggle: () => {
            const [check, setCheck] = useState(false);
            return (
              <Toggle
                id="aaaa"
                checked={check}
                onChange={() => {
                  console.log("1");
                  setCheck((c) => !c);
                }}
              />
            );
            
          },
        },
      },
      {
        id: "2",
        values: {
          name: "John Doe",
          email: "email@email.com",
          address: "123 Main St",
          phone: "123-456-7890",
          company: "Company",
          toggle: () => {
            const [check, setCheck] = useState(false);
            return (
              <Toggle
                id="bbbb"
                checked={check}
                onChange={() => {
                  console.log("2");
                  setCheck((c) => !c);
                }}
              />
            );
            
          },
        },
      },
      //   {
      //     id: "3",
      //     values: {
      //       name: "John Doe",
      //       email: "email@email.com",
      //       address: "123 Main St",
      //       phone: "123-456-7890",
      //       company: "Company",
      //       toggle: () => <ToggleRow key="row-3" />,
      //     },
      //   },
      //   {
      //     id: "4",
      //     values: {
      //       name: "John Doe",
      //       email: "email@email.com",
      //       address: "123 Main St",
      //       phone: "123-456-7890",
      //       company: "Company",
      //       toggle: () => <ToggleRow key="row-4" />,
      //     },
      //   },
    ],
  },
  component: Table,
};

export const Default: ComponentStory<typeof Table> = (args) => (
  <Table {...args} />
);
