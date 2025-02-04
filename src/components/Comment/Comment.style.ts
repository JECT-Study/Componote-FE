import DESIGN_SYSTEM from "@/styles/designSystem";
import styled, { css } from "styled-components";
import { ICommentComponent } from "./Comment.types";

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;

  width: 35.3125rem;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-self: stretch;
  align-items: flex-start;

  width: 2.25rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding-top: ${DESIGN_SYSTEM.gap["2xs"]};
`;

export const CommentInputContainer = styled.div<ICommentComponent>`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.md} ${DESIGN_SYSTEM.gap.xl};

  position: relative;

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  background: ${({ theme }) => theme.light["surface-embossed"]};

  ${({ theme, $state }) => {
    if ($state === "focus") {
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

export const CommentInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 3rem;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const CommentInput = styled.input`
  align-self: stretch;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.light["object-subtler"]};
  }

  ${DESIGN_SYSTEM.typography.body.sm};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  margin-left: -0.7rem;

  gap: ${DESIGN_SYSTEM.gap.md};
`;

export const CountText = styled.span`
  text-align: right;
  color: ${({ theme }) => theme.light["object-subtle"]};

  ${DESIGN_SYSTEM.typography.body.xs};
`;

export const LeftButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;

  gap: 0.625rem;
`;
