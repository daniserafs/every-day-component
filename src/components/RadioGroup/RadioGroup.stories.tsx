import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioGroup from ".";

export default {
  title: "Example/RadioGroup",
  args: {
    title: "Title",
    subtitle: "Subtitle",
    options: [
      {
        label: "Option 1",
        value: "option 1",
      },
      {
        label: "Option 2",
        value: "option 2",
      },
      {
        label: "Option 3",
        value: "option 3",
      },
    ],
  },
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

export const Default: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);
