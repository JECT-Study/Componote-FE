import { Divider } from "@/components";
import {
  Signup as S,
  SignupButton,
  SignupFooter,
  SignupJob,
  SignupProfile,
  SignupTitle,
} from "@/components/Pages";

export default function SignupPage() {
  return (
    <S.SignupWrapper>
      <S.SignupModule>
        <SignupTitle />
        <Divider $stroke="normal" $layout="horizontal" />
        <S.SignupBodyModule>
          <SignupProfile />
          <SignupJob />
          <Divider $stroke="normal" $layout="horizontal" />
          <SignupButton />
        </S.SignupBodyModule>
      </S.SignupModule>
      <SignupFooter />
    </S.SignupWrapper>
  );
}
