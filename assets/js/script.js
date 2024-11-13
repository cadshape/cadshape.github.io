document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % slides.length;
    }

    setInterval(showSlide, 3000); // Change slide every 3 seconds
    showSlide(); // Initial call
});
