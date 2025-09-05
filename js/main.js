// header effect scroll
const header = document.querySelector('.header');
const scrollHeader = () => {
    header.classList.toggle('sticky', window.scrollY > 100);
}
window.addEventListener('scroll', scrollHeader);

// Navigation menu item active
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');
        let navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
})

// Scroll to top button
document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.scroll-to-top');

    if (!scrollBtn) return;

    const toggleScrollBtn = () => {
        scrollBtn.classList.toggle('active', window.scrollY > 500);
    };

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleScrollBtn);
    scrollBtn.addEventListener('click', handleScrollTop);
});

// Responsive navigation menu toggle
const navBtn = document.querySelector('.nav-menu-btn');
const navBar = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('close');
    navBar.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBtn.classList.remove('close');
        navBar.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Service section - Modal
const serviceModal = document.querySelectorAll('.service-modal');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

const modal = function (modalClick) {
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

const portfolioModal = function (modalClick) {
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

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
})

ScrollReveal().reveal('.home-info h1, .about-img', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home-img, .description', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.media-icons a, .list-item', { delay: 700, origin: 'top', interval: 200 });
ScrollReveal().reveal('.home-info h3, .home-info p, .home-info-link', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.inner-title, .inner-second-title', { delay: 500, opacity: 0, interval: 100 });