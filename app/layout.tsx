import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Volt | Smart Energy Solutions",
  description:
    "Harness the power of intelligent energy management. Reduce costs, optimize consumption, and join the sustainable energy revolution with Volt.",
  keywords: ["energy", "solar", "smart grid", "electricity", "sustainable", "Rwanda"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
