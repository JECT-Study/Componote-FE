import { Chip } from "@/components";
import { SIGNUP_TEXT, STAR_ICON } from "@/constants/messages";
import SignupJobs from "@/types/enum/signupJobs";
import { useSignupUserStore } from "@/store/user/useSignupUserStore";
import * as S from "./SignupJob.style";

export default function SignupJob() {
  const { job, setJob } = useSignupUserStore();

  const JOB_CHIPS = Object.values(SignupJobs).filter(
    (val) => val !== SignupJobs.NONE,
  );

  const handleChipClick = (chip: SignupJobs) => {
    if (job === chip) {
      setJob(SignupJobs.NONE);
      return;
    }
    setJob(chip);
  };

  return (
    <S.SignupJobWrapper>
      <S.SignupJobTitleContainer>
        <S.SignupJobTitleText>
          {SIGNUP_TEXT.job.titleText}
          <S.SignupJobTitleMustIcon>{STAR_ICON}</S.SignupJobTitleMustIcon>
        </S.SignupJobTitleText>
        <S.SignupJobBodyText>{SIGNUP_TEXT.job.bodyText}</S.SignupJobBodyText>
      </S.SignupJobTitleContainer>
      <S.SignupJobChipContainer>
        {JOB_CHIPS.map((chip) => (
          <Chip
            key={`job-${chip}`}
            text={chip}
            onClick={() => handleChipClick(chip)}
            $isSelected={chip === job}
            $size="xl"
          />
        ))}
      </S.SignupJobChipContainer>
    </S.SignupJobWrapper>
  );
}
