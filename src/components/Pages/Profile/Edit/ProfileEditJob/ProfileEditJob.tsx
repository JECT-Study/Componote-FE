import { Chip } from "@/components";
import { PROFILE_EDIT_TEXT, STAR_ICON } from "@/constants/messages";
import SignupJobs from "@/types/enum/signupJobs";
import { useProfileEditStore } from "@/hooks/store/useProfileEditStore";
import getJobKey from "@/utils/getJobKey";
import { useUserInfoStore } from "@/hooks/store/useUserInfoStore";
import { useState } from "react";
import * as S from "./ProfileEditJob.style";

export default function ProfileEditJob() {
  const { userInfo } = useUserInfoStore();
  const { profileInfo, setProfileInfo } = useProfileEditStore();
  const [job, setJob] = useState<keyof typeof SignupJobs>(userInfo.job);

  const JOB_CHIPS = Object.values(SignupJobs).filter(
    (val) => val !== SignupJobs.NONE,
  );

  const handleChipClick = (chip: SignupJobs) => {
    if (profileInfo.job === getJobKey(chip)) {
      setJob(getJobKey(SignupJobs.NONE));
      setProfileInfo({ ...profileInfo, job: "NONE" });
      return;
    }
    setJob(getJobKey(chip));
    setProfileInfo({ ...profileInfo, job: getJobKey(chip) });
  };

  return (
    <S.ProfileEditJobWrapper>
      <S.ProfileEditJobTitleContainer>
        <S.ProfileEditJobTitleText>
          {PROFILE_EDIT_TEXT.job.titleText}
          <S.ProfileEditJobTitleMustIcon>
            {STAR_ICON}
          </S.ProfileEditJobTitleMustIcon>
        </S.ProfileEditJobTitleText>
        <S.ProfileEditJobBodyText>
          {PROFILE_EDIT_TEXT.job.bodyText}
        </S.ProfileEditJobBodyText>
      </S.ProfileEditJobTitleContainer>
      <S.ProfileEditJobChipContainer>
        {JOB_CHIPS.map((chip) => (
          <Chip
            key={`job-${chip}`}
            text={chip}
            onClick={() => {
              handleChipClick(chip);
            }}
            $isSelected={getJobKey(chip) === job}
            $size="xl"
          />
        ))}
      </S.ProfileEditJobChipContainer>
    </S.ProfileEditJobWrapper>
  );
}
