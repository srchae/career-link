import "./globals.css";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import { FullScreenContainer } from "@/components/layout/FullScreenContainer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Career Link",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <NextTopLoader
          color="#334155"
          showSpinner={true}
          height={3}
          speed={10}
        />
        <Header />
        <FullScreenContainer>{children}</FullScreenContainer>
        {/* <Sidebar /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
