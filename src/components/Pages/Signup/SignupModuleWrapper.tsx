import * as S from "./Signup.style";

export default function SignupModuleWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.SignupModule>{children}</S.SignupModule>;
}
