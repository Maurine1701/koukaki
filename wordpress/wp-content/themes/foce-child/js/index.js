// Fonction de déclenchement de l'animation de fade-in
function fadeInAnimation(entry) {
    // Ajout de la classe 'fadeIn' pour déclencher l'animation de fade-in
    entry.target.classList.add('fadeIn');


    // Animation apparition des titres
    // Sélection de l'élément de titre (h2 ou h3) dans l'élément cible
    const title = entry.target.querySelector('h2, h3');

    // Vérification si le titre existe et s'il a du contenu
    if (title && title.textContent) {
        // Division du contenu du titre en mots
        const words = title.textContent.split(' ');

        // Effacement du contenu du titre
        title.textContent = '';

        // Création d'éléments 'span' pour chaque mot du titre et ajout de la classe 'titleAnimation'
        words.forEach((word) => {
            const span = document.createElement('span');
            span.classList.add('titleAnimation');
            span.textContent = word;
            title.appendChild(span);
        });

        // Sélection de tous les éléments 'span' avec la classe 'titleAnimation' à l'intérieur du titre
        const spans = title.querySelectorAll('.titleAnimation');

        // Ajout progressif de la classe 'visibility' à chaque élément 'span' avec un délai
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
    // Sélection des éléments bouton du menu burger et menu fullscreen
    const menuBurger = document.querySelector('.burgerBtn');
    const fullscreenMenu = document.querySelector('.fullscreenMenu');

    // Ajout d'un écouteur d'événement click au bouton de menu burger
    menuBurger.addEventListener('click', function () {
        // Ajout de la classe 'active' pour animer le bouton de menu burger
        menuBurger.classList.toggle('active');

        // Ajout de la classe 'open' pour afficher ou masquer le menu fullscreen
        fullscreenMenu.classList.toggle('open');
    });
});




// Apparition lien menu 

document.addEventListener('DOMContentLoaded', function () {
    const menuBurger = document.querySelector('.burgerBtn');
    const fullscreenMenu = document.querySelector('.fullscreenMenu');

    menuBurger.addEventListener('click', function () {
        // Sélection des éléments menu fullscreen et tous les liens du menu
        const menuLinks = fullscreenMenu.querySelectorAll('ul li a');

        // Ajout de la classe 'titleAnimation' à chaque lien du menu
        menuLinks.forEach((link) => {
            link.classList.add('liensAnimation');
        });

        // Déclenchement de l'animation avec un délai
        setTimeout(() => {
            menuLinks.forEach((link, index) => {
                const delay = index === 0 ? 400 : index * 600;

                // Ajout de la classe 'visibility' avec le délai spécifié
                setTimeout(() => {
                    link.classList.add('visibility');
                }, delay);
            });
        }, 200);
    });
});



