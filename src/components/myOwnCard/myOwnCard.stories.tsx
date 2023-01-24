import { ComponentStory, ComponentMeta } from "@storybook/react";
import {MyOwnCard} from ".";

export default {
  title: "Example/myOwnCard",
  args: {
    imageURL: 'https://i.mydramalist.com/roWAp_4f.jpg',
    title: "She and Her Perfect Husband",
    content: (
      <>
        As a successful attorney with a thriving career, the last thing on Qin
        Shi's (Yang Mi) mind is marriage. Her parents, however, can think of
        nothing else. Determined to see their daughter married, Qin Shi's
        parents have been trying to force her into marriage for ages, but to no
        avail. Determined to land a position at Cheng and Hui, one of the top
        law firms in the country, Qin Shi is focused solely on advancing her
        career. Little does she know that one of the requirements for working at
        Cheng and Hui is being married. Aware of the law firm's hiring
        requirements, Qin Shi changes the marital status on her resume to
        “married”. With such an impressive resume and her brother's little
        tweak, it doesn't take long for Qin Shi to land the job. However, things
        get more than a little complicated when her "husband" Yang Hua (Xu Kai)
        appears on the scene. Hoping to clarify the situation, Qin Shi tries to
        approach her boss but can't seem to find the right moment. With his
        parents forcing him into a blind date with Qin Shi's biggest rival, Yang
        Hua decides the best way to help them both out of their current
        predicament is to marry Qin Shi. Acknowledging that the plan is mutually
        beneficial, the two head straight to the Civil Affairs Bureau to
        register their marriage. Though her sudden marriage solves one set of
        problems, another quickly arises as both Qin Shi and Yang Hua's parents
        suspect the two are up to something. Between dodging their parents'
        questions and Qin Shi's ex suddenly coming back into her life, this
        newlywed couple has a lot to deal with. Will their rash decision to
        marry come back to haunt them or will it eventually lead them toward a
        brighter future? A delightful tale of finding love in unexpected places,
        “She & Her Perfect Husband” is a 2022 Chinese romance drama directed by
        Lin Yan.
      </>
    ),
  },
  component: MyOwnCard,
} as ComponentMeta<typeof MyOwnCard>;

export const Default: ComponentStory<typeof MyOwnCard> = (args) => (
  <MyOwnCard {...args} />
);
