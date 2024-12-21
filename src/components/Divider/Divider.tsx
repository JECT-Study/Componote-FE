"use client";

import * as S from "./Divider.style";

export interface IDivider {
  $stroke: keyof typeof S.strokeSizes;
  $layout: "vertical" | "horizontal";
}

export default function Divider({ $stroke, $layout }: IDivider) {
  return <S.Divider $stroke={$stroke} $layout={$layout} />;
}
