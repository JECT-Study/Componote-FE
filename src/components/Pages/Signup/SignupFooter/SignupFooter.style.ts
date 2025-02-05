"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const SignupFooterText = styled.span`
  color: ${({ theme }) => theme.light["object-subtler"]};

  ${DESIGN_SYSTEM.typography.body.xs}
`;

export const SignupFooterLinkText = styled.a`
  color: ${({ theme }) => theme.light["object-static-normal"]};

  ${DESIGN_SYSTEM.typography.body.xs}
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;
