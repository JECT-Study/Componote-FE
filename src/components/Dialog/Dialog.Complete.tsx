import Image from "next/image";
import sampleImage from "@/assets/images/dialogCompleteSampleImage.png";
import Button from "../Button/Button";
import { ButtonStyle } from "../Button/Button.types";
import * as S from "./Dialog.Complete.style";

export default function DialogComplete() {
  return (
    <S.DialogCompleteWrapper>
      <S.DialogCompleteTitleContainer>
        <S.DialogCompleteTitleText>이메일 인증 완료</S.DialogCompleteTitleText>
        <S.DialogCompleteBodyText>
          앞으로 아래와 같은 알림들을 이메일로 받아 보실 수 있어요.
        </S.DialogCompleteBodyText>
      </S.DialogCompleteTitleContainer>
      <S.DialogCompleteSection>
        <S.DialogCompleteCardWrap>
          <S.DialogCompleteCardContainer>
            내가 작성한 댓글 좋아요, 대댓글 알림
          </S.DialogCompleteCardContainer>
          <S.DialogCompleteImageContainer>
            <Image src={sampleImage} alt="sampleImage" />
          </S.DialogCompleteImageContainer>
        </S.DialogCompleteCardWrap>
      </S.DialogCompleteSection>
      <S.DialogCompleteButtonContainer>
        <Button
          text="확인"
          $buttonStyle={ButtonStyle.SolidPrimary}
          $size="md"
        />
      </S.DialogCompleteButtonContainer>
    </S.DialogCompleteWrapper>
  );
}
