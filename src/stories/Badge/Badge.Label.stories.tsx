import BadgeLabel from "../../components/Badge/Badge.Label";

export default {
  component: BadgeLabel,
  title: "Badge/Label",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    variant: "labelOnly",
    text: "레이블",
    feedback: "none",
    style: "solid",
    size: "xs",
  },
};

export const RightIcon = {
  args: {
    ...Default.args,
    variant: "rightIcon",
  },
};
