"use client";

import * as S from "./Footer.style";
import { FOOTER_TEXT } from "@/constants/messages";
import { Logo } from "../../components";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterSection>
        <S.FooterBox>
          <Logo isFooter={true} />
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
