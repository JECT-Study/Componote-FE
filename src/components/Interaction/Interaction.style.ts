import styled, { DefaultTheme } from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { InteractionVariant } from "./Interaction.types";

export interface IInteractionContainer {
  $variant: InteractionVariant;
  $density: keyof typeof stateMap;
}

const variantColorMap = {
  default: (theme: DefaultTheme) => theme.light["object-bolder"],
  accent: (theme: DefaultTheme) => theme.light["accent-bolder"],
  info: (theme: DefaultTheme) => theme.light["feedback-information"],
  negative: (theme: DefaultTheme) => theme.light["feedback-negative"],
};

const stateMap = {
  bold: {
    enabled: DESIGN_SYSTEM.opacity.invisible,
    hover: DESIGN_SYSTEM.opacity[12],
    pressed: DESIGN_SYSTEM.opacity[22],
  },
  normal: {
    enabled: DESIGN_SYSTEM.opacity.invisible,
    hover: DESIGN_SYSTEM.opacity[8],
    pressed: DESIGN_SYSTEM.opacity[16],
  },
  subtle: {
    enabled: DESIGN_SYSTEM.opacity.invisible,
    hover: DESIGN_SYSTEM.opacity[5],
    pressed: DESIGN_SYSTEM.opacity[12],
  },
};

const InteractionContainer = styled.span<IInteractionContainer>`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;

  width: 100%;
  height: 100%;

  background-color: ${(props) => variantColorMap[props.$variant](props.theme)};

  opacity: ${(props) => stateMap[props.$density].enabled};

  &:hover {
    opacity: ${(props) => stateMap[props.$density].hover};
  }

  &:active {
    opacity: ${(props) => stateMap[props.$density].pressed};
  }
`;

export default InteractionContainer;
