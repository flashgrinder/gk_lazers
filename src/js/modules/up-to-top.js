const throttle = (func, time = 100) => {
    let lastTime = 0;
    return () => {
        const now = new Date();
        if (now - lastTime >= time) {
            func();
            time = now;
        }
    };
};

function upToTop() {

    const upToTopButton = document.querySelector('.js-up-to-top');

    upToTopButton.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    });

    const validateUpToTop = () => {
        const windowY = window.scrollY;
        const windowH = window.innerHeight;

        if( windowY > windowH - 400) {
            upToTopButton.classList.add('is-visible');
        } else {
            upToTopButton.classList.remove('is-visible');
        }
    };

    window.addEventListener("scroll", throttle(validateUpToTop, 100));

}

export default upToTop;