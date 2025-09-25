
// Utility functions for button actions and interactions

export const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(`[data-section="${sectionId}"]`);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export const handleWhatsAppContact = () => {
  const phoneNumber = '5512345678';
  const message = '¡Hola! Me interesa conocer más sobre Mohhikat 🐱';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

export const handleEmailContact = () => {
  const email = 'hola@mohhikat.mx';
  const subject = 'Consulta sobre Mohhikat';
  const body = '¡Hola! Me gustaría obtener más información sobre sus productos.';
  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(url, '_blank');
};

export const handleStoreRedirect = (store: string) => {
  const urls = {
    walmart: 'https://www.walmart.com.mx/search?query=arena%20para%20gatos',
    aurrera: 'https://www.bodegaaurrera.com.mx/search?query=arena%20para%20gatos',
    rappi: 'https://www.rappi.com.mx/search?query=arena%20para%20gatos'
  };
  
  const targetUrl = urls[store as keyof typeof urls];
  if (targetUrl) {
    window.open(targetUrl, '_blank');
  }
};

export const handleShare = async (title?: string, text?: string) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: title || 'Mohhikat - Arena para Gatos Mexicana',
        text: text || '¡Descubre la mejor arena para gatos hecha en México!',
        url: window.location.href,
      });
    } catch (err) {
      console.log('Error sharing:', err);
      fallbackShare();
    }
  } else {
    fallbackShare();
  }
};

const fallbackShare = () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('¡Enlace copiado! Compártelo con tus amigos 😺');
  }).catch(() => {
    console.log('Unable to copy to clipboard');
  });
};

export const handleNewsletterSignup = (email: string) => {
  if (!email) {
    alert('Por favor ingresa tu email');
    return;
  }
  
  if (!email.includes('@')) {
    alert('Por favor ingresa un email válido');
    return;
  }
  
  // Simulated newsletter signup
  alert('¡Gracias! Te has suscrito exitosamente a nuestros tips semanales 🐱');
};

export const showComingSoon = () => {
  alert('¡Próximamente! Esta funcionalidad estará disponible muy pronto 🚀');
};

export const handleCategoryFilter = (category: string) => {
  // For now, just scroll to tips section
  scrollToSection('tips');
};
