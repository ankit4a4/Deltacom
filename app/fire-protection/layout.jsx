import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://deltacomsecurity.com";
const pageUrl = `${siteUrl}/fire-protection`;

export const metadata = {
  title: "Intrusion & Fire Protection & Emergency Response Systems for Total Safety",
  description:
    "Comprehensive Intrusion & Fire Protection systems for commercial and industrial buildings. Advanced fire alarms, sprinkler systems, detection, suppression, and emergency response solutions from Deltacom Security.",
  keywords:
    "Intrusion & Fire Protection systems, fire alarm systems, sprinkler systems, fire detection, fire suppression, smoke detectors, fire extinguishers, emergency lighting, fire safety, commercial Intrusion & Fire Protection, deltacom security",
  authors: [{ name: "Deltacom Security" }],

  // Open Graph
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Intrusion & Fire Protection & Emergency Response Systems for Total Safety",
    description:
      "Comprehensive Intrusion & Fire Protection systems for commercial and industrial buildings. Advanced fire alarms, sprinkler systems, detection, suppression, and emergency response solutions from Deltacom Security.",
    siteName: "Deltacom Security",
    images: [
      {
        url: `${siteUrl}/images/fire-protection-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Deltacom Security Intrusion & Fire Protection Systems - Complete Fire Safety Solutions",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title:
      "Intrusion & Fire Protection Systems - Advanced Fire Safety Solutions | Deltacom Security",
    description:
      "Comprehensive Intrusion & Fire Protection systems for commercial and industrial buildings. Advanced fire alarms, sprinkler systems, detection, suppression, and emergency response solutions from Deltacom Security.",
    images: [`${siteUrl}/images/fire-protection-og-image.jpg`],
    creator: "@deltacomsecurity",
    site: "@deltacomsecurity",
  },

  // Additional
  alternates: {
    canonical: pageUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Fire Safety Services",
};

export default function FireProtectionLayout({ children }) {
  return (
    <>
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Intrusion & Fire Protection Systems",
            description:
              "Comprehensive Intrusion & Fire Protection systems including fire alarms, sprinkler systems, detection, suppression, and emergency response solutions for commercial and industrial buildings.",
            provider: {
              "@type": "Organization",
              name: "Deltacom Security",
              url: siteUrl,
            },
            serviceType: "Intrusion & Fire Protection Services",
            areaServed: {
              "@type": "Place",
              name: "Your Service Area", // Update with your actual service area
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Intrusion & Fire Protection Systems",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fire Alarm Systems",
                    description:
                      "Advanced fire detection and notification systems with smoke detectors, heat detectors, and manual pull stations",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Sprinkler Systems",
                    description:
                      "Automatic sprinkler systems including wet pipe, dry pipe, and pre-action systems",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fire Suppression Systems",
                    description:
                      "Specialized fire suppression systems using foam, chemicals, and clean agents",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Lighting Systems",
                    description:
                      "Emergency lighting and exit signs for safe evacuation during power outages",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fire Extinguisher Systems",
                    description:
                      "Portable fire extinguishers and fire hydrant systems for immediate fire response",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${siteUrl}/services`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Intrusion & Fire Protection Systems",
                item: pageUrl,
              },
            ],
          }),
        }}
      />

      {/* Structured Data - LocalBusiness with Fire Safety Focus */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Deltacom Security - Intrusion & Fire Protection Systems",
            description:
              "Professional Intrusion & Fire Protection systems provider specializing in fire alarms, sprinkler systems, detection, suppression, and emergency response solutions.",
            url: pageUrl,
            telephone: "+1-xxx-xxx-xxxx", // Update with actual phone
            email: "support@deltacomsecurity.com", // Update with actual email
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Street Address",
              addressLocality: "Your City",
              addressRegion: "Your State",
              postalCode: "Your ZIP",
              addressCountry: "Your Country",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "Your Latitude",
              longitude: "Your Longitude",
            },
            openingHours: ["Mo-Fr 09:00-17:00"],
            priceRange: "$$",
            serviceArea: {
              "@type": "Place",
              name: "Your Service Area",
            },
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              name: "Intrusion & Fire Protection System Certification",
            },
          }),
        }}
      />

      {/* Structured Data - Product/Service Features */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Intrusion & Fire Protection Systems",
            description:
              "Complete Intrusion & Fire Protection solutions including detection, suppression, and emergency response systems",
            brand: {
              "@type": "Brand",
              name: "Deltacom Security",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
              seller: {
                "@type": "Organization",
                name: "Deltacom Security",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "50", // Update with actual ratings if available
            },
          }),
        }}
      />

      <main className="min-h-screen">{children}</main>
    </>
  );
}
