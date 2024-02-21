import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Oswald, Kanit } from "next/font/google";
import GlobalReduxProvider from "./GlobalRedux/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "300", "600", "700"],
  variable: "--font-poppins",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Shark Tank",
  description:
    "Shark Tank is a popular American television show that features aspiring entrepreneurs and inventors pitching their business ideas or products to a panel of wealthy investors, known as sharks. The entrepreneurs hope to secure investment deals from the sharks in exchange for a percentage of their company's equity. Each contestant has a limited time to make their pitch, after which the sharks can ask questions and negotiate terms. The show is known for its high-stakes drama, candid feedback from the sharks, and the potential for life-changing investment offers. Shark Tank has not only provided a platform for entrepreneurs to showcase their innovations but has also entertained and inspired millions of viewers around the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.className} ${oswald.variable} ${kanit.variable} overflow-x-hidden`}
      >
        <GlobalReduxProvider>{children}</GlobalReduxProvider>
      </body>
    </html>
  );
}
