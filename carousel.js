document.addEventListener("DOMContentLoaded", function () {
    const carouselSlide = document.getElementById('carouselSlide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let counter = 0;
    const totalImages = carouselImages.length;
    const rotationSpeed = 3000;

    function moveCarousel() {
        if(carouselImages[0]) {
            const size = carouselImages[0].clientWidth;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    }

    function nextSlide() {
        counter = (counter >= totalImages - 1) ? 0 : counter + 1;
        moveCarousel();
    }

    function prevSlide() {
        counter = (counter <= 0) ? totalImages - 1 : counter - 1;
        moveCarousel();
    }

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => { clearInterval(autoRotate); nextSlide(); autoRotate = setInterval(nextSlide, rotationSpeed); });
        prevBtn.addEventListener('click', () => { clearInterval(autoRotate); prevSlide(); autoRotate = setInterval(nextSlide, rotationSpeed); });
    }

    let autoRotate = setInterval(nextSlide, rotationSpeed);
    window.addEventListener('resize', moveCarousel);
});
