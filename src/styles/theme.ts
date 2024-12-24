import designTokens from "../designToken/color-tokens(mode).json";

const colorTokens = JSON.parse(designTokens);

const colors = {
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

const typography = {
  body: {
    "2xs": {
      fontSize: "0.75rem",
      fontWeight: 510,
      lineHeight: "1.6em",
      letterSpacing: "0.004em",
    },
    xs: {
      fontSize: "0.8125rem",
      fontWeight: 450,
      lineHeight: "1.6em",
      letterSpacing: "0.004em",
    },
    sm: {
      fontSize: "0.9375rem",
      fontWeight: 400,
      lineHeight: "1.6em",
      letterSpacing: "0em",
    },
    md: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.6em",
      letterSpacing: "0em",
    },
    lg: {
      fontSize: "1.0625rem",
      fontWeight: 400,
      lineHeight: "1.6em",
      letterSpacing: "0em",
    },
  },
  label: {
    bold: {
      xs: {
        fontSize: "0.875rem",
        fontWeight: 570,
        lineHeight: "1.5em",
        letterSpacing: "-0.005em",
      },
      sm: {
        fontSize: "0.9375rem",
        fontWeight: 570,
        lineHeight: "1.5em",
        letterSpacing: "-0.005em",
      },
      md: {
        fontSize: "1rem",
        fontWeight: 570,
        lineHeight: "1.5em",
        letterSpacing: "-0.005em",
      },
      lg: {
        fontSize: "1.125rem",
        fontWeight: 570,
        lineHeight: "1.5em",
        letterSpacing: "-0.005em",
      },
    },
    xs: {
      fontSize: "0.875rem",
      fontWeight: 510,
      lineHeight: "1.5em",
      letterSpacing: "0em",
    },
    sm: {
      fontSize: "0.9375rem",
      fontWeight: 510,
      lineHeight: "1.5em",
      letterSpacing: "0em",
    },
    md: {
      fontSize: "1rem",
      fontWeight: 510,
      lineHeight: "1.5em",
      letterSpacing: "0em",
    },
    lg: {
      fontSize: "1.125rem",
      fontWeight: 510,
      lineHeight: "1.5em",
      letterSpacing: "0em",
    },
  },
  title: {
    1: {
      fontSize: "1.25rem",
      fontWeight: 570,
      lineHeight: "1.4em",
      letterSpacing: "-0.01em",
    },
    2: {
      fontSize: "1.5625rem",
      fontWeight: 570,
      lineHeight: "1.4em",
      letterSpacing: "-0.01em",
    },
    3: {
      fontSize: "2rem",
      fontWeight: 570,
      lineHeight: "1.4em",
      letterSpacing: "-0.01em",
    },
    4: {
      fontSize: "2.5rem",
      fontWeight: 570,
      lineHeight: "1.4em",
      letterSpacing: "-0.01em",
    },
  },
  display: {
    1: {
      fontSize: "3rem",
      fontWeight: 640,
      lineHeight: "1.3em",
      letterSpacing: "-0.014em",
    },
    2: {
      fontSize: "3.5rem",
      fontWeight: 640,
      lineHeight: "1.3em",
      letterSpacing: "-0.014em",
    },
    3: {
      fontSize: "4rem",
      fontWeight: 640,
      lineHeight: "1.3em",
      letterSpacing: "-0.014em",
    },
    4: {
      fontSize: "4.5rem",
      fontWeight: 640,
      lineHeight: "1.3em",
      letterSpacing: "-0.014em",
    },
  },
};

const iconSize = {
  "2xs": "14px",
  xs: "16px",
  sm: "18px",
  md: "20px",
  lg: "24px",
  xl: "28px",
  "2xl": "32px",
};

const gap = {
  none: "0rem",
  "7xs": "0.0625rem",
  "6xs": "0.125rem",
  "5xs": "0.25rem",
  "4xs": "0.375rem",
  "3xs": "0.5rem",
  "2xs": "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.75rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "2.5rem",
  "7xl": "3rem",
  "8xl": "3.5rem",
  "9xl": "4.5rem",
};

const radius = {
  none: "0rem",
  "2xs": "0.25rem",
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  circle: "99999px",
};

const stroke = {
  none: "0rem",
  normal: "0.0625rem",
  bold: "0.125rem",
  bolder: "0.25rem",
  boldest: "0.5rem",
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

const shadow = {
  embossed: `
  0 0 0.0625rem 0 ${colors.alpha[4]},
  0 0.125rem 0.25rem 0 ${colors.alpha[8]}`,
  raised: `
  0 0 0.125rem 0 ${colors.alpha[6]},
  0 0.1875rem 0.375rem 0 ${colors.alpha[11]}`,
  floated: `
  0 0 0.125rem 0 ${colors.alpha[6]},
  0 0.125rem 0.25rem 0 ${colors.alpha[6]},
  0 0.25rem 0.5rem 0 ${colors.alpha[13]}`,
  overlay: `
  0 0 0.25rem 0 ${colors.alpha[8]},
  0 0.1875rem 0.5rem 0 ${colors.alpha[12]},
  0 0.5rem 1rem 0 ${colors.alpha[16]}`,
};

const interaction = {
  bold: `
  &:hover {
    opacity : ${opacity[12]};
  }

  &:active {
    opacity : ${opacity[22]};
  }

  &:focus-visible {
    border: ${stroke.bolder} solid ${colors.light["interactive-focus"]};
    opacity : ${opacity.visible};
  }`,
  normal: `
  &:hover {
    opacity : ${opacity[8]};
  }

  &:active {
    opacity : ${opacity[16]};
  }

  &:focus-visible {
    border: ${stroke.bolder} solid ${colors.light["interactive-focus"]};
    opacity : ${opacity.visible};
  }`,
  subtle: `
  &:hover {
    opacity : ${opacity[5]};
  }

  &:active {
    opacity : ${opacity[12]};
  }

  &:focus-visible {
    border: ${stroke.bolder} solid ${colors.light["interactive-focus"]};
    opacity : ${opacity.visible};
  }`,
};

const theme = {
  colors,
  typography,
  iconSize,
  gap,
  radius,
  stroke,
  opacity,
  shadow,
  interaction,
};

export default theme;
