import styled, { css } from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { BUTTON_SIZE_MAP, BUTTON_STYLES } from "./Button.theme";
import { IButtonComponent, IIconWrapper } from "./Button.types";

function IconWrapper({ IconComponent, ...props }: IIconWrapper) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconComponent {...props} />;
}

export const Button = styled.button<IButtonComponent>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: ${(props) =>
    props.$buttonType === "button"
      ? BUTTON_SIZE_MAP[props.$size].padding
      : BUTTON_SIZE_MAP[props.$size].icBtnPadding};

  width: ${(props) => props.$width};

  border: ${DESIGN_SYSTEM.stroke.none};
  border-radius: ${DESIGN_SYSTEM.radius.xs};

  ${({ $buttonStyle, theme }) => {
    if (!$buttonStyle) return BUTTON_STYLES.solidBrand(theme);
    return BUTTON_STYLES[$buttonStyle](theme);
  }}

  &:focus-visible {
    ${({ theme }) => DESIGN_SYSTEM.focus(theme)}
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: ${DESIGN_SYSTEM.gap["4xs"]};
`;

const BaseIconImg = styled(IconWrapper)<IButtonComponent>`
  width: ${(props) =>
    props.$buttonType === "button"
      ? BUTTON_SIZE_MAP[props.$size].icon
      : BUTTON_SIZE_MAP[props.$size].icBtnIcon};
  height: ${(props) =>
    props.$buttonType === "button"
      ? BUTTON_SIZE_MAP[props.$size].icon
      : BUTTON_SIZE_MAP[props.$size].icBtnIcon};

  path {
    ${({ $buttonStyle, theme }) => {
      switch ($buttonStyle) {
        case "solidPrimary":
          return css`
            fill: ${theme.light["object-inv-hero"]};
          `;
        case "solidSecondary":
          return css`
            fill: ${theme.light["object-static-inv-hero"]};
          `;
        case "solidTertiary":
          return css`
            fill: ${theme.light["object-bold"]};
          `;
        case "outlinedPrimary":
          return css`
            fill: ${theme.light["object-hero"]};
          `;
        case "outlinedSecondary":
          return css`
            fill: ${theme.light["object-normal"]};
          `;
        case "outlinedTertiary":
          return css`
            fill: ${theme.light["object-subtle"]};
          `;
        case "emptyPrimary":
          return css`
            fill: ${theme.light["object-hero"]};
          `;
        case "emptySecondary":
          return css`
            fill: ${theme.light["object-normal"]};
          `;
        case "emptyTertiary":
          return css`
            fill: ${theme.light["object-subtle"]};
          `;
        default:
          return null;
      }
    }}
  }
`;

export const LeftIconImg = styled(BaseIconImg)``;

export const LabelText = styled.span<IButtonComponent>`
  text-align: center;
  ${(props) => BUTTON_SIZE_MAP[props.$size].typo};
`;

export const RightIconImg = styled(BaseIconImg)``;
