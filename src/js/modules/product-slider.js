import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function productSlider () {
    const productSliderTrue = document.querySelector('.js-product-slider-init');
    if (productSliderTrue) {
        const productSlider = new Splide( '.js-product-slider-init', {
            type   : 'fade',
            height: '550px',
            perPage: 1,
            perMove: 1,
            autoplay: false,
            arrows: true,
            rewind: true,
            classes: {
                arrows: 'splide__arrows slider-nav__splide-arrows',
                arrow : 'splide__arrow slider-nav__splide-arrow',
                prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
                next  : 'splide__arrow--next slider-nav__splide-arrow--next',
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            gap: '0px',
            breakpoints: {
                1024: {
                    height: 'auto',
                    arrows: false,
                },
                576: {
                    height: 343,
                }
            }
        } );

        productSlider.mount();

    }
}

export default productSlider;