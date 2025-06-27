import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function purchaseSlider () {

    const purchaseSliderTrue = document.querySelector('.js-purchase-slider-init');
    if (purchaseSliderTrue) {
        const purchaseSlider = new Splide( '.js-purchase-slider-init', {
            type   : 'slide',
            height: 'auto',
            perPage: 2,
            perMove: 1,
            autoplay: true,
            arrows: false,
            gap: '16px',
            destroy: true,
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                1024: {
                    destroy: false,
                },
                576: {
                    perPage: 1,
                    gap: '8px',
                }
            }
        } );

        purchaseSlider.mount();
    }

}

export default purchaseSlider;