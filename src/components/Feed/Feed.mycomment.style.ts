import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import ReplyIcon from "@/assets/icons/corner-down-right-line.svg";

export const MyCommentFeedContainer = styled.div`
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

export const CommentSection = styled.section`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;

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

export const AvatarContainer = styled.div`
  display: flex;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding-top: ${DESIGN_SYSTEM.gap.xs};
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const CommentTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const LeftBox = styled.div`
  display: flex;
  gap: ${DESIGN_SYSTEM.gap.xs};
`;

export const ComponentNameText = styled.span`
  flex: 1 0 0;
  color: ${({ theme }) => theme.light["feedback-information"]};

  ${DESIGN_SYSTEM.typography.label.bold.sm};
`;

export const OtherPeopleComemntText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.light["object-normal"]};

  ${DESIGN_SYSTEM.typography.body.xs}
`;

export const DateText = styled.span`
  color: ${({ theme }) => theme.light["object-subtle"]};
  ${DESIGN_SYSTEM.typography.body["2xs"]};
`;

export const CommentBodyBox = styled.div`
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

export const CommentBodyText = styled.span`
  width: 44.5rem;
  color: ${({ theme }) => theme.light["object-boldest"]};

  ${DESIGN_SYSTEM.typography.body.sm}
`;
