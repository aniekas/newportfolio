document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    if (heroTitle) {
        setTimeout(() => {
            heroTitle.classList.add('animate');
        }, 500);
    }

    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.classList.add('animate');
        }, 1000);
    }
    const addAnimationClass = (element, delay) => {
        if (element) {
            setTimeout(() => {
                element.classList.add('animate');
            }, delay);
        }
    };

    addAnimationClass(heroTitle, 500);
    addAnimationClass(heroSubtitle, 1000);
});