import InteractionContainer from "../Interaction/Interaction.style";
import { IButton, ButtonStyle } from "./Button.types";
import * as S from "./Button.style";
import { BUTTON_SIZE_MAP } from "./Button.theme";
import { InteractionVariant } from "../Interaction/Interaction.types";

function renderIcon(
  IconComponent: React.ElementType | undefined,
  $buttonType: "button" | "iconButton",
  $buttonStyle: ButtonStyle,
  $size: keyof typeof BUTTON_SIZE_MAP,
) {
  if (!IconComponent) return null;

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
  onClick,
  text,
  $leftIcon,
  $rightIcon,
  $size,
  $buttonStyle,
  $buttonType = "button",
  $width,
}: IButton) {
  return (
    <S.Button
      onClick={onClick}
      $buttonType={$buttonType}
      $buttonStyle={$buttonStyle}
      $size={$size}
      $width={$width}
    >
      <S.LabelContainer>
        {$buttonType === "iconButton" &&
          renderIcon($leftIcon, $buttonType, $buttonStyle, $size)}
        {$buttonType === "button" && (
          <>
            {renderIcon($leftIcon, $buttonType, $buttonStyle, $size)}
            <S.LabelText $buttonStyle={$buttonStyle} $size={$size}>
              {text}
            </S.LabelText>
            {renderIcon($rightIcon, $buttonType, $buttonStyle, $size)}
          </>
        )}
      </S.LabelContainer>
      <InteractionContainer
        $variant={InteractionVariant.DEFAULT}
        $density="normal"
      />
    </S.Button>
  );
}
