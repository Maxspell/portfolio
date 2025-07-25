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

// Portfolio section - Modal

const portfolioModals = document.querySelectorAll('.portfolio-modal');
const imgCard = document.querySelectorAll('.img-card');
const portfolioCloseBtn = document.querySelectorAll('.portfolio-close-btn');

const portfolioModal = function(modalClick) {
    portfolioModals[modalClick].classList.add('active');
}

imgCard.forEach((card, i) => {
    card.addEventListener('click', () => {
        portfolioModal(i);
    });
});

portfolioCloseBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        portfolioModals[i].classList.remove('active');
    });
})

// Our Clients section - Swiper

const ourClientsSwiper = new Swiper('.our-clients-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});