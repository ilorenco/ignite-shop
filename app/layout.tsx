import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "Ignite Shop - Rocketseat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <div className="flex flex-col items-start justify-center min-h-screen">
          <header className="py-8 w-full max-w-[1180px] mx-auto">
            <Image src="/logo.svg" alt="Logo" width={130} height={52} />
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
