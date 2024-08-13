document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('p');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2 // Ajuste conforme necessário
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});