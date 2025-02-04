import styled, { css } from "styled-components";
import { IReplyCommentComponent } from "./Comment.types";
import DESIGN_SYSTEM from "@/styles/designSystem";
import ReplyIcon from "@/assets/icons/corner-down-right-line.svg";

export const ReplyCommentContainer = styled.div`
  display: flex;
  align-items: flex-start;

  width: 35.3125rem;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.sm};
`;

export const ReplyIconContainer = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.md} ${DESIGN_SYSTEM.gap.none}
    ${DESIGN_SYSTEM.gap.none} ${DESIGN_SYSTEM.gap["3xs"]};
`;

export const ReplyIconImg = styled(ReplyIcon)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};

  path {
    fill: ${({ theme }) => theme.light["object-subtler"]};
  }
`;

export const MainContainer = styled.div<IReplyCommentComponent>`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.md} ${DESIGN_SYSTEM.gap.xl};

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};

  background: ${({ theme }) => theme.light["surface-embossed"]};

  ${({ theme, $state }) => {
    if ($state === "editing") {
      return css`
        box-shadow: ${DESIGN_SYSTEM.shadow.raised};
        border: ${DESIGN_SYSTEM.stroke.bold} solid ${theme.light["accent-bold"]};
      `;
    }

    return css`
      border: ${DESIGN_SYSTEM.stroke.normal} solid
        ${theme.light["border-trans-subtle"]};
    `;
  }};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding-left: ${DESIGN_SYSTEM.gap["7xl"]};
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const CommentTextarea = styled.textarea`
  align-self: stretch;
  color: ${({ theme }) => theme.light["object-boldest"]};

  height: 4.5rem;

  border: none;
  resize: none;
  outline: none;

  ${DESIGN_SYSTEM.typography.body.sm};
`;

export const CommentText = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.light["object-boldest"]};

  ${DESIGN_SYSTEM.typography.body.sm};
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  max-height: 12.5rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const CommentImage = styled.div<IReplyCommentComponent>`
  height: 10rem;
  flex: 1 0 0;

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};

  background-image: ${(props) =>
    props.$commentImgSrc ? `url(${props.$commentImgSrc})` : null};

  background-color: #ffeede;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  margin-left: -0.75rem;
`;

export const LeftButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;

  gap: 0.625rem;
`;

export const CountText = styled.span`
  text-align: right;
  color: ${({ theme }) => theme.light["object-subtle"]};

  ${DESIGN_SYSTEM.typography.body.xs};
`;

export const RightButtonBox = styled.div`
  display: flex;
  align-items: center;

  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;
