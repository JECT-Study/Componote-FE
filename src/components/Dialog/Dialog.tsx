import DialogBasic from "./Dialog.Basic";
import DialogEmailVerification from "./Dialog.EmailVerification";
import DialogLogin from "./Dialog.Login";
import DialogReport from "./Dialog.Report";
import DialogVerification from "./Dialog.Verification";
import * as S from "./Dialog.style";

export default function Dialog({ children }: { children: React.ReactNode }) {
  return <S.DialogWrapper>{children}</S.DialogWrapper>;
}

Dialog.Basic = DialogBasic;
Dialog.Login = DialogLogin;
Dialog.Report = DialogReport;
Dialog.EmailVerification = DialogEmailVerification;
Dialog.Verification = DialogVerification;
