document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('image-slideshow');
    
    // Перевіряємо, чи існує контейнер слайдера на цій сторінці
    if (slideshowContainer) {
        const slideUrls = [
            "img/slider/IMG_1899.jpg",
            "img/slider/IMG_1900.jpg",
            "img/slider/IMG_1873.jpg",
            "img/slider/5.png"
        ];

        let currentSlide = 0;

        function createSlides() {
            slideUrls.forEach(url => {
                const slide = document.createElement('div');
                slide.classList.add('slide');
                slide.style.backgroundImage = `url('${url}')`;
                slideshowContainer.appendChild(slide);
            });
            // Додаємо клас active тільки якщо слайди створилися
            if (slideshowContainer.children.length > 0) {
                slideshowContainer.children[0].classList.add('active');
            }
        }

        function nextSlide() {
            const slides = slideshowContainer.getElementsByClassName('slide');
            if (slides.length === 0) return;
            
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        createSlides();
        setInterval(nextSlide, 4000);
    }
    
    // Встановлення фонових зображень через data-attribute
    document.querySelectorAll('[data-bg-url]').forEach(section => {
        const url = section.getAttribute('data-bg-url');
        section.style.backgroundImage = `url('${url}')`;
    });
});