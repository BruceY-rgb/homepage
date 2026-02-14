import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "杨思行 (Sixing Yang) - 个人首页",
  description: "浙江大学计算机科学与技术专业，热衷于机器学习、深度学习、量化投资与多智能体系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
