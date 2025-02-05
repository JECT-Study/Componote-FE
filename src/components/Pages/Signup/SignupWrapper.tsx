import * as S from "./Signup.style";

export default function SignupWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.SignupWrapper>{children}</S.SignupWrapper>;
}
