import designTokens from "../designToken/color-tokens(mode).json";

const colorTokens = JSON.parse(designTokens);

const theme = {
  ...colorTokens.semantic,
  alpha: {
    1: "rgba(9, 11, 18, 0.01)",
    2: "rgba(9, 11, 18, 0.02)",
    3: "rgba(9, 11, 18, 0.03)",
    4: "rgba(9, 11, 18, 0.04)",
    5: "rgba(9, 11, 18, 0.05)",
    6: "rgba(9, 11, 18, 0.06)",
    7: "rgba(9, 11, 18, 0.07)",
    8: "rgba(9, 11, 18, 0.08)",
    9: "rgba(9, 11, 18, 0.09)",
    10: "rgba(9, 11, 18, 0.1)",
    11: "rgba(9, 11, 18, 0.11)",
    12: "rgba(9, 11, 18, 0.12)",
    13: "rgba(9, 11, 18, 0.13)",
    14: "rgba(9, 11, 18, 0.14)",
    15: "rgba(9, 11, 18, 0.15)",
    16: "rgba(9, 11, 18, 0.16)",
  },
};

export default theme;
