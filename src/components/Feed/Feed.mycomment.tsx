import Avatar from "../Avatar/Avatar";
import * as S from "./Feed.mycomment.style";
import { IMyComponentFeed } from "./Feed.types";

export default function MyCommentFeed({
  $src,
  $variant,
  componentName,
  bodyText,
  dateText,
  otherPeopleText,
}: IMyComponentFeed) {
  return (
    <S.MyCommentFeedContainer>
      <S.ContentContainer>
        <S.AvatarContainer>
          <Avatar $src={$src} $badgeVisible={false} $size="lg" />
        </S.AvatarContainer>
        <S.CommentSection>
          <S.CommentBox>
            <S.CommentTitleBox>
              <S.LeftBox>
                <S.ComponentNameText>{componentName}</S.ComponentNameText>
                {$variant === "reply" && (
                  <S.OtherPeopleComemntText>
                    {otherPeopleText}
                  </S.OtherPeopleComemntText>
                )}
              </S.LeftBox>
              <S.DateText>{dateText}</S.DateText>
            </S.CommentTitleBox>
            <S.CommentBodyBox>
              {$variant === "reply" && <S.ReplyIconImg />}
              <S.CommentBodyText>{bodyText}</S.CommentBodyText>
            </S.CommentBodyBox>
          </S.CommentBox>
        </S.CommentSection>
      </S.ContentContainer>
    </S.MyCommentFeedContainer>
  );
}
