import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, socials } from "@/lib/content";

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

const description =
  "SKYE LASH is a premier lash and beauty studio in San Jose, CA. Eyelash extensions, refills, removal, and Korean-style glass-skin facials by certified master artists. Beautiful lashes, beautiful you.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SKYE LASH | Professional Lash Studio in San Jose",
    template: "%s | SKYE LASH",
  },
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "SKYE LASH | Professional Lash Studio",
    description:
      "Eyelash extensions, refills, and care by certified master artists in San Jose, CA.",
    url: site.url,
    siteName: "SKYE LASH",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKYE LASH | Professional Lash Studio",
    description:
      "Eyelash extensions, refills, and care by certified master artists in San Jose, CA.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${site.url}/#business`,
  name: site.name,
  image: `${site.url}/images/logo.png`,
  url: site.url,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  priceRange: site.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: "940 Saratoga Ave #106",
    addressLocality: "San Jose",
    addressRegion: "CA",
    postalCode: "95129",
    addressCountry: "US",
  },
  sameAs: socials.map((s) => s.url),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
