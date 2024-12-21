import { Metadata } from "next";
import localFont from "next/font/local";
import StyledComponentRegistry from "../styles/Registry";

const pretendard = localFont({
  src: "./font/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

const metadata: Metadata = {
  title: "컴포노트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <title>{metadata.title as string}</title>
      <body className="font-pretendard">
        <StyledComponentRegistry>{children}</StyledComponentRegistry>
      </body>
    </html>
  );
}
