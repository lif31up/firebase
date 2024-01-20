import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Firebase from "@/components/common/Firebase";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Firebase Practice",
  description: "to learn Firebase as it is",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div title="whitespace for top-bar" className="h-4" />
        <Firebase />
        {children}
        <section
          title="top-bar"
          className="w-full fixed top-0 left-0 z-50 flex justify-center bg-yellow-300 shadow"
        >
          <span className="text-white font-bold py-2">
            파이어베이스를 익숙하게 다룰 줄 알아요!
          </span>
        </section>
      </body>
    </html>
  );
}
