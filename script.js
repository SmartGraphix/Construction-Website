/*---------- SHOW MENU ----------*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu Show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu Hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*---------- REMOVE MENU MOBILE ----------*/
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));


/*---------- CHANGE BACKGROUND HEADER ----------*/
const bgHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};

window.addEventListener('scroll', bgHeader);

/*---------- SWIPER SERVICES ----------*/
const swiperServices = new Swiper('.services_swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/*---------- SHOW SCROLL UP ----------*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scrollup');
    window.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll') : scrollUpBtn.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/*---------- SCROLL SECTION ACTIVE LINK ----------*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if (sectionClass) { // Null check to prevent TypeError
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link');
            } else {
                sectionClass.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*---------- SCROLL REVEAL ANIMATION ----------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 400,
    // reset: true, // Uncomment for repeating animations
});

sr.reveal('.home_content, .services_data, .services_swiper, .footer_container');
sr.reveal('.home_images', { origin: 'bottom', delay: 1000 });
sr.reveal('.about_images, .contact_img', { origin: 'left' });
sr.reveal('.about_data, .contact_data', { origin: 'right' });
sr.reveal('.projects_card', { interval: 100 });
