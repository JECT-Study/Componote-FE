import fs from "fs";
import path from "path";
import type { Config } from "tailwindcss";

/**
 * tailwind에서 쓸 컬러 객체의 interface입니다.
 * ex) "light": {
 *   "text_theme_green_subtle": '#009843',
 * }
 */
interface ThemeColors {
  [theme: string]: {
    [key: string]: string;
  };
}

/**
 * design token json파일이 ThemeColors를 가지고 있는 형식입니다.
 * ex) "semantic" : {
 *   "light": {
 *     "text_theme_green_subtle": '#009843',
 *   }
 * }
 */
interface DesignTokens {
  [key: string]: ThemeColors;
}

// TODO: 현재 파일 가져오는 주소 sample파일 주소로 되어있음 => 추후 최종 파일 받으면 경로 수정하기
const designTokensPath = path.resolve(
  "./src/designToken/",
  "color-tokens(mode).json"
);
const rawData = fs.readFileSync(designTokensPath, "utf-8");
const designTokensString = JSON.parse(rawData);
const designTokens: DesignTokens = JSON.parse(designTokensString); // 파싱 두번 해야 정상적으로 파싱됨 raw -> string -> json

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
      },
      colors: {
        light: designTokens.semantic.light,
        dark: designTokens.semantic.dark,
        "alpha-1": "rgba(9, 11, 18, 0.01)",
        "alpha-2": "rgba(9, 11, 18, 0.02)",
        "alpha-3": "rgba(9, 11, 18, 0.03)",
        "alpha-4": "rgba(9, 11, 18, 0.04)",
        "alpha-5": "rgba(9, 11, 18, 0.05)",
        "alpha-6": "rgba(9, 11, 18, 0.06)",
        "alpha-7": "rgba(9, 11, 18, 0.07)",
        "alpha-8": "rgba(9, 11, 18, 0.08)",
        "alpha-9": "rgba(9, 11, 18, 0.09)",
        "alpha-10": "rgba(9, 11, 18, 0.1)",
        "alpha-11": "rgba(9, 11, 18, 0.11)",
        "alpha-12": "rgba(9, 11, 18, 0.12)",
        "alpha-13": "rgba(9, 11, 18, 0.13)",
        "alpha-14": "rgba(9, 11, 18, 0.14)",
        "alpha-15": "rgba(9, 11, 18, 0.15)",
        "alpha-16": "rgba(9, 11, 18, 0.16)",
      },
      borderRadius: {
        none: "0px", // radius/none
        "2xs": "4px", // radius/2xs
        xs: "8px", // radius/xs
        sm: "12px", // radius/sm
        md: "16px", // radius/md
        lg: "24px", // radius/lg
        circle: "99999px", // radius/circle
      },
      gap: {
        none: "0px", // gap/none
        "7xs": "1px", // gap/7xs
        "6xs": "2px", // gap/6xs
        "5xs": "4px", // gap/5xs
        "4xs": "6px", // gap/4xs
        "3xs": "8px", // gap/3xs
        "2xs": "10px", // gap/2xs
        xs: "12px", // gap/xs
        sm: "14px", // gap/sm
        md: "16px", // gap/md
        lg: "18px", // gap/lg
        xl: "20px", // gap/xl
        "2xl": "24px", // gap/2xl
        "3xl": "28px", // gap/3xl
        "4xl": "32px", // gap/4xl
        "5xl": "36px", // gap/5xl
        "6xl": "40px", // gap/6xl
        "7xl": "48px", // gap/7xl
        "8xl": "56px", // gap/8xl
        "9xl": "72px", // gap/9xl
      },
      strokeWidth: {
        none: "0px", // stroke/none
        normal: "1px", // stroke/normal
        bold: "2px", // stroke/bold
        bolder: "4px", // stroke/bolder
        boldest: "8px", // stroke/boldest
      },
      opacity: {
        invisible: "0", // opacity/invisible
        5: "0.05", // opacity/05
        8: "0.08", // opacity/08
        12: "0.12", // opacity/12
        16: "0.16", // opacity/16
        22: "0.22", // opacity/22
        28: "0.28", // opacity/28
        35: "0.35", // opacity/35
        43: "0.43", // opacity/43
        52: "0.52", // opacity/52
        63: "0.63", // opacity/63
        75: "0.75", // opacity/75
        88: "0.88", // opacity/88
        96: "0.96", // opacity/96
        visible: "1", // opacity/visible
      },
    },
  },
  plugins: [],
} satisfies Config;
