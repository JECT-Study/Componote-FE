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
  "colorTokens(mode).json"
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
      colors: {
        light: designTokens.semantic.light,
        dark: designTokens.semantic.dark,
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
    },
  },
  plugins: [],
} satisfies Config;
