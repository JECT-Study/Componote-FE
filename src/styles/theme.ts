import designTokens from "../designToken/color-tokens(mode).json";

const colorTokens = JSON.parse(designTokens);

const theme = {
  ...colorTokens.semantic,
};

export default theme;
