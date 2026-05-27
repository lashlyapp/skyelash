import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, socials, locations } from "@/lib/content";

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
  "@graph": locations.map((loc, i) => ({
    "@type": "BeautySalon",
    "@id": `${site.url}/#location-${i + 1}`,
    name: loc.brand,
    image: `${site.url}/images/logo.png`,
    url: site.url,
    telephone: loc.phoneHref.replace("tel:", ""),
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.postal.street,
      addressLocality: loc.postal.city,
      addressRegion: loc.postal.region,
      postalCode: loc.postal.zip,
      addressCountry: loc.postal.country,
    },
    sameAs: socials.map((s) => s.url),
    ...(i === 0 ? { email: site.email } : {}),
  })),
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
