document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-container');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible so it doesn't leave/enter again
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px"
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Add a simple parallax effect to the header or background if desired later
    // For now, minimal.
});
