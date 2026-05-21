import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "@/components/providers/ThemeProviderWrapper";
import { LangProvider } from "@/components/providers/LangProvider";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyễn Thị Thanh Trà — Digital Marketing",
  description:
    "Digital Marketing với 5+ năm kinh nghiệm B2B công nghiệp, SEO, Performance Ads & Content Marketing. Hiện đang làm tại Thái Khương, TP.HCM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning className={inter.variable}>
      <body>
        <ThemeProviderWrapper>
          <LangProvider>{children}</LangProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
