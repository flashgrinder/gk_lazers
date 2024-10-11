import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 768px)')

function reviewsSlider () {

    const featuresSliderTrue = document.querySelector('.js-features-slider-init');
    if (featuresSliderTrue) {
        const featuresSlider = new Splide( '.js-features-slider-init', {
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
            featuresSlider.mount();
        } else {
            featuresSlider.destroy();
        }
    }

}

export default reviewsSlider;