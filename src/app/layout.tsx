import { Metadata } from "next";
import localFont from "next/font/local";
import ClientComponentContainer from "@/styles/ClientComponentContainer";

const pretendard = localFont({
  src: "./font/PretendardVariable.woff2",
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
      <body>
        <ClientComponentContainer>{children}</ClientComponentContainer>
      </body>
    </html>
  );
}
