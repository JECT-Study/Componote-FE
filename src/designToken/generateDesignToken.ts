/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

// 가져올 color token 파일 경로
const designTokensPath = path.resolve(
  "./src/designToken/color-tokens(mode).json"
);
// color token을 parsing한 js 파일로 저장할 경로
const outputPath = path.resolve("./src/designToken/designTokens.js");

const rawData = fs.readFileSync(designTokensPath, "utf-8");
const designTokens = JSON.parse(JSON.parse(rawData)); // 파싱 두번 해야 함

const jsContent = `export default ${JSON.stringify(designTokens, null, 2)};`;

fs.writeFileSync(outputPath, jsContent);
