let currentSection = 'presentation'; // Track the current section

function scrollToContent() {
    document.getElementById('content-section').scrollIntoView({ behavior: 'smooth' });
    currentSection = 'cheat';
}

function scrollToTop() {
    document.getElementById('presentation-section').scrollIntoView({ behavior: 'smooth' });
    currentSection = 'presentation';
}

document.addEventListener('wheel', function(e) {
    if (e.deltaY > 0 && currentSection === 'presentation') {
        scrollToContent(); // Scroll down to cheat section
    } else if (e.deltaY < 0 && currentSection === 'cheat') {
        scrollToTop(); // Scroll up to presentation section
    }
});

document.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        currentSection = 'presentation';
    } else if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        currentSection = 'cheat';
    }
});