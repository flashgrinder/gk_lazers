import $ from 'jquery';
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

    // $(window).scroll(function(){
    //     var offset = $('main').offset(),
    //         offsetwb = $('footer + main').offset();
    //     if ($(this).scrollTop() > offset.top && $(this).scrollTop() < offsetwb.top) {
    //         $('.js-up-to-top').css('background-color','black');
    //     }
    //     else {
    //         $('.js-up-to-top').css('background-color','white');
    //     }
    // });

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

            if (windowY <= (document.querySelector(".footer__bottom").offsetTop - window.innerHeight)) {
                upToTopButton.classList.remove('is-white');
            } else {
                upToTopButton.classList.add('is-white');
            }

        } else {
            upToTopButton.classList.remove('is-visible');
        }
    };

    window.addEventListener("scroll", throttle(validateUpToTop, 100));

}

export default upToTop;