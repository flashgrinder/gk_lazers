import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function departmentsSlider () {

    const departmentsSliderTrue = document.querySelector('.js-departments-slider-mobile-init');
    if (departmentsSliderTrue) {
        const departmentsSlider = new Splide( '.js-departments-slider-mobile-init', {
            type   : 'loop',
            perPage: 1,
            perMove: 1,
            autoplay: true,
            arrows: false,
            destroy: true,
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                1024: {
                    destroy: false,
                    perPage: 2,
                },
                768: {
                    perPage: 1,
                }
            }
        } );

        departmentsSlider.mount();
    }

}

export default departmentsSlider;