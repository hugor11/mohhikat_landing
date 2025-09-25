// Google Analytics y tracking para Mohhikat

'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Google Analytics ID (reemplazar con el real)
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'

// Función para enviar eventos a Google Analytics
export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined') {
    (window as any).gtag = (window as any).gtag || function () {
      ((window as any).dataLayer = (window as any).dataLayer || []).push(arguments)
    }
    ;(window as any).gtag(...args)
  }
}

// Hook para tracking de páginas
export function useGoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (GA_TRACKING_ID) {
      gtag('config', GA_TRACKING_ID, {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])
}

// Eventos específicos para Mohhikat
export const trackEvents = {
  // Interacción con calculadora
  calculatorUsed: (weight: string, weeks: string) => {
    gtag('event', 'calculator_used', {
      event_category: 'engagement',
      event_label: `${weight}kg_${weeks}weeks`,
      value: 1
    })
  },

  // Newsletter signup
  newsletterSignup: (email: string) => {
    gtag('event', 'newsletter_signup', {
      event_category: 'conversion',
      event_label: 'footer_newsletter',
      value: 1
    })
  },

  // Clic en tienda
  storeClick: (storeName: string) => {
    gtag('event', 'store_click', {
      event_category: 'conversion',
      event_label: storeName,
      value: 1
    })
  },

  // Descarga de cupón
  couponDownload: () => {
    gtag('event', 'coupon_download', {
      event_category: 'conversion', 
      event_label: 'descuento_primera_compra',
      value: 1
    })
  },

  // Sección vista
  sectionViewed: (sectionName: string) => {
    gtag('event', 'section_view', {
      event_category: 'engagement',
      event_label: sectionName,
      value: 1
    })
  },

  // Testimonio leído
  testimonialViewed: (testimonialId: string) => {
    gtag('event', 'testimonial_viewed', {
      event_category: 'engagement',
      event_label: testimonialId,
      value: 1
    })
  }
}

// Componente Google Analytics
export default function GoogleAnalytics() {
  useGoogleAnalytics()
  
  if (!GA_TRACKING_ID) return null

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Configuración de Facebook Pixel (opcional)
export const FB_PIXEL_ID = 'XXXXXXXXXXXXX'

export const fbq = (...args: any[]) => {
  if (typeof window !== 'undefined') {
    ;(window as any).fbq = (window as any).fbq || function () {
      ;((window as any).fbq.q = (window as any).fbq.q || []).push(arguments)
    }
    ;(window as any).fbq(...args)
  }
}

export function FacebookPixel() {
  if (!FB_PIXEL_ID) return null

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}