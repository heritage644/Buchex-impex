import { Inter, Poppins, Lobster } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-header",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${lobster.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}