import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 768px)');

function productContentSlider () {

    const productContentSliderTrue = document.querySelector('.js-content-slider-init');
    if (productContentSliderTrue) {
        const productContentSlider = new Splide( '.js-content-slider-init', {
            type   : 'carousel',
            rewind: true,
            height: '343px',
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
            productContentSlider.mount();
        } else {
            productContentSlider.destroy();
        }
    }

}

export default productContentSlider;