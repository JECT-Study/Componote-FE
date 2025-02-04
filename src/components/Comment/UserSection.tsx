import { Avatar, Button } from "@/components";
import moreIcon from "@/assets/icons/more-fill.svg";
import { ButtonStyle } from "../Button/Button.types";
import * as S from "./UserSection.style";
import { IUserSection } from "./Comment.types";

export default function UserSection({
  $src,
  $status,
  nicknameText,
  jobText,
  dateText,
}: IUserSection) {
  return (
    <S.UserSectionContainer>
      <S.MainContainer>
        <Avatar $src={$src} $badgeVisible={false} $size="lg" />
        <S.UserInfoContainer>
          <S.UserInfoBox>
            <S.UserNameText>{nicknameText}</S.UserNameText>
            <S.JobText>{jobText}</S.JobText>
          </S.UserInfoBox>
          <S.BodyText $status={$status}>
            {$status === "editing" ? "현재 수정 중" : dateText}
          </S.BodyText>
        </S.UserInfoContainer>
      </S.MainContainer>
      {$status === "filled" && (
        <Button
          $size="sm"
          $buttonType="iconButton"
          $leftIcon={moreIcon}
          $buttonStyle={ButtonStyle.EmptyTertiary}
        />
      )}
    </S.UserSectionContainer>
  );
}
