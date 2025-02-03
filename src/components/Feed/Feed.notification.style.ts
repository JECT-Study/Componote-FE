import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";
import ReplyIcon from "@/assets/icons/corner-down-right-line.svg";
import { IconWrapper } from "@/utils/IconWrapper";

const CommonIconStyle = styled(IconWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const NotificationFeedContainer = styled.div`
  display: flex;
  align-items: flex-start;

  width: 50rem;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;

  width: 100%;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding-left: ${DESIGN_SYSTEM.gap["7xl"]};
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding-top: ${DESIGN_SYSTEM.gap.xs};
`;

export const NotificationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;

  width: 50rem;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.md} ${DESIGN_SYSTEM.gap.xl};

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};

  background: ${({ theme }) => theme.light["surface-embossed"]};

  &:hover {
    box-shadow: ${DESIGN_SYSTEM.shadow.raised};
  }

  &:focus-visible {
    ${({ theme }) => DESIGN_SYSTEM.focus(theme)}
  }
`;

export const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  width: 46.25rem;

  gap: ${DESIGN_SYSTEM.gap["4xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const TitleTopBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const NotificationTextBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  gap: ${DESIGN_SYSTEM.gap["4xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const CommentIconImg = styled(CommonIconStyle)`
  width: 1.04169rem;
  height: 1.04169rem;

  path {
    fill: ${({ theme }) => theme.light["object-normal"]};
  }
`;

export const HeartIconImg = styled(CommonIconStyle)`
  width: 1.125rem;
  height: 1.125rem;

  path {
    fill: ${({ theme }) => theme.light["custom-rose"]};
  }
`;

export const NotificationText = styled.span`
  color: ${({ theme }) => theme.light["object-hero"]};
  ${DESIGN_SYSTEM.typography.label.md};
`;

export const TimeText = styled.span`
  color: ${({ theme }) => theme.light["object-subtle"]};
  ${DESIGN_SYSTEM.typography.body["2xs"]};
`;

export const BodyTextBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ComponentNameText = styled.span`
  color: ${({ theme }) => theme.light["feedback-information"]};
  ${DESIGN_SYSTEM.typography.label.bold.sm};
`;

export const MyCommentText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 0.1rem;
  color: ${({ theme }) => theme.light["object-normal"]};

  ${DESIGN_SYSTEM.typography.body.xs};
`;

export const ReplyBox = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ReplyIconImg = styled(ReplyIcon)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};

  path {
    fill: ${({ theme }) => theme.light["object-subtle"]};
  }
`;

export const ReplyText = styled.span`
  width: 44.5rem;
  color: ${({ theme }) => theme.light["object-boldest"]};

  ${DESIGN_SYSTEM.typography.body.sm}
`;
