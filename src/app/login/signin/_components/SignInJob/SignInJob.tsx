"use client";

import { Chip } from "@/components";
import { useState } from "react";
import { SIGNIN_TEXT, STAR_ICON } from "@/constants/messages";
import { SIGNIN_CHIPS } from "@/constants/chips";
import * as S from "./SignInJob.style";

export default function SignInJob() {
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

  return (
    <S.SigninJobWrapper>
      <S.SigninJobTitleContainer>
        <S.SigninJobTitleText>
          {SIGNIN_TEXT.job.titleText}
          <S.SigninJobTitleMustIcon>{STAR_ICON}</S.SigninJobTitleMustIcon>
        </S.SigninJobTitleText>
        <S.SigninJobBodyText>{SIGNIN_TEXT.job.bodyText}</S.SigninJobBodyText>
      </S.SigninJobTitleContainer>
      <S.SigninJobChipContainer>
        {SIGNIN_CHIPS.map((chip, i) => (
          <Chip
            text={chip}
            onClick={() => setSelectedChip(i)}
            $isSelected={i === selectedChip}
            key={`${chip}i`}
            $size="xl"
          />
        ))}
      </S.SigninJobChipContainer>
    </S.SigninJobWrapper>
  );
}
