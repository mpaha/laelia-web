// Laelia Landing Page Interactivity
document.addEventListener('DOMContentLoaded', () => {
  setupStickyHeader();
  setupVideoControls();
  setupScrollReveal();
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

  // Manual Play/Pause Toggle
  controlBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play().then(() => {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
      }).catch(err => {
        console.warn('Playback failed:', err);
      });
    } else {
      video.pause();
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
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
          video.play().then(() => {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
          }).catch(() => {
            // Autoplay might fail, show play icon as fallback
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
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
 * Perform scroll reveal animations on grid columns and text elements
 */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length === 0) return;

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
