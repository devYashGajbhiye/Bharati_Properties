
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let translateX = 0;
const cardWidth = 370; // width + margin
let maxScroll = (slider.children.length * cardWidth) - slider.parentElement.offsetWidth;

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



const rentSlider = document.querySelector(".rent-slider");
const rentNext = document.querySelector(".rent-next");
const rentPrev = document.querySelector(".rent-prev");

let rentTranslateX = 0;
let rentMaxScroll = (rentSlider.children.length * cardWidth) - rentSlider.parentElement.offsetWidth;

rentNext.addEventListener("click", () => {
    if (Math.abs(rentTranslateX) < rentMaxScroll) {
        rentTranslateX -= cardWidth;
        rentSlider.style.transform = `translateX(${rentTranslateX}px)`;
    }
});

rentPrev.addEventListener("click", () => {
    if (rentTranslateX < 0) {
        rentTranslateX += cardWidth;
        rentSlider.style.transform = `translateX(${rentTranslateX}px)`;
    }
});

const sellSlider = document.querySelector(".sell-slider");
const sellNext = document.querySelector(".sell-next");
const sellPrev = document.querySelector(".sell-prev");

let sellTranslateX = 0;
let sellMaxScroll = (sellSlider.children.length * cardWidth) - sellSlider.parentElement.offsetWidth;

sellNext.addEventListener("click", () => {
    if (Math.abs(sellTranslateX) < sellMaxScroll) {
        sellTranslateX -= cardWidth;
        sellSlider.style.transform = `translateX(${sellTranslateX}px)`;
    }
});

sellPrev.addEventListener("click", () => {
    if (sellTranslateX < 0) {
        sellTranslateX += cardWidth;
        sellSlider.style.transform = `translateX(${sellTranslateX}px)`;
    }
});
