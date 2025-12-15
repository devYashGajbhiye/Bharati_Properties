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


document.getElementById("searchBtn").addEventListener("click", function () {
    const locationInput = document.getElementById("searchLocation").value.toLowerCase();
    const typeInput = document.getElementById("searchType").value.toLowerCase();
    const priceInput = document.getElementById("searchPrice").value;

    slider.style.transform = "translateX(0px)";
    translateX = 0;

    const cards = document.querySelectorAll(".property-card");

    cards.forEach(card => {

         if (!card.dataset.location || !card.dataset.type || !card.dataset.price) {
            card.style.display = "none";
            return;
        }
        
        const cardLocation = card.dataset.location.toLowerCase();
        const cardType = card.dataset.type.toLowerCase();
        const cardPrice = parseInt(card.dataset.price);

        let isVisible = true;

        if (locationInput && !cardLocation.includes(locationInput)) {
            isVisible = false;
        }

        if (typeInput && cardType !== typeInput) {
            isVisible = false;
        }

        if (priceInput && cardPrice > parseInt(priceInput)) {
            isVisible = false;
        }

        card.style.display = isVisible ? "block" : "none";
    });
});
