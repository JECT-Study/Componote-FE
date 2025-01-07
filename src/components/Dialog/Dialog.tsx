import DialogBasic from "./Dialog.Basic";
import DialogLogin from "./Dialog.Login";
import * as S from "./Dialog.style";

export default function Dialog({ children }: { children: React.ReactNode }) {
  return <S.DialogWrapper>{children}</S.DialogWrapper>;
}

Dialog.Basic = DialogBasic;
Dialog.Login = DialogLogin;
