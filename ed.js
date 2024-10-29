function animateCard(card) {
    card.style.transform = 'scale(1.05)';
}

document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
