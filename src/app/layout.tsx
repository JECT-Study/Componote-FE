import { Metadata } from "next";
import localFont from "next/font/local";
import ClientComponentContainer from "@/styles/ClientComponentContainer";
import ReactQueryProviders from "@/hooks/useReactQuery";

const pretendard = localFont({
  src: "./font/PretendardVariable.woff2",
  display: "swap",
});

const metadata: Metadata = {
  title: "컴포노트",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <title>{metadata.title as string}</title>
      <body>
        <ReactQueryProviders>
          <ClientComponentContainer>
            {children}
            {modal}
          </ClientComponentContainer>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
