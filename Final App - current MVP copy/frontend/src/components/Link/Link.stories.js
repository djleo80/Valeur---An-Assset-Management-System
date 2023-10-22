import { Link } from ".";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    weight: {
      options: ["extra-bold", "regular", "semi-bold"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "small"],
      control: { type: "select" },
    },
    color: {
      options: ["primary-color", "white", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    weight: "extra-bold",
    size: "default",
    color: "primary-color",
    iconLeft: true,
    iconRight: true,
    className: {},
    text: "Link item",
  },
};
