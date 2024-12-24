import styled from "styled-components";
import checkLine from "@/assets/icons/check-line.svg";

export const ToastContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  gap: ${({ theme }) => theme.gap["4xs"]};
  padding: ${({ theme }) => `${theme.gap["xs"]} ${theme.gap["2xl"]}`};

  box-shadow: ${({ theme }) => theme.shadow.overlay};
  border-radius: ${({ theme }) => theme.radius["sm"]};

  opacity: ${({ theme }) => theme.opacity["visible"]};
  background: ${({ theme }) => theme.colors?.light["object-hero"]};
`;

export const ToastLabelText = styled.span`
  text-align: center;

  ${({ theme }) => theme.typography?.label.bold["sm"]}
  color: ${({ theme }) => theme.colors?.light["object-inv-hero"]};
`;

export const CheckLineImg = styled(checkLine)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;

  gap: ${({ theme }) => theme.gap["none"]};
  padding: ${({ theme }) => theme.gap["none"]};

  path {
    fill: ${({ theme }) => theme.colors?.light["feedback-positive"]};
  }
`;
