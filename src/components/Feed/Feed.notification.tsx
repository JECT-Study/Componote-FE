import { Avatar } from "@/components";
import HeartIcon from "@/assets/icons/heart-fill.svg";
import CommentIcon from "@/assets/icons/reply-line.svg";

import * as S from "./Feed.notification.style";
import { INotificationFeed } from "./Feed.types";

export default function NotifiactionFeed({
  $src,
  $variant,
  userName,
  replyText,
  notificationTime,
  componentName,
  myCommentText,
}: INotificationFeed) {
  return (
    <S.NotificationFeedContainer>
      <S.ContentContainer>
        <S.AvatarContainer>
          <Avatar $src={$src} $badgeVisible={false} $size="lg" />
        </S.AvatarContainer>
        <S.NotificationContainer>
          <S.NotificationBox>
            <S.TitleSection>
              <S.TitleTopBox>
                <S.NotificationTextBox>
                  {$variant === "reply" ? (
                    <S.CommentIconImg IconComponent={CommentIcon} />
                  ) : (
                    <S.HeartIconImg IconComponent={HeartIcon} />
                  )}
                  <S.NotificationText>
                    {$variant === "reply"
                      ? `${userName}님이 내가 작성한 댓글에 대댓글을 달았어요.`
                      : `${userName}님이 내가 작성한 댓글에 좋아요를 눌렀어요.`}
                  </S.NotificationText>
                </S.NotificationTextBox>
                <S.TimeText>{notificationTime} 전</S.TimeText>
              </S.TitleTopBox>
              <S.BodyTextBox>
                <S.ComponentNameText>{componentName}</S.ComponentNameText>
                <S.MyCommentText>{myCommentText}</S.MyCommentText>
              </S.BodyTextBox>
            </S.TitleSection>
            {$variant === "reply" && (
              <S.ReplyBox>
                <S.ReplyIconImg />
                <S.ReplyText>{replyText}</S.ReplyText>
              </S.ReplyBox>
            )}
          </S.NotificationBox>
        </S.NotificationContainer>
      </S.ContentContainer>
    </S.NotificationFeedContainer>
  );
}
