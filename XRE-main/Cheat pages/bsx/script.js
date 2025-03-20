/***************************************************
 * SNAP SCROLL: Hero <-> Cheat
 ***************************************************/
let currentSection = 'presentation'; 
const cheatSection = document.getElementById('cheat-section');

// Scroll from Hero to Cheat
function scrollToContent() {
  cheatSection.scrollIntoView({ behavior: 'smooth' });
  currentSection = 'cheat';
}

// Scroll back up if cheat is at top
function scrollToTop() {
  document
    .getElementById('presentation-section')
    .scrollIntoView({ behavior: 'smooth' });
  currentSection = 'presentation';
}

// Wheel event: hero => cheat, or cheat => hero if scrolled top
document.addEventListener('wheel', function (e) {
  if (currentSection === 'presentation' && e.deltaY > 0) {
    // In hero, scrolling down => jump to cheat
    scrollToContent();
  } else if (currentSection === 'cheat' && e.deltaY < 0) {
    // In cheat, scrolling up => only jump to hero if cheat is scrolled to top
    if (cheatSection.scrollTop === 0) {
      scrollToTop();
    }
  }
});

/***************************************************
 * INTERSECTION OBSERVER for "fall in" effect
 ***************************************************/
document.addEventListener('DOMContentLoaded', function () {
  const modules = document.querySelectorAll('.module');

  // We'll observe them within the cheat section container
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add .in-view
          entry.target.classList.add('in-view');
        } else {
          // Remove .in-view => so effect repeats if user scrolls away & back
          entry.target.classList.remove('in-view');
        }
      });
    },
    {
      // root is cheatSection => we watch the internal scroll
      root: cheatSection,
      rootMargin: '0px',
      threshold: 0.1
    }
  );

  modules.forEach((mod) => {
    observer.observe(mod);
  });
});
