// Service section - Modal

const serviceModal = document.querySelectorAll('.service-modal');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

const modal = function(modalClick) {
    serviceModal[modalClick].classList.add('active');
}

learnMoreBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloseBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        serviceModal[i].classList.remove('active');
    });
});