// JavaScript to reveal the "Studies Section" on scroll
window.addEventListener('scroll', function() {
    const studiesSection = document.querySelector('.studies-section');
    const sectionPosition = studiesSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    // Check if the section is within the viewport
    if (sectionPosition < viewportHeight) {
        studiesSection.style.opacity = 1;
        studiesSection.style.transform = 'translateY(0)';
    }
});
