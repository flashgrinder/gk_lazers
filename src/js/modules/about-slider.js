import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function aboutSlider () {

    const aboutSliderTrue = document.querySelector('.js-about-slider-init');
    if (aboutSliderTrue) {
        const aboutSlider = new Splide( '.js-about-slider-init', {
            type   : 'carousel',
            height: '400px',
            perPage: 'auto',
            perMove: 1,
            autoplay: false,
            arrows: false,
            gap: '0px',
        } );

        aboutSlider.mount();

    }

}

export default aboutSlider;