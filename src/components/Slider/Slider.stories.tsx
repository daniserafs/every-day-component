import { ComponentStory, ComponentMeta } from "@storybook/react";

import Slider from ".";

export default {
  title: "Example/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = (args) => <Slider />;
