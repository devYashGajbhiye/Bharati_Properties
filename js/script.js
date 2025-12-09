const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    let translateX = 0;
    let cardWidth = 370;  // card width + gap
    let maxScroll =
        (slider.children.length * cardWidth) - slider.parentElement.offsetWidth;

    nextBtn.addEventListener("click", () => {
        if (Math.abs(translateX) < maxScroll) {
            translateX -= cardWidth;
            slider.style.transform = `translateX(${translateX}px)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (translateX < 0) {
            translateX += cardWidth;
            slider.style.transform = `translateX(${translateX}px)`;
        }
    });

const scrollContainer = document.getElementById("categoryScroll");
const btnLeft = document.getElementById("scrollLeft");
const btnRight = document.getElementById("scrollRight");

btnRight.onclick = () => scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
btnLeft.onclick = () => scrollContainer.scrollBy({ left: -300, behavior: "smooth" });

function scrollSlider() {
    const slider = document.querySelector('.area-slider');
    slider.scrollBy({ left: 300, behavior: 'smooth' });
}    