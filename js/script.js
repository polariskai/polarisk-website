document.addEventListener('DOMContentLoaded', function() {
    // Add some animation to the page
    animateElements();
});


/**
 * Add animations to page elements
 */
function animateElements() {
    // Add a simple fade-in animation to the content
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = '0';
        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transition = 'opacity 1.5s ease-in-out';
        }, 100);
    }
}
