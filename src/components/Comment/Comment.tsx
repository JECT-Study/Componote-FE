import { useState, useEffect } from "react";
import { Avatar, Button } from "@/components";
import imageIcon from "@/assets/icons/image-add-line.svg";
import commentIcon from "@/assets/icons/corner-down-left-line.svg";
import DisabledInteraction from "./CommentInteraction";
import * as S from "./Comment.style";
import { ButtonStyle } from "../Button/Button.types";
import { IComment } from "./Comment.types";

export default function Comment({ $src, $isDisabled = false }: IComment) {
  const [, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [$state, setState] = useState<IComment["$state"]>("enabled");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    if (newInputValue.length <= 40) setInputValue(newInputValue);
  };

  useEffect(() => {
    if ($isDisabled) setState("disabled");
    else setState("enabled");
  }, [$isDisabled]);

  const handleFocus = () => {
    setIsFocused(true);
    setState("focus");
  };

  const handleBlur = () => {
    setIsFocused(false);
    setState("enabled");
  };

  return (
    <S.CommentContainer>
      <S.AvatarContainer>
        <Avatar $src={$src} $badgeVisible={false} $size="lg" />
      </S.AvatarContainer>
      <S.CommentInputContainer $state={$state}>
        <S.CommentInputBox>
          <S.CommentInput
            value={inputValue}
            placeholder={
              $state === "disabled"
                ? "현재 댓글을 달 수 없는 상태예요."
                : "이 컴포넌트에 대한 경험이나 의견을 들려주세요..."
            }
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={$isDisabled}
          />
        </S.CommentInputBox>
        <S.ButtonContainer>
          <S.LeftButtonBox>
            <Button
              $size="xs"
              $buttonType="button"
              text="이미지 첨부하기"
              $leftIcon={imageIcon}
              $buttonStyle={ButtonStyle.EmptySecondary}
            />
          </S.LeftButtonBox>
          {inputValue.length ? (
            <S.CountText>{inputValue.length}/1000</S.CountText>
          ) : null}
          <Button
            $isDisabled={!inputValue.length}
            $size="xs"
            $buttonType="button"
            text="댓글 달기"
            $rightIcon={commentIcon}
            $buttonStyle={ButtonStyle.SolidPrimary}
          />
        </S.ButtonContainer>
        {$state === "disabled" && <DisabledInteraction />}
      </S.CommentInputContainer>
    </S.CommentContainer>
  );
}
