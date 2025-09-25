// Datos estructurados para SEO de Mohhikat

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mohhikat México",
  "alternateName": "Mohhikat",
  "url": "https://mohhikat.com",
  "logo": "https://mohhikat.com/images/logotipo.jpg",
  "description": "Empresa mexicana especializada en arena premium para gatos con control superior de olores y máxima absorción.",
  "foundingLocation": {
    "@type": "Country",
    "name": "México"
  },
  "areaServed": {
    "@type": "Country", 
    "name": "México"
  },
  "brand": {
    "@type": "Brand",
    "name": "Mohhikat",
    "logo": "https://mohhikat.com/images/logotipo.jpg"
  },
  "sameAs": [
    "https://facebook.com/mohhikat",
    "https://instagram.com/mohhikat",
    "https://twitter.com/mohhikat"
  ]
}

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Arena Mohhikat Premium",
  "description": "Arena premium para gatos con control superior de olores y máxima absorción. Hecha en México con ingredientes naturales.",
  "brand": {
    "@type": "Brand",
    "name": "Mohhikat"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Mohhikat México"
  },
  "category": "Cuidado de Mascotas",
  "audience": {
    "@type": "PeopleAudience",
    "audienceType": "Dueños de gatos en México"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "MXN",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Mohhikat México"
    }
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Control de Olores",
      "value": "Superior"
    },
    {
      "@type": "PropertyValue", 
      "name": "Absorción",
      "value": "Máxima"
    },
    {
      "@type": "PropertyValue",
      "name": "Origen",
      "value": "México"
    },
    {
      "@type": "PropertyValue",
      "name": "Tipo",
      "value": "Arena Natural Premium"
    }
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mohhikat México",
  "alternateName": "Arena Premium para Gatos Mohhikat",
  "url": "https://mohhikat.com",
  "description": "Arena premium mexicana para gatos con control superior de olores",
  "publisher": {
    "@type": "Organization",
    "name": "Mohhikat México"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://mohhikat.com?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://mohhikat.com"
    }
  ]
}

// Preguntas frecuentes para SEO
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué elegir arena Mohhikat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mohhikat es una arena premium mexicana diseñada específicamente para el hogar mexicano, con control superior de olores y máxima absorción. Es 100% natural y segura para tu gato."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde puedo comprar arena Mohhikat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes encontrar arena Mohhikat en las principales tiendas de mascotas de México y próximamente en línea. Consulta nuestra sección de tiendas para ubicaciones específicas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es segura la arena Mohhikat para gatos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, completamente. Mohhikat está hecha con ingredientes 100% naturales, sin químicos dañinos, siendo segura tanto para gatos como para las familias mexicanas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia con otras arenas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mohhikat ofrece control superior de olores, máxima absorción y está específicamente formulada para el clima y condiciones del hogar mexicano. Además, es una marca 100% mexicana."
      }
    }
  ]
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mohhikat México",
  "@id": "https://mohhikat.com",
  "url": "https://mohhikat.com",
  "telephone": "+52-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MX",
    "addressRegion": "México"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "addressCountry": "MX"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://facebook.com/mohhikat",
    "https://instagram.com/mohhikat"
  ]
}