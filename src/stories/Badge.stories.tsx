import Badge from "../components/Badge/Badge";

export default {
  component: Badge,
  title: "Badge",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export const Dot = {
  args: {
    variant: "dot",
  },
};

export const New = {
  args: {
    variant: "new",
  },
};

export const Count = {
  args: {
    variant: "count",
    text: "1",
  },
};
