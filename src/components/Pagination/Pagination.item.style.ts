import styled, { css } from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { IPaginationItemComponent } from "./Pagination.types";

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

  ${({ theme, $isActivated }) => {
    if ($isActivated) {
      return css`
        color: ${theme.light["object-hero"]};
        background: ${theme.light["accent-subtler"]};
      `;
    }

    return css`
      color: ${theme.light["object-subtle"]};
    `;
  }}
`;

export const LabelText = styled.span`
  text-align: center;
  padding-top: 0.0875rem;

  ${DESIGN_SYSTEM.typography.label.xs};
`;
