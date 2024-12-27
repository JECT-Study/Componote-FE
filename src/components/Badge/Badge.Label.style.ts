"use client";

import styled from "styled-components";
import checkLine from "@/assets/icons/check-line.svg";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { BADGE_LABEL_FEEDBACK_COLOR, BADGE_LABEL_SIZE } from "./Badge.theme";
import { IBadgeLabelBasicStyle, IBadgeLabelStyle } from "./Badge.types";

export const BadgeLabelContainer = styled.div<IBadgeLabelStyle>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: fit-content;
  height: fit-content;

  gap: ${DESIGN_SYSTEM.gap["6xs"]};
  padding: ${(props) => BADGE_LABEL_SIZE[props.$size].padding[props.$variant]};

  border-radius: ${DESIGN_SYSTEM.radius["2xs"]};
  border: ${(props) => (props.$style === "outlined" ? "solid" : "0")};
  border-width: ${DESIGN_SYSTEM.stroke.normal};

  background-color: ${(props) =>
    props.theme.light[
      BADGE_LABEL_FEEDBACK_COLOR[props.$feedback][props.$style].background
    ]};

  color: ${(props) =>
    props.theme.light[
      BADGE_LABEL_FEEDBACK_COLOR[props.$feedback][props.$style].text
    ]};

  ${(props) => BADGE_LABEL_SIZE[props.$size].typography};
`;

export const BadgeLabelCheckIcon = styled(checkLine)<IBadgeLabelBasicStyle>`
  width: ${(props) => BADGE_LABEL_SIZE[props.$size].iconSize};
  height: ${(props) => BADGE_LABEL_SIZE[props.$size].iconSize};
  path {
    fill: ${(props) =>
      props.theme.light[
        BADGE_LABEL_FEEDBACK_COLOR[props.$feedback][props.$style].text
      ]};
  }
`;
