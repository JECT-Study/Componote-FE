import { Divider } from "@/components";
import {
  SignupBodyModuleWrapper,
  SignupButton,
  SignupFooter,
  SignupJob,
  SignupModuleWrapper,
  SignupProfile,
  SignupTitle,
  SignupWrapper,
} from "@/components/Pages";

export default function SignupPage() {
  return (
    <SignupWrapper>
      <SignupModuleWrapper>
        <SignupTitle />
        <Divider $stroke="normal" $layout="horizontal" />
        <SignupBodyModuleWrapper>
          <SignupProfile />
          <SignupJob />
          <Divider $stroke="normal" $layout="horizontal" />
          <SignupButton />
        </SignupBodyModuleWrapper>
      </SignupModuleWrapper>
      <SignupFooter />
    </SignupWrapper>
  );
}
