import { useState } from "react";
import { Button } from "@/components";
import imageIcon from "@/assets/icons/image-add-line.svg";
import * as S from "./Comment.reply.style";
import { IReplyComment, IUserSection } from "./Comment.types";
import UserSection from "./UserSection";
import { ButtonStyle } from "../Button/Button.types";
import heartIcon from "@/assets/icons/heart-line.svg";
import commentIcon from "@/assets/icons/reply-line.svg";
import modifyIcon from "@/assets/icons/corner-down-left-line.svg";

export default function ReplyComment({
  $src,
  $state: initialstate,
  $isIndented,
  nicknameText,
  jobText,
  dateText,
  $commentImgSrc,
  commentText,
}: IUserSection & IReplyComment) {
  const [state, setState] = useState(initialstate);
  const [editingText, setEditingText] = useState(commentText);

  return (
    <S.ReplyCommentContainer>
      {$isIndented && (
        <S.ReplyIconContainer>
          <S.ReplyIconImg />
        </S.ReplyIconContainer>
      )}
      <S.MainContainer $state={state}>
        <UserSection
          $src={$src}
          $state={state}
          nicknameText={nicknameText}
          jobText={jobText}
          dateText={dateText}
          onEdit={() => setState("editing")}
        />
        <S.ContentContainer>
          <S.ContentBox>
            {state === "editing" ? (
              <S.CommentTextarea
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                placeholder="수정 내용을 입력해 주세요..."
              />
            ) : (
              <S.CommentText>{commentText}</S.CommentText>
            )}
          </S.ContentBox>
          <S.ImageContainer>
            <S.CommentImage $commentImgSrc={$commentImgSrc} />
          </S.ImageContainer>
          <S.ButtonContainer>
            {state === "editing" ? (
              <>
                <S.LeftButtonBox>
                  <Button
                    $size="xs"
                    $buttonType="button"
                    text="이미지 첨부하기"
                    $leftIcon={imageIcon}
                    $buttonStyle={ButtonStyle.EmptySecondary}
                  />
                </S.LeftButtonBox>
                <S.RightButtonBox>
                  <S.CountText>{editingText.length}/1000</S.CountText>
                  <Button
                    $size="xs"
                    $buttonType="button"
                    text="취소하기"
                    $buttonStyle={ButtonStyle.OutlinedSecondary}
                    onClick={() => setState("filled")}
                  />
                  <Button
                    $isDisabled={!editingText.length}
                    $size="xs"
                    $buttonType="button"
                    text="수정 완료"
                    $rightIcon={modifyIcon}
                    $buttonStyle={ButtonStyle.SolidPrimary}
                    onClick={() => setState("filled")}
                  />
                </S.RightButtonBox>
              </>
            ) : (
              <>
                <Button
                  $size="sm"
                  $buttonType="button"
                  text="좋아요"
                  $leftIcon={heartIcon}
                  $buttonStyle={ButtonStyle.EmptyTertiary}
                />
                {!$isIndented && (
                  <Button
                    $size="sm"
                    $buttonType="button"
                    text="대댓글 달기"
                    $leftIcon={commentIcon}
                    $buttonStyle={ButtonStyle.EmptyTertiary}
                  />
                )}
              </>
            )}
          </S.ButtonContainer>
        </S.ContentContainer>
      </S.MainContainer>
    </S.ReplyCommentContainer>
  );
}
