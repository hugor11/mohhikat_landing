import { 
  organizationSchema, 
  productSchema, 
  websiteSchema, 
  faqSchema,
  localBusinessSchema 
} from '@/lib/seo-data'

export default function SEOStructuredData() {
  return (
    <>
      {/* Datos de la Organización */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      
      {/* Datos del Producto */}
      <script
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      
      {/* Datos del Sitio Web */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      {/* Negocio Local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
    </>
  )
}