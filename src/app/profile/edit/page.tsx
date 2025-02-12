import { Divider } from "@/components";
import {
  ProfileEditBodyModuleWrapper,
  ProfileEditButton,
  ProfileEditJob,
  ProfileEditModuleWrapper,
  ProfileEditProfile,
  ProfileEditWrapper,
  SignupFooter,
  SignupTitle,
} from "@/components/Pages";
import { PROFILE_EDIT_TEXT } from "@/constants/messages";

export default function Edit() {
  return (
    <ProfileEditWrapper>
      <ProfileEditModuleWrapper>
        <SignupTitle titleText={PROFILE_EDIT_TEXT.titleText} />
        <Divider $stroke="normal" $layout="horizontal" />
        <ProfileEditBodyModuleWrapper>
          <ProfileEditProfile />
          <ProfileEditJob />
          <Divider $stroke="normal" $layout="horizontal" />
          <ProfileEditButton />
        </ProfileEditBodyModuleWrapper>
      </ProfileEditModuleWrapper>
      <SignupFooter />
    </ProfileEditWrapper>
  );
}
