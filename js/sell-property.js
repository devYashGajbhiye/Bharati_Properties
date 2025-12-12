const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.faq-question.active');
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
            currentlyActive.nextElementSibling.style.maxHeight = 0;
        }

        item.classList.toggle('active');
        const answer = item.nextElementSibling;
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
});
