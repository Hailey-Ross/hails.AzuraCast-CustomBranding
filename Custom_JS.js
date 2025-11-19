(function () {
  function getRandomBackground() {
    const bgImages = [
      'URL TO IMAGE',
      'URL TO IMAGE',
      'URL TO IMAGE'
    ];
    const index = Math.floor(Math.random() * bgImages.length);
    return bgImages[index];
  }

  function setRandomBackground() {
    const bg = getRandomBackground();
    document.body.style.backgroundImage = "url('" + bg + "')";
  }

  function ensureParticlesContainer() {
    let container = document.getElementById('particles-js');
    if (!container) {
      container = document.createElement('div');
      container.id = 'particles-js';
      if (document.body.firstChild) {
        document.body.insertBefore(container, document.body.firstChild);
      } else {
        document.body.appendChild(container);
      }
    }
    return container;
  }
  
  function loadParticles() {
    const container = ensureParticlesContainer();
    if (!container) return;


    if (window._hailsParticlesLoaded) return;
    window._hailsParticlesLoaded = true;


    const coreScript = document.createElement('script');
    coreScript.src = 'https://LINK_TO/particlejs/particles.js';
    coreScript.onload = function () {
      const configScript = document.createElement('script');
      configScript.src = 'https://LINK_TO/particlejs/script.js';
      document.body.appendChild(configScript);
    };
    document.body.appendChild(coreScript);
  }

  window.addEventListener('load', function () {
    setRandomBackground();
    loadParticles();
  });
})();
