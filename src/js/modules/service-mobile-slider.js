import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

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
            destroy: true,
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                768: {
                    destroy: false,
                }
            }
        } );

        serviceMobileSlider.mount();
    }

}

export default serviceMobileSlider;