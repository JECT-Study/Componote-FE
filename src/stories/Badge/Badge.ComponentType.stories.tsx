import BadgeComponentType from "../../components/Badge/Badge.ComponentType";

export default {
  component: BadgeComponentType,
  title: "Badge/ComponentType",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export const Input = {
  args: {
    type: "input",
    style: "solid",
    size: "xs",
  },
};

export const Display = {
  args: {
    ...Input.args,
    type: "display",
  },
};

export const Feedback = {
  args: {
    ...Input.args,
    type: "feedback",
  },
};

export const Navigation = {
  args: {
    ...Input.args,
    type: "navigation",
  },
};
