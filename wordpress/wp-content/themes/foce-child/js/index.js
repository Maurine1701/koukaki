// Fonction de déclenchement de l'animation de fade-in
function fadeInAnimation(entry) {
    entry.target.classList.add('fadeIn');

    // Sélection, division et ajout de l'animation sur les titres
    const title = entry.target.querySelector('h2, h3');

    if (title && title.textContent) {
        const words = title.textContent.split(' ');
        title.textContent = '';

        words.forEach((word) => {
            const span = document.createElement('span');
            span.classList.add('titleAnimation');
            span.textContent = word;
            title.appendChild(span);
        });

        const spans = title.querySelectorAll('.titleAnimation');

        spans.forEach((span, index) => {
            const delay = index === 0 ? 400 : index * 600;

            setTimeout(() => {
                span.classList.add('visibility');
            }, delay);
        });
    }
}

// Création de l'observateur d'intersection
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            fadeInAnimation(entry);
            observer.unobserve(entry.target);
        }
    });
}, { rootMargin: '-100px 0px -100px 0px' });

// Sélection des sections à animer
const sections = document.querySelectorAll('.story, #characters, #place, #studio, footer');

// Ajout de l'observateur d'intersection à chaque section
sections.forEach((section) => {
    sectionObserver.observe(section);
});






// parallax vidéo avec simpleParallaxJS

document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video');

    new simpleParallax(video, {
        orientation: 'right',
        scale: 1.10,
        delay: 0.5,
        transition: 'ease-in-out'
    });
});






// Carrousel Characters

const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 1000,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 2,
    loopAdditionalSlides: 1,
    effect: "coverflow",
    coverflowEffect: {
        slideShadows: false,
        rotate: 70,
        stretch: 0,
        depth: 50,
        modifier: 1,
    },
});







// Parralax des nuages
// Ajoute un écouteur d'événement qui détecte le défilement de la fenêtre.

window.addEventListener('scroll', function () {

    // Selection des éléments

    const bigCloud = document.querySelector('.bigCloud');
    const littleCloud = document.querySelector('.littleCloud');
    const placeSection = document.querySelector('#place');

    // Récuperation de la position verticale (offsetTop) de la section "place" par rapport au haut de la page
    // ainsi que la position de défilement verticale actuelle de la fenêtre.

    const sectionOffsetTop = placeSection.offsetTop;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Verification si la position de défilement actuelle est supérieure ou égale à la position verticale

    if (scrollPosition >= sectionOffsetTop) {

        // calcule la valeur de défilement, détermine l'intensité du déplacement des nuages

        const parallaxValue = (scrollPosition - sectionOffsetTop) / 4;

        // Math.min() limite la valeur de déplacement à 300px

        const translationX = Math.min(parallaxValue, 300);

        // Utilisation de la propriété CSS transform pour modifier la position des nuages avec translateX
        // Le -translationX (distance de déplacement vers la gauche), 'px' pour utiliser le pixel.

        bigCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
        littleCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
    }
});





// Menu Burger

document.addEventListener('DOMContentLoaded', function () {
    const menuBurger = document.querySelector('.burgerBtn');
    const fullscreenMenu = document.querySelector('.fullscreenMenu');

    menuBurger.addEventListener('click', function () {
        menuBurger.classList.toggle('active');
        fullscreenMenu.classList.toggle('open');
    });
});


