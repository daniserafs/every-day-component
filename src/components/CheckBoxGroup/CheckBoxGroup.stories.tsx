import { ComponentStory, ComponentMeta} from '@storybook/react'

import CheckBoxGroup from '.';

export default {
    title: 'Example/CheckBoxGroup',
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
    component: CheckBoxGroup
} as ComponentMeta<typeof CheckBoxGroup>;

export const Default: ComponentStory<typeof CheckBoxGroup> = (args) => <CheckBoxGroup {...args} />