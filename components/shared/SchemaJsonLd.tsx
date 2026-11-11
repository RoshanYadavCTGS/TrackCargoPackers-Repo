import { companyData } from "@/data/company";

export default function SchemaJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: companyData.name,
    alternateName: "Track Cargo Packers and Movers Chennai",
    url: "https://trackcargopackers.in",
    logo: "https://trackcargopackers.in/heder-logo.png",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200",
    description: companyData.description,
    telephone: companyData.phones.primaryFormatted,
    email: companyData.email,
    priceRange: "₹₹ - Economical to Premium Logistics",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${companyData.address.shop}, ${companyData.address.street}, ${companyData.address.annexe}`,
      addressLocality: companyData.address.locality,
      addressRegion: companyData.address.state,
      postalCode: companyData.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0674",
      longitude: "80.1265",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1200",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Kolkata" },
      { "@type": "City", name: "Coimbatore" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Logistics and Relocation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Packing & Moving",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Household Shifting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Shifting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Car & Bike Transport",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Warehousing & Storage",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
