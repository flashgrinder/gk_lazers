import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function productContentSlider () {

    const productContentSliderTrue = document.querySelector('.js-content-slider-init');
    if (productContentSliderTrue) {
        const productContentSlider = new Splide( '.js-content-slider-init', {
            type   : 'carousel',
            rewind: true,
            height: '296px',
            perPage: 4,
            perMove: 1,
            gap: '16px',
            autoplay: true,
            arrows: true,
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                768: {
                    perPage: 2,
                    gap: '16px',
                    arrows: false,
                },
                576: {
                    perPage: 1,
                    gap: '8px',
                    arrows: false,
                },
            }
        } );

        productContentSlider.on( 'mounted', function () {
            let items = productContentSlider.length;
            let perPage = productContentSlider.options.perPage;
            if ( items <= perPage ) {
                productContentSlider.options = {
                    drag: false,
                    arrows: false, // If you're not using the CSS method above you can use this to hide arrows
                };
            }
        });

        productContentSlider.mount();
    }

}

export default productContentSlider;