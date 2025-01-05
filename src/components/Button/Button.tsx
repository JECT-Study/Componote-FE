import InteractionContainer from "../Interaction/Interaction.style";
import { IButton, ButtonStyle } from "./Button.types";
import * as S from "./Button.style";
import { BUTTON_SIZE_MAP } from "./Button.theme";

function renderIcon(
  IconComponent: React.ElementType | undefined,
  $buttonType: "button" | "iconButton",
  $buttonStyle: ButtonStyle,
  $size: keyof typeof BUTTON_SIZE_MAP,
  isVisible: boolean
) {
  if (!isVisible || !IconComponent) return null;

  return (
    <S.LeftIconImg
      $buttonType={$buttonType}
      $buttonStyle={$buttonStyle}
      $size={$size}
      IconComponent={IconComponent}
    />
  );
}

export default function Button({
  text,
  $leftIcon,
  $rightIcon,
  $size,
  $buttonStyle,
  $buttonType = "button",
  $isLeftIconVisible = true,
  $isRightIconVisible = true,
}: IButton) {
  return (
    <S.Button $buttonStyle={$buttonStyle} $size={$size}>
      <S.LabelContainer>
        {$buttonType === "iconButton" &&
          renderIcon($leftIcon, $buttonType, $buttonStyle, $size, true)}
        {$buttonType === "button" && (
          <>
            {renderIcon(
              $leftIcon,
              $buttonType,
              $buttonStyle,
              $size,
              $isLeftIconVisible
            )}
            <S.LabelText $buttonStyle={$buttonStyle} $size={$size}>
              {text}
            </S.LabelText>
            {renderIcon(
              $rightIcon,
              $buttonType,
              $buttonStyle,
              $size,
              $isRightIconVisible
            )}
          </>
        )}
      </S.LabelContainer>
      <InteractionContainer $variant="default" $density="normal" />
    </S.Button>
  );
}
