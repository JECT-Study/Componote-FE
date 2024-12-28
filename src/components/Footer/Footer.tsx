"use client";

import FOOTER_TEXT from "@/constants/messages";
import { Logo } from "@/components";
import * as S from "./Footer.style";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterSection>
        <S.FooterBox>
          <Logo $isFooter />
          <S.TermsAndPolicyAnchor href="/">
            {FOOTER_TEXT.termsText}
          </S.TermsAndPolicyAnchor>
          <S.TermsAndPolicyAnchor href="/">
            {FOOTER_TEXT.policyText}
          </S.TermsAndPolicyAnchor>
        </S.FooterBox>
        <S.ReservedText>{FOOTER_TEXT.reservedText}</S.ReservedText>
      </S.FooterSection>
    </S.FooterContainer>
  );
}
