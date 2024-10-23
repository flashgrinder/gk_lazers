import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 768px)')

function serviceMobileSlider () {

    const serviceMobileSliderTrue = document.querySelector('.js-service-mobile-slider-init');
    if (serviceMobileSliderTrue) {
        const serviceMobileSlider = new Splide( '.js-service-mobile-slider-init', {
            type   : 'loop',
            height: 'auto',
            perPage: 1,
            perMove: 1,
            gap: '16px',
            autoplay: true,
            arrows: false,
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
        } );

        if(mediaQuery.matches) {
            serviceMobileSlider.mount();
        } else {
            serviceMobileSlider.destroy();
        }
    }

}

export default serviceMobileSlider;