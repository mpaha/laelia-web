// Laelia Landing Page Interactivity
document.addEventListener('DOMContentLoaded', () => {
  setupStickyHeader();
  setupVideoControls();
  setupScrollReveal();
  setupFaqAccordion();
});

/**
 * Toggle active class on header on scroll
 */
function setupStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Call once immediately in case page is refreshed while scrolled
  handleScroll();
}

/**
 * Handle HTML5 video playback and viewport-aware power optimization
 */
function setupVideoControls() {
  const video = document.getElementById('hero-video');
  const controlBtn = document.getElementById('video-control');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');

  if (!video || !controlBtn) return;

  const showPlaying = () => {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    controlBtn.setAttribute('aria-label', 'Pause preview video');
  };

  const showPaused = () => {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    controlBtn.setAttribute('aria-label', 'Play preview video');
  };

  // Manual Play/Pause Toggle
  controlBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play().then(showPlaying).catch(err => {
        console.warn('Playback failed:', err);
      });
    } else {
      video.pause();
      showPaused();
    }
  });

  // Mute video on launch, allow audio if clicked/interacted (browser restriction safety)
  video.muted = true;

  // Viewport observer: Pause video when offscreen to conserve CPU/Battery
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Only try to autoplay if it wasn't manually paused
        if (playIcon.style.display !== 'block') {
          video.play().then(showPlaying).catch(() => {
            // Autoplay might fail, show play icon as fallback
            showPaused();
          });
        }
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.1 });

  videoObserver.observe(video);
}

/**
 * Perform scroll reveal animations on grid columns and text elements.
 * Reveal elements that share a parent are staggered for a cascade effect.
 */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length === 0) return;

  // Stagger siblings so grids cascade in instead of popping together
  const groups = new Map();
  revealElements.forEach(el => {
    const parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, 0);
    const index = groups.get(parent);
    if (index > 0) {
      el.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 80}ms`);
    }
    groups.set(parent, index + 1);
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve to keep DOM events minimal
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px' // Trigger slightly before element enters view fully
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

/**
 * Accessible FAQ accordion. Each item toggles independently.
 * Keeps aria-expanded + data-open in sync for styling and screen readers.
 */
function setupFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (items.length === 0) return;

  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.getAttribute('data-open') === 'true';
      item.setAttribute('data-open', String(!isOpen));
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}
