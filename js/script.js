<<<<<<< Updated upstream
=======
//menu hamburge

<<<<<<< Updated upstream
=======
const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('#navegacao');

hamburger.addEventListener("click", () =>
nav.classList.toggle("active"));

>>>>>>> Stashed changes



//animação detransição paragrafo
>>>>>>> Stashed changes
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
