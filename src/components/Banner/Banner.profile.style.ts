import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  gap: ${DESIGN_SYSTEM.gap["7xl"]};
  padding: ${DESIGN_SYSTEM.gap["7xl"]};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;

  max-width: 60rem;

  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const UserNameBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const UserNameText = styled.h1`
  color: ${({ theme }) => theme.light["object-hero"]};

  ${DESIGN_SYSTEM.typography.title[3]}
`;

export const UserJobText = styled.span`
  color: ${({ theme }) => theme.light["object-normal"]};

  ${DESIGN_SYSTEM.typography.title[1]}
`;

export const UserEmailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const EmailAddressText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.light["object-normal"]};

  ${DESIGN_SYSTEM.typography.body.sm}
`;

export const LoginInfoText = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.light["object-subtle"]};

  ${DESIGN_SYSTEM.typography.body.xs}
`;
