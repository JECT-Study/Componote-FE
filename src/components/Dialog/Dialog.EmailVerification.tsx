import sampleImage from "@/assets/images/sampleImage.png";
import Image from "next/image";
import * as S from "./Dialog.EmailVerification.style";
import Button from "../Button/Button";
import { ButtonStyle } from "../Button/Button.types";

export default function DialogEmailVerification() {
  return (
    <S.DialogEmailVerificationWrapper>
      <S.DialogEmailVerificationTitleContainer>
        <S.DialogEmailVerificationImageContainer>
          <Image src={sampleImage} alt="sampleImage" />
        </S.DialogEmailVerificationImageContainer>
        <S.DialogEmailVerificationTitleWrap>
          <S.DialogEmailVerificationTitleText>
            컴포노트의 다양한 소식을 받아보세요!
          </S.DialogEmailVerificationTitleText>
          <S.DialogEmailVerificationBodyText>
            컴포노트의 다양한 소식을 이메일로 빠르게 알려드려요.
          </S.DialogEmailVerificationBodyText>
        </S.DialogEmailVerificationTitleWrap>
      </S.DialogEmailVerificationTitleContainer>
      <S.DialogEmailVerificationButtonContainer>
        <Button
          text="나중에 할게요"
          $buttonStyle={ButtonStyle.OutlinedSecondary}
          $size="md"
        />
        <Button
          text="이메일 인증하기"
          $buttonStyle={ButtonStyle.SolidBrand}
          $size="md"
        />
      </S.DialogEmailVerificationButtonContainer>
    </S.DialogEmailVerificationWrapper>
  );
}
