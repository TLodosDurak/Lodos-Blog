import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarCustom from "@/components/NavbarCustom"
import FooterCustom from "@/components/FooterCustom"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Temel Lodos Durak - Portfolio",
  description: "Personal portfolio and blog of Temel Lodos Durak",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarCustom />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
