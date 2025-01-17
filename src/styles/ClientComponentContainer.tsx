"use client";

import StyledComponentsRegistry from "@/styles/Registry";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

interface IClientComponentContainerProps {
  children: React.ReactNode;
}

function ClientComponentContainer({
  children,
}: IClientComponentContainerProps) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default ClientComponentContainer;
