"use client"

import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/globals';
import { theme } from '@/styles/theme';
import { Navbar } from '@/shared/components/navbar/index';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
