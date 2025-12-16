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


document.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.getElementById("searchBtn");
    const searchLocation = document.getElementById("searchLocation");
    const searchType = document.getElementById("searchType");
    const searchPrice = document.getElementById("searchPrice");

    const properties = document.querySelectorAll(".property-card");

    if (!searchBtn || properties.length === 0) return;

    searchBtn.addEventListener("click", () => {
        const locationValue = searchLocation.value.trim().toLowerCase();
        const typeValue = searchType.value;
        const maxPrice = parseInt(searchPrice.value);

        properties.forEach(card => {
            const cardLocation = card.dataset.location.toLowerCase();
            const cardType = card.dataset.type;
            const cardPrice = parseInt(card.dataset.price);

            let visible = true;

            if (locationValue && !cardLocation.includes(locationValue)) {
                visible = false;
            }

            if (typeValue && cardType !== typeValue) {
                visible = false;
            }

            if (maxPrice && cardPrice > maxPrice) {
                visible = false;
            }

            card.style.display = visible ? "block" : "none";
        });
    });
});
