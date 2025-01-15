import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import {
  BADGE_COMPONENT_TYPE_COLOR,
  BADGE_COMPONENT_TYPE_SIZE,
} from "./Badge.theme";
import { IBadgeComponentType } from "./Badge.types";

const BadgeComponentTypeContainer = styled.div<IBadgeComponentType>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0.75rem;
  left: 0.75rem;

  gap: ${(props) => BADGE_COMPONENT_TYPE_SIZE[props.$size].gap};

  width: fit-content;
  height: fit-content;
  padding: ${(props) => BADGE_COMPONENT_TYPE_SIZE[props.$size].padding};

  border-radius: ${DESIGN_SYSTEM.radius["2xs"]};

  background-color: ${(props) =>
    props.$style === "solid"
      ? props.theme.light[`custom-${BADGE_COMPONENT_TYPE_COLOR[props.$type]}`]
      : props.theme.light[
          `custom-trans-${BADGE_COMPONENT_TYPE_COLOR[props.$type]}`
        ]};

  color: ${(props) =>
    props.$style === "solid"
      ? props.theme.light["object-static-inv-hero"]
      : props.theme.light[`custom-${BADGE_COMPONENT_TYPE_COLOR[props.$type]}`]};

  ${(props) => BADGE_COMPONENT_TYPE_SIZE[props.$size].typography}

  z-index: 5;
`;

export default BadgeComponentTypeContainer;
