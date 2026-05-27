import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.skyelash.com"),
  title: {
    default: "SKYE LASH | Professional Lash Studio in San Jose",
    template: "%s | SKYE LASH",
  },
  description:
    "SKYE LASH is a premier lash studio in San Jose, CA. Eyelash extensions, refills, personal care, and removal by certified master artists. Beautiful lashes, beautiful you.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "SKYE LASH | Professional Lash Studio",
    description:
      "Eyelash extensions, refills, and care by certified master artists in San Jose, CA.",
    url: "https://www.skyelash.com",
    siteName: "SKYE LASH",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
