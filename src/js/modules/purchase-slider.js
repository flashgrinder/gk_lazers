import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 1024px)')

function purchaseSlider () {

    const purchaseSliderTrue = document.querySelector('.js-purchase-slider-init');
    if (purchaseSliderTrue) {
        const purchaseSlider = new Splide( '.js-purchase-slider-init', {
            type   : 'loop',
            height: 'auto',
            perPage: 2,
            perMove: 1,
            autoplay: true,
            arrows: false,
            gap: '16px',
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                576: {
                    perPage: 1,
                    gap: '8px',
                }
            }
        } );

        if(mediaQuery.matches) {
            purchaseSlider.mount();
        } else {
            purchaseSlider.destroy();
        }
    }

}

export default purchaseSlider;