import { Avatar, Button, ContextMenu } from "@/components";
import moreIcon from "@/assets/icons/more-fill.svg";
import { useState } from "react";
import { ButtonStyle } from "../Button/Button.types";
import * as S from "./UserSection.style";
import { IUserSection } from "./Comment.types";

export default function UserSection({
  $src,
  $state,
  nicknameText,
  jobText,
  dateText,
  onEdit,
}: IUserSection & { onEdit: () => void }) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuItemLabels = ["수정하기", "신고하기", "삭제하기"];

  return (
    <S.UserSectionContainer>
      <S.MainContainer>
        <Avatar $src={$src} $badgeVisible={false} $size="lg" />
        <S.UserInfoContainer>
          <S.UserInfoBox>
            <S.UserNameText>{nicknameText}</S.UserNameText>
            <S.JobText>{jobText}</S.JobText>
          </S.UserInfoBox>
          <S.BodyText $state={$state}>
            {$state === "editing" ? "현재 수정 중" : dateText}
          </S.BodyText>
        </S.UserInfoContainer>
      </S.MainContainer>
      <S.ButtonBox>
        {$state === "filled" && (
          <Button
            $size="sm"
            $buttonType="iconButton"
            $leftIcon={moreIcon}
            $buttonStyle={ButtonStyle.EmptyTertiary}
            onClick={() => setIsContextMenuOpen((prev) => !prev)}
          />
        )}
        {$state === "filled"
          ? isContextMenuOpen && (
              <ContextMenu $width="8.75rem">
                {contextMenuItemLabels.map((label) => (
                  <ContextMenu.Item
                    key={label}
                    labelText={label}
                    $variant="labelOnly"
                    $size="sm"
                    $feedback={label === "삭제하기" ? "negative" : "normal"}
                    onClick={label === "수정하기" ? onEdit : undefined}
                  />
                ))}
              </ContextMenu>
            )
          : null}
      </S.ButtonBox>
    </S.UserSectionContainer>
  );
}
