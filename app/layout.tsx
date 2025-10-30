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
  title: "DUBA1 - Dubai's Crypto Luxury Lifestyle",
  description: "Book Dubai events, rent luxury villas, supercar rentals, and yacht experiences with cryptocurrency. See prices in BTC, ETH, USDT & more. The #1 platform for crypto holders in Dubai.",
  keywords: ["Dubai crypto", "luxury lifestyle Dubai", "crypto payments", "Bitcoin Dubai", "Ethereum payments", "supercar rental crypto", "yacht rental Dubai", "luxury events Dubai", "crypto lifestyle", "USDT payments"],
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
