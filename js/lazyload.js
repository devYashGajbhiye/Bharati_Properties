document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll(".lazy-img");

    if (!("IntersectionObserver" in window)) {
        // Fallback for old browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => img.classList.add("loaded");

            observer.unobserve(img);
        });
    }, {
        rootMargin: "200px",
        threshold: 0.1
    });

    lazyImages.forEach(img => observer.observe(img));
});
