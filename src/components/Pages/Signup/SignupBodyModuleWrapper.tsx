import * as S from "./Signup.style";

export default function SignupBodyModuleWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.SignupBodyModule>{children}</S.SignupBodyModule>;
}
