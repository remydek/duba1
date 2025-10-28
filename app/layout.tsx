import type { Metadata } from "next";
import { Inter, Gantari } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DUBA1 - Dubai's #1 Crypto Real Estate Platform",
  description: "Invest in luxury properties, rent supercars & yachts with Bitcoin, Ethereum, or USDT. Dubai's premier crypto-friendly real estate aggregator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${gantari.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
