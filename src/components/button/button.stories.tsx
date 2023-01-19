import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
  title: "Example/Button",
  args: {
    label: "click meeeee",
    onClick: () => alert("wake me up before you go go"),
  },
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => <Button {...args}/>
