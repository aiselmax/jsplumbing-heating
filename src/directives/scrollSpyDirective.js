

const scrollSpyDirective = {
    mounted(el, binding) {
        const activeItem = binding.value.activeItem; // Reaktive Referenz für das aktive Menü
        const items = binding.value.items; // Array der Menüelemente
        const observerOptions = binding.value.options || { threshold: 0.6 }; // Optional: Konfigurationsoptionen für den Observer
    
        const sections = items.map(item => document.getElementById(item.value));
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Setze activeItem.value auf das aktuelle Element, das im Viewport sichtbar ist
              activeItem.value = entry.target.id; 
            }
          });
        }, observerOptions);
    
        // Beobachte jedes Sektionselement
        sections.forEach(section => {
          if (section) {
            observer.observe(section);
          }
        });
    
        el.__scrollspyObserver = observer; // Speichere den Observer, um ihn später aufzuräumen
      },
      unmounted(el) {
        // Aufräumen: Stoppe die Beobachtung beim Entfernen des Elements
        if (el.__scrollspyObserver) {
          el.__scrollspyObserver.disconnect();
          delete el.__scrollspyObserver;
        }
      }
    };

export default scrollSpyDirective;