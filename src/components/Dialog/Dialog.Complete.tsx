import BadgeLabel from "../Badge/Badge.Label";
import { BadgeLabelFeedback } from "../Badge/Badge.types";
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
            <BadgeLabel
              text="1"
              $variant="labelOnly"
              $feedback={BadgeLabelFeedback.NONE}
              $style="outlined"
              $size="xs"
            />
            <span>내가 작성한 댓글 좋아요, 대댓글 알림</span>
          </S.DialogCompleteCardContainer>
        </S.DialogCompleteCardWrap>
        <S.DialogCompleteCardWrap>
          <S.DialogCompleteCardContainer>
            <BadgeLabel
              text="2"
              $variant="labelOnly"
              $feedback={BadgeLabelFeedback.NONE}
              $style="outlined"
              $size="xs"
            />
            <span>서비스 업데이트, 공지사항 알림</span>
          </S.DialogCompleteCardContainer>
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
