import { Chip } from "@/components";
import { PROFILE_EDIT_TEXT, STAR_ICON } from "@/constants/messages";
import SignupJobs from "@/types/enum/signupJobs";
// import { useSignupUserStore } from "@/hooks/store/useSignupUserStore";
import * as S from "./ProfileEditJob.style";

export default function ProfileEditJob() {
  // const { job, setJob } = useSignupUserStore();

  const JOB_CHIPS = Object.values(SignupJobs).filter(
    (val) => val !== SignupJobs.NONE
  );

  // const handleChipClick = (chip: SignupJobs) => {
  //   if (job === chip) {
  //     setJob(SignupJobs.NONE);
  //     return;
  //   }
  //   setJob(chip);
  // };

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
              // handleChipClick(chip)
            }}
            // $isSelected={chip === job}
            $size="xl"
          />
        ))}
      </S.ProfileEditJobChipContainer>
    </S.ProfileEditJobWrapper>
  );
}
