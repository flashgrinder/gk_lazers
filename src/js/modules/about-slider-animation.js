function aboutSliderAnimation () {

    const slideItem = document.querySelectorAll('.js-slide-item');
    const slideYear = document.querySelectorAll('.js-slide-year');
    const slideWindow = document.querySelectorAll('.js-slide-window');
    const slideWindowClose = document.querySelectorAll('.js-slide-window-close');

    slideYear.forEach((el, index) => {

        el.addEventListener('click', () => {
            slideWindow[index].classList.add('is-open');
            slideItem[index].classList.add('is-open');
            el.classList.add('is-hidden');

            slideWindowClose[index].addEventListener('click', ()=> {
                el.classList.remove('is-hidden');
                slideWindow[index].classList.remove('is-open');
                slideWindow[index].classList.add('can-animate');
                slideItem[index].classList.remove('is-open');
                slideItem[index].classList.add('can-animate');
                setTimeout(()=> {
                    slideWindow[index].classList.remove('can-animate');
                }, 300)
            });
        })

    })

}

export default aboutSliderAnimation;