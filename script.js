/**
 * Minimalist Profile - Alex Morgan
 * Interactive features & subtle micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Set dynamic current year in footer
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Toast Notification handler
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
    
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Share button logic
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: 'Matheus Amorim | Desenvolvimento Web & Mobile',
        text: "Confira o perfil profissional de Matheus Amorim!",
        url: window.location.href
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== 'AbortError') {
            copyToClipboard(window.location.href);
          }
        }
      } else {
        copyToClipboard(window.location.href);
      }
    });
  }

  // Fallback copy to clipboard
  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      showToast('Link do perfil copiado!');
    } catch (err) {
      showToast('Não foi possível copiar o link.');
    }
  }

  // Subtle interactive feedback on CTA buttons
  const linkButtons = document.querySelectorAll('.link-card');
  linkButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      // If anchor link placeholder
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const buttonText = button.querySelector('.link-card-text')?.textContent || 'Link';
        showToast(`Redirecionando para: ${buttonText}`);
      }
    });
  });
});
