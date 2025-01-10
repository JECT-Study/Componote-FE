"use client";

import { Chip } from "@/components";
import { useState } from "react";
import * as S from "./SignInJob.style";

export default function SignInJob() {
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

  const chips = ["기획자", "개발자", "디자이너", "마케터", "기타 직군"];
  return (
    <S.SigninJobWrapper>
      <S.SigninJobTitleContainer>
        <S.SigninJobTitleText>
          직군을 선택해 주세요.
          <S.SigninJobTitleMustIcon>*</S.SigninJobTitleMustIcon>
        </S.SigninJobTitleText>
        <S.SigninJobBodyText>
          여러 직군을 겸하고 계신다면, 가장 가까운 직군을 골라주세요.
        </S.SigninJobBodyText>
      </S.SigninJobTitleContainer>
      <S.SigninJobChipContainer>
        {chips.map((chip, i) => (
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
