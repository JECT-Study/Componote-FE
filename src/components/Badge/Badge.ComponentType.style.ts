"use client";

import styled, { DefaultTheme } from "styled-components";

/**
 * Badge/componentType 컴포넌트에 필요한 props입니다
 */
export interface IBadgeComponentType {
  $type: keyof typeof typeColor;
  $style: "solid" | "transparent";
  $size: "xs" | "sm" | "md";
}

const typeColor = {
  input: "cyan",
  display: "violet",
  feedback: "rose",
  navigation: "lime",
};

const sizeMap = {
  xs: {
    typo: (theme: DefaultTheme) => theme.typography?.body["2xs"],
    gap: "6xs",
    padding: (theme: DefaultTheme) =>
      `${theme.gap?.["6xs"]} ${theme.gap?.["2xs"]}`,
  },
  sm: {
    typo: (theme: DefaultTheme) => theme.typography?.label.xs,
    gap: "5xs",
    padding: (theme: DefaultTheme) => `${theme.gap?.["5xs"]} ${theme.gap?.xs}`,
  },
  md: {
    typo: (theme: DefaultTheme) => theme.typography?.label.sm,
    gap: "4xs",
    padding: (theme: DefaultTheme) => `${theme.gap?.["4xs"]} ${theme.gap?.sm}`,
  },
};

// 스타일드 컴포넌트 정의
export const BadgeComponentTypeContainer = styled.div<IBadgeComponentType>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.gap?.[sizeMap[props.$size].gap]};

  width: fit-content;
  height: fit-content;
  padding: ${(props) => sizeMap[props.$size].padding(props.theme)};

  border-radius: ${({ theme }) => theme.radius?.["2xs"]};

  background-color: ${(props) =>
    props.$style === "solid"
      ? props.theme.colors?.light[`custom-${typeColor[props.$type]}`]
      : props.theme.colors?.light[`custom-trans-${typeColor[props.$type]}`]};

  color: ${(props) =>
    props.$style === "solid"
      ? props.theme.colors?.light["object-static-inv-hero"]
      : props.theme.colors?.light[`custom-${typeColor[props.$type]}`]};

  ${(props) => sizeMap[props.$size].typo(props.theme)}
`;
