import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 768px)');

function departmentsSlider () {

    const departmentsSliderTrue = document.querySelector('.js-departments-slider-mobile-init');
    if (departmentsSliderTrue) {
        const departmentsSlider = new Splide( '.js-departments-slider-mobile-init', {
            type   : 'loop',
            height: 'auto',
            perPage: 1,
            perMove: 1,
            autoplay: true,
            arrows: false,
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
        } );

        if(mediaQuery.matches) {
            departmentsSlider.mount();
        } else {
            departmentsSlider.destroy();
        }
    }

}

export default departmentsSlider;