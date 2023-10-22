import { PrimaryButton } from ".";

export default {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    size: {
      options: ["large", "small", "default"],
      control: { type: "select" },
    },
    color: {
      options: ["white", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    color: "white",
    iconLeft: true,
    iconRight: true,
    className: {},
    text: "Default",
  },
};
