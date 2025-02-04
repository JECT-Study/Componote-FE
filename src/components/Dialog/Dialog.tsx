import { useRouter } from "next/navigation";
import DialogBasic from "./Dialog.Basic";
import DialogComplete from "./Dialog.Complete";
import DialogEmailVerification from "./Dialog.EmailVerification";
import DialogLogin from "./Dialog.Login";
import DialogReport from "./Dialog.Report";
import DialogVerification from "./Dialog.Verification";
import * as S from "./Dialog.style";

export default function Dialog({
  children,
  router,
}: {
  children: React.ReactNode;
  router: ReturnType<typeof useRouter>;
}) {
  const handleDimmedClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.back();
  };

  const handleDialogClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <S.DimmedScreen onClick={handleDimmedClick}>
      <S.DialogWrapper onClick={handleDialogClick}>{children}</S.DialogWrapper>
    </S.DimmedScreen>
  );
}

Dialog.Basic = DialogBasic;
Dialog.Login = DialogLogin;
Dialog.Report = DialogReport;
Dialog.EmailVerification = DialogEmailVerification;
Dialog.Verification = DialogVerification;
Dialog.Complete = DialogComplete;
