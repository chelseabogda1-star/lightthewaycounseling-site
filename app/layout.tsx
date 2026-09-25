import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Therapy in Batavia, IL`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.shortName,
    locale: "en_US",
    url: site.url,
    title: `${site.shortName} | Therapy in Batavia, IL`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  additionalType: "https://schema.org/Psychiatric",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  faxNumber: site.fax,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Batavia" },
    { "@type": "City", name: "Geneva" },
    { "@type": "City", name: "St. Charles" },
    { "@type": "City", name: "Aurora" },
    { "@type": "City", name: "North Aurora" },
    { "@type": "State", name: "Illinois" },
  ],
  medicalSpecialty: "Psychiatric",
  availableService: [
    "Individual counseling",
    "Child and adolescent counseling",
    "Telehealth counseling",
    "Clinical supervision",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#f8f2e6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
