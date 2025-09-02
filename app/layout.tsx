import "@/app/global.css";
import { Banner } from "fumadocs-ui/components/banner";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            enabled: true,
            options: {
                type: 'static',
                api: process.env.NODE_ENV === 'production' ? '/nextify/api/search' : '/api/search',
              links: [
                ["Home", "/"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ],
            },
          }}
        >
          <Banner id="banner-1">
            I failed my way to success - Thomas Edison
          </Banner>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
