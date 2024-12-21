import designTokens from "../designToken/designTokens";

const colors = {
  ...designTokens.semantic,
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

const gap = {
  none: "0px",
  "7xs": "1px",
  "6xs": "2px",
  "5xs": "4px",
  "4xs": "6px",
  "3xs": "8px",
  "2xs": "10px",
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "32px",
  "5xl": "36px",
  "6xl": "40px",
  "7xl": "48px",
  "8xl": "56px",
  "9xl": "72px",
};

const radius = {
  none: "0px",
  "2xs": "4px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  circle: "99999px",
};

const stroke = {
  none: "0px",
  normal: "1px",
  bold: "2px",
  bolder: "4px",
  boldest: "8px",
};

const opacity = {
  invisible: "0",
  5: "0.05",
  8: "0.08",
  12: "0.12",
  16: "0.16",
  22: "0.22",
  28: "0.28",
  35: "0.35",
  43: "0.43",
  52: "0.52",
  63: "0.63",
  75: "0.75",
  88: "0.88",
  96: "0.96",
  visible: "1",
};

const theme = {
  colors,
  gap,
  radius,
  stroke,
  opacity,
};

export default theme;
