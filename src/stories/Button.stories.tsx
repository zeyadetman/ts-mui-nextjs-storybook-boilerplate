import React from "react";
import {
  ComponentStory,
  ComponentMeta,
  ComponentStoryObj,
} from "@storybook/react";
import { Button } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: "select", options: ["outlined", "contained", "ghost"] },
      name: "Variant",
      description: "The variant to use.",
      defaultValue: "contained",
    },
    disabled: {
      control: { type: "boolean" },
      name: "Disabled",
      description: "If `true`, the button will be disabled.",
      defaultValue: false,
    },
    startIcon: {
      control: { type: "boolean" },
      name: "Start Icon",
      description: "If `true`, the button will have a start icon.",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Button
    {...args}
    startIcon={args.startIcon ? <PeopleOutlineIcon /> : undefined}
  />
);

export const PrimaryButton: ComponentStoryObj<typeof Button> = Template.bind(
  {}
);

PrimaryButton.args = {
  children: "Join Group",
};
