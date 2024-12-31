"use client";

import { InputField } from "@/components";
import BlankLine from "@/assets/icons/blank-line.svg";

export default function Component() {
  return (
    <div>
      <InputField
        labelText="필드 레이블"
        helperText="헬퍼 메시지"
        placeholderText="플레이스 홀더"
        $size="md"
        $icon={BlankLine}
        $isNagative={false}
        $iconVisible
        $labelVisible
        $helperVisible
        $countVisible
      />
    </div>
  );
}
