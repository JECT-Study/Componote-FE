import styled, { css } from "styled-components";
import { IPaginationItemComponent } from "./Pagination.types";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const PaginationItemContainer = styled.div<IPaginationItemComponent>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  position: relative;

  height: 1.375rem;
  min-width: 1.375rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none} ${DESIGN_SYSTEM.gap["5xs"]};

  border-radius: ${DESIGN_SYSTEM.radius["2xs"]};

  color: ${({ theme }) => theme.light["object-subtle"]};

  ${({ theme, $isActivated }) => {
    if ($isActivated) {
      return css`
        color: ${theme.light["object-hero"]};
        background: ${theme.light["accent-subtler"]};
      `;
    }
  }}
`;

export const LabelText = styled.span`
  text-align: center;
  padding-top: 0.0875rem;

  ${DESIGN_SYSTEM.typography.label.xs};
`;
