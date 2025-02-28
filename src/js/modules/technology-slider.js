import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function technologySlider () {

    const technologySliderTrue = document.querySelector('.js-technology-slider-init');
    if (technologySliderTrue) {
        const technologySlider = new Splide( '.js-technology-slider-init', {
            type   : 'loop',
            height: 'auto',
            perPage: 4,
            autoWidth: true,
            perMove: 1,
            focus: 0,
            trimSpace: false,
            autoplay: true,
            arrows: true,
            gap: '32px',
            classes: {
                arrows: 'splide__arrows slider-nav__splide-arrows',
                arrow : 'splide__arrow slider-nav__splide-arrow',
                prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
                next  : 'splide__arrow--next slider-nav__splide-arrow--next',
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                1024: {
                    perPage: 2,
                    gap: '16px',
                    autoWidth: false,
                    arrows: false,
                },
                576: {
                    perPage: 1,
                    gap: '8px',
                },
            }
        } );

        technologySlider.mount();
    }

}

export default technologySlider;