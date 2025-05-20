import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";


export const metadata: Metadata = {
  title: "Trung Kỳ TEST FRONTEND INTERN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Providers>
       {children}</Providers>
      </body>
    </html>
  );
}
