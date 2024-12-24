"use client";

import styled from "styled-components";

/**
 * Callout 컴포넌트에 필요한 style props입니다
 */
export interface ICalloutStyle {
  $size: "sm" | "md";
}

// TODO: size에 따라 text, padding 값 등 조절
// const sizeMap = {
//   sm: {
//     titleTypo: (theme: DefaultTheme) => theme.typo?.label.bold.lg,
//     bodyTypo: (theme: DefaultTheme) => theme.typo?.label.xs,
//   },
//   md: {},
// };

export const CalloutContainer = styled.div<ICalloutStyle>`
  width: 30rem;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => `${theme.gap?.xl} ${theme.gap?.["2xl"]}`};

  padding: ${({ theme }) => theme.gap?.["4xs"]};

  border-radius: ${({ theme }) => theme.radius?.xs};
  border: ${({ theme }) =>
    `${theme.stroke?.normal} solid ${theme.colors?.light["border-trans-normal"]}`};
  opacity: ${({ theme }) => theme.opacity?.visible};
  background: ${({ theme }) => theme.colors?.light["surface-raised"]};
`;

export const CalloutTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: ${({ theme }) => theme.gap?.xs};
  padding: ${({ theme }) => theme.gap?.none};

  border-radius: ${({ theme }) => theme.radius?.none};
  opacity: ${({ theme }) => theme.opacity?.visible};
`;

export const CalloutTitleText = styled.span`
  max-height: 3.5rem
  flex: 1 0 0;

  ${({ theme }) => theme.typo?.title[1]};
  color: ${({ theme }) => theme.colors?.light["object-hero"]};
`;

export const CalloutBodyText = styled.div`
  height: 3rem;
  align-self: stretch;
  overflow: hidden;

  ${({ theme }) => theme.typo?.label.md};
  color: ${({ theme }) => theme.colors?.light["object-subtle"]};
  text-overflow: ellipsis;
  white-space: nowrap;
`;
