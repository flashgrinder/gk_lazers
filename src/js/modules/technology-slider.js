import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function technologySlider () {

    const technologySliderTrue = document.querySelector('.js-technology-slider-init');
    if (technologySliderTrue) {
        const technologySlider = new Splide( '.js-technology-slider-init', {
            type   : 'loop',
            height: 'auto',
            perPage: 4.9,
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
                pagination: 'splide__pagination slider-pagination-line',
                page      : 'splide__pagination__page slider-pagination-line__page',
            },
            breakpoints: {
                768: {
                    perPage: 1,
                    gap: '8px',
                    arrows: false,
                },
            }
        } );

        technologySlider.mount();
    }

}

export default technologySlider;