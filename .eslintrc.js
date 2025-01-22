module.exports = {
  parser: "@typescript-eslint/parser", // TypeScript 구문을 파싱할 파서 설정
  parserOptions: {
    project: "./tsconfig.json", // TypeScript 프로젝트 설정 파일 경로
    tsconfigRootDir: __dirname,
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
        "import/no-extraneous-dependencies": [
          "error",
          { bundledDependencies: false },
          { includeTypes: true },
        ],
      },
    },
  ],
};
