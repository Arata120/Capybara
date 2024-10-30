let index = 0;

function showSlide(i) {
    const carousel = document.getElementById('carousel');
    index = (i + carousel.children.length) % carousel.children.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}
function prevSlide() {
    showSlide(index - 1);
}
function nextSlide() {
    showSlide(index + 1);
}