import styled, { css } from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { IUserSectionComponent } from "./Comment.types";

export const UserSectionContainer = styled.div`
  display: flex;
  align-items: center;

  width: 32.8125rem;

  gap: ${DESIGN_SYSTEM.gap.lg};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const UserNameText = styled.span`
  color: ${({ theme }) => theme.light["object-hero"]};
  ${DESIGN_SYSTEM.typography.label.bold.sm};
`;

export const JobText = styled.span`
  color: ${({ theme }) => theme.light["object-normal"]};
  ${DESIGN_SYSTEM.typography.body["2xs"]};
`;

export const BodyText = styled.span<IUserSectionComponent>`
  ${({ theme, $status }) => {
    if ($status === "editing") {
      return css`
        color: ${theme.light["feedback-information"]};
      `;
    }

    return css`
      color: ${theme.light["object-subtle"]};
    `;
  }}

  ${DESIGN_SYSTEM.typography.body["2xs"]};
`;
