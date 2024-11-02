import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 768px)');

function similarSlider () {

    const similarSliderTrue = document.querySelector('.js-similar-slider-init');
    if (similarSliderTrue) {
        const similarSlider = new Splide( '.js-similar-slider-init', {
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
            similarSlider.mount();
        } else {
            similarSlider.destroy();
        }
    }

}

export default similarSlider;