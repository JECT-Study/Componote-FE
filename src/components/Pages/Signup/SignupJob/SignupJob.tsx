"use client";

import { Chip } from "@/components";
import { useState } from "react";
import { SIGNUP_TEXT, STAR_ICON } from "@/constants/messages";
import { SIGNUP_CHIPS } from "@/constants/chips";
import * as S from "./SignupJob.style";

export default function SignupJob() {
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

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
        {SIGNUP_CHIPS.map((chip, i) => (
          <Chip
            text={chip}
            onClick={() => setSelectedChip(i)}
            $isSelected={i === selectedChip}
            key={`${chip}i`}
            $size="xl"
          />
        ))}
      </S.SignupJobChipContainer>
    </S.SignupJobWrapper>
  );
}
