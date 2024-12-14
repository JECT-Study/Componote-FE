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
const designTokensPath = path.resolve("./src/designToken/", "componoteSampleTokens.json");
const rawData = fs.readFileSync(designTokensPath, "utf-8");
const designTokensString = JSON.parse(rawData);
const designTokens: DesignTokens = JSON.parse(designTokensString); // 파싱 두번 해야 정상적으로 파싱됨 raw -> string -> json

/**
 * tokens을 가지고 ThemeColors 객체로 변환
 * @param tokens 디자인 토큰 중 하나의 키만 추출
 * @returns ThemeColors
 */
function transformTokensToThemeColors(tokens: ThemeColors) {
  const themes: ThemeColors = {};

  Object.entries(tokens).forEach(([themeName, themeTokens]) => {
    themes[themeName] = {};
    Object.entries(themeTokens).forEach(([key, value]) => {
      // key에서 `color-` prefix 제거 및 dash(-)는 underBar(_)로 수정
      // ex) color-text-content-normal -> text_content_normal
      const tailwindKey = key.replace(/color-/g, "").replace(/-/g, "_");
      themes[themeName][tailwindKey] = value;
    });
  });

  return themes;
}

// TODO: semantic만 변환 및 저장 => 추후 primitive에 대한 논의 필요
const themeColors = transformTokensToThemeColors(designTokens.semantic);

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: themeColors.light,
        dark: themeColors.dark,
      },
    },
  },
  plugins: [],
} satisfies Config;
