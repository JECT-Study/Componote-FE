module.exports = {
  parser: "@typescript-eslint/parser", // TypeScript 구문을 파싱할 파서 설정
  parserOptions: {
    project: "./tsconfig.json", // TypeScript 프로젝트 설정 파일 경로
  },
  extends: [
    "airbnb", // Airbnb 스타일 규칙 사용
    "airbnb-typescript", // TypeScript용 Airbnb 규칙 사용
    "plugin:@typescript-eslint/recommended", // TypeScript에 대한 권장 ESLint 규칙 사용
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
  ],
  plugins: [
    "@typescript-eslint", // TypeScript 관련 ESLint 플러그인
  ],
  rules: {
    // 규칙 추가
    "react/require-default-props": [
      "warn",
      {
        ignoreFunctionalComponents: true,
      },
    ],
  },
};
