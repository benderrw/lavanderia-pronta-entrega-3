export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name: "Lavanderia Pronta Entrega 3",
    url: "https://lavanderiaprontaentrega3.com/",
    telephone: "+55 53 3278-1294",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Passeio 4 Nº 693",
      addressLocality: "Pelotas",
      addressRegion: "RS",
      addressCountry: "BR",
      addressLocalityRegion: "Jardim das Tradições",
    },
    sameAs: [
      "https://www.google.com/maps/search/?api=1&query=Lavanderia+Pronta+Entrega+3&query_place_id=Chc8YSD02m7mZm9rYXRhcw",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55 53 98439-4682",
      contactType: "customer service",
      areaServed: "Pelotas RS",
      availableLanguage: ["Portuguese"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

