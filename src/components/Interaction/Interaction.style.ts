import styled, { DefaultTheme } from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

export interface IInteractionContainer {
  $variant: keyof typeof variantColorMap;
}

const variantColorMap = {
  default: (theme: DefaultTheme) => theme.light["object-bolder"],
  accent: (theme: DefaultTheme) => theme.light["accent-bolder"],
  info: (theme: DefaultTheme) => theme.light["feedback-information"],
  negative: (theme: DefaultTheme) => theme.light["feedback-negative"],
};

const stateMap = {
  enabled: DESIGN_SYSTEM.opacity.invisible,
  hover: DESIGN_SYSTEM.opacity[12],
  pressed: DESIGN_SYSTEM.opacity[22],
  focused: DESIGN_SYSTEM.opacity.visible,
  disabled: DESIGN_SYSTEM.opacity.invisible,
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

  opacity: ${stateMap.enabled};

  &:hover {
    opacity: ${stateMap.hover};
  }

  &:active {
    opacity: ${stateMap.pressed};
  }

  &:focus-visible {
    outline: ${({ theme }) =>
      `${DESIGN_SYSTEM.stroke.bolder} solid ${theme.light["interactive-focus"]}`};
    opacity: ${stateMap.focused};
    background-color: transparent;
  }
`;

export default InteractionContainer;
