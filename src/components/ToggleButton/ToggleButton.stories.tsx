import { ComponentStory } from "@storybook/react";
import { useState } from "react";

import Toggle from ".";

export default {
  title: "Example/Toggle",
  component: Toggle,
};

const Template = () => {
  const [checked, setChecked] = useState(false);
  console.log("checked", checked);

  return(
    <Toggle id={'1'} checked={checked} onChange={() => setChecked(!checked)} />
    
  );
};

export const Default: ComponentStory<typeof Toggle> = Template.bind({});
