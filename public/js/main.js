document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for anchor links is handled by CSS,
    // but you can add interactive DOM manipulations here.
    
    const projectCards = document.querySelectorAll('.card');
    
    // Simple fade-in animation logic on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});