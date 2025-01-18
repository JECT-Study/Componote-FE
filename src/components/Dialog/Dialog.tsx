import DialogBasic from "./Dialog.Basic";
import DialogComplete from "./Dialog.Complete";
import DialogEmailVerification from "./Dialog.EmailVerification";
import DialogLogin from "./Dialog.Login";
import DialogReport from "./Dialog.Report";
import DialogVerification from "./Dialog.Verification";
import * as S from "./Dialog.style";

export default function Dialog({ children }: { children: React.ReactNode }) {
  return (
    <S.DimmedScreen>
      <S.DialogWrapper>{children}</S.DialogWrapper>
    </S.DimmedScreen>
  );
}

Dialog.Basic = DialogBasic;
Dialog.Login = DialogLogin;
Dialog.Report = DialogReport;
Dialog.EmailVerification = DialogEmailVerification;
Dialog.Verification = DialogVerification;
Dialog.Complete = DialogComplete;
