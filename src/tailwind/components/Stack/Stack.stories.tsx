import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "./Stack";
import { Placeholder } from "../Placeholder/Placeholder";
import { alignHorizontal, alignVertical, space } from "../../../tokens";

const meta = {
  component: Stack,
  argTypes: {
    space: {
      options: Object.keys(space),
      control: { type: "select" },
    },
    alignVertical: {
      options: Object.keys(alignVertical),
      control: { type: "select" },
    },
    alignHorizontal: {
      options: Object.keys(alignHorizontal),
      control: { type: "select" },
    },
  },
  parameters: {
    controls: { exclude: ["children", "className", "style", "asChild"] },
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    space: "3",
    children: (
      <>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </>
    ),
  },
};

export const AsChild: Story = {
  args: {
    ...Default.args,
    asChild: true,
    children: <section>{Default.args?.children}</section>,
  },
};

export const Align: Story = {
  args: {
    ...Default.args,
    alignVertical: "center",
    alignHorizontal: "center",
    children: (
      <>
        <Placeholder width="1/2" />
        <Placeholder width="1/2" />
        <Placeholder width="1/2" />
        <Placeholder width="1/2" />
      </>
    ),
  },
};
