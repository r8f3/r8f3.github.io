document.addEventListener("DOMContentLoaded", function () {
    const carouselSlide = document.getElementById('carouselSlide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let counter = 0;
    const totalImages = carouselImages.length;
    const rotationSpeed = 3000; // 3 seconds per slide

    function moveCarousel() {
        if (carouselImages.length > 0) {
            // Gets the exact width of the image dynamically
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

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => { 
            clearInterval(autoRotate); 
            nextSlide(); 
            autoRotate = setInterval(nextSlide, rotationSpeed); 
        });
        prevBtn.addEventListener('click', () => { 
            clearInterval(autoRotate); 
            prevSlide(); 
            autoRotate = setInterval(nextSlide, rotationSpeed); 
        });
    }

    let autoRotate = setInterval(nextSlide, rotationSpeed);
    
    // Recalculate when user resizes browser window
    window.addEventListener('resize', moveCarousel);
});
