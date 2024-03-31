var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var slides = document.querySelectorAll(".slide");
var totalSlides = slides.length;
var currentSlideIndex = 0;
function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    currentSlideIndex = Array.from(slides).findIndex(slide => slide.src === pic);
}
function closeFullImg() {
    fullImgBox.style.display = "none";
}
function prev() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    fullImg.src = slides[currentSlideIndex].src;
}
function next() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    fullImg.src = slides[currentSlideIndex].src;
}
function filterImages(year) {
    slides.forEach(slide => {
        if (year === 'all' || slide.dataset.year === year) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

