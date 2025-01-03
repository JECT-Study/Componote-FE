import React from "react";
import * as S from "./ContextMenuItem.style";
import InteractionContainer from "../Interaction/Interaction.style";
import BadgeLabel from "../Badge/Badge.Label";
import { CONTEXT_MENU_ITEM_FEEDBACK_COLOR } from "./ContextMenu.theme";
import { IContextMenuItem } from "./ContextMenu.types";

export default function ContextMenuItem({
  $variant,
  $size,
  $feedback = "normal",
  labelText,
  subLabelText,
  captionText,
  badgeLabelText,
}: IContextMenuItem) {
  return (
    <S.ContextMenuItem $variant={$variant} $size={$size}>
      {$variant === "checkbox" && (
        <S.ContextMenuCheckboxIcon $variant={$variant} $size={$size} />
      )}
      {$variant === "leftIcon" && (
        <S.ContextMenuBlankLine $variant={$variant} $size={$size} />
      )}
      <S.ContextMenuItemSection>
        {$variant === "badge" ? (
          <S.ContextMenuItemWrap>
            <S.ContextMenuItemContainer>
              <S.ContextMenuItemItemLabelText
                $variant={$variant}
                $size={$size}
                $feedback={$feedback}
              >
                {labelText}
              </S.ContextMenuItemItemLabelText>
              <BadgeLabel
                $variant="labelOnly"
                $feedback={CONTEXT_MENU_ITEM_FEEDBACK_COLOR[$feedback].label}
                $style="transparent"
                $size="xs"
                text={badgeLabelText || "레이블"}
              />
            </S.ContextMenuItemContainer>
            {subLabelText && (
              <S.ContextMenuItemSubLabelText>
                {subLabelText}
              </S.ContextMenuItemSubLabelText>
            )}
          </S.ContextMenuItemWrap>
        ) : (
          <S.ContextMenuItemLabelContainer>
            <S.ContextMenuItemItemLabelText
              $variant={$variant}
              $size={$size}
              $feedback={$feedback}
            >
              {labelText}
            </S.ContextMenuItemItemLabelText>
            {subLabelText && (
              <S.ContextMenuItemSubLabelText>
                {subLabelText}
              </S.ContextMenuItemSubLabelText>
            )}
          </S.ContextMenuItemLabelContainer>
        )}
        {captionText && (
          <S.ContextMenuItemCaptionText>
            {captionText}
          </S.ContextMenuItemCaptionText>
        )}
      </S.ContextMenuItemSection>
      {$variant === "rightIcon" && (
        <S.ContextMenuBlankLine $variant={$variant} $size={$size} />
      )}
      <InteractionContainer
        $variant={CONTEXT_MENU_ITEM_FEEDBACK_COLOR[$feedback].interaction}
        $density="normal"
      />
    </S.ContextMenuItem>
  );
}
