export default function validateNickname(input: string): boolean {
  // 빈 문자열 체크
  if (!input) return false;

  // 길이 체크 (10자 이내)
  if (input.length >= 10) return false;

  // 한글, 영문, 숫자만 허용하는 정규식
  const regex = /^[가-힣a-zA-Z0-9]+$/;

  return regex.test(input);
}
