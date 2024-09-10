function moveSlide(step, carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelector('.carousel-items');
    const totalItems = carousel.querySelectorAll('.carousel-items .card').length;


    let currentIndex = parseInt(items.getAttribute('data-current-index')) || 0;

    currentIndex = (currentIndex + step + totalItems) % totalItems;

    
    items.setAttribute('data-current-index', currentIndex);


    const offset = -currentIndex * 100;
    items.style.transform = `translateX(${offset}%)`;
}


document.querySelectorAll('.carousel').forEach(carousel => {
    const items = carousel.querySelector('.carousel-items');
    
   
    items.setAttribute('data-current-index', '0');

   
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    
    if (prevButton) {
        prevButton.addEventListener('click', () => moveSlide(-1, carousel.id));
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => moveSlide(1, carousel.id));
    }
});
