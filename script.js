let index = 0;
const carousel = document.querySelector('.carousel');
const totalItems = document.querySelectorAll('.carousel-item').length;

function moveCarousel() {
    index++;
    if (index >= totalItems) {
        index = 0; // Reiniciar al primer item
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 3000); // Cambia cada 3 segundos
