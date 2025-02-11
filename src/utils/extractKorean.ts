export function cleanKorean(mixedString: string): string {
  return mixedString.replace(/[^가-힣]/g, "").trim();
}

export function extractKorean(mixedString: string[]) {
  return mixedString.map((name) => name.replace(/[^가-힣]/g, "").trim());
}
