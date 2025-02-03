module.exports = {
  parser: "@typescript-eslint/parser", // 파서를 TypeScript 파서로 설정
  parserOptions: {
    project: "./tsconfig.json", // tsconfig 파일 경로 설정
    tsconfigRootDir: __dirname, // tsconfig 루트 디렉토리 설정
    sourceType: "module", // 모듈 형식 설정
  },

  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "next/typescript",
    "prettier",
    "plugin:storybook/recommended",
  ],
  plugins: [
    "@typescript-eslint", // TypeScript 관련 ESLint 플러그인
  ],
  rules: {
    "react/require-default-props": [
      "warn",
      {
        ignoreFunctionalComponents: true,
      },
    ],
  },
  overrides: [
    {
      files: [
        "src/components/**/*.js",
        "src/components/**/*.ts",
        "src/components/**/*.tsx",
      ], // components 디렉토리의 파일에만 적용
      rules: {
        "import/no-cycle": "off",
        "import/named": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
