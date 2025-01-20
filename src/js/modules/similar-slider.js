import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 768px)');

function similarSlider () {

    const similarSliderTrue = document.querySelector('.js-similar-slider-init');
    if (similarSliderTrue) {
        const similarSlider = new Splide( '.js-similar-slider-init', {
            type   : 'slide',
            height: 'auto',
            perPage: 4,
            perMove: 1,
            gap: '26px',
            autoplay: true,
            classes: {
                arrows: 'splide__arrows slider-nav__splide-arrows',
                arrow : 'splide__arrow slider-nav__splide-arrow',
                prev  : 'splide__arrow--prev slider-nav__splide-arrow--prev',
                next  : 'splide__arrow--next slider-nav__splide-arrow--next',
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                768: {
                    perPage: 1,
                    gap: '8px',
                    arrows: false,
                },
            }
        } );

        // if(mediaQuery.matches) {
            similarSlider.mount();
        // } else {
        //     similarSlider.destroy();
        // }
    }

}

export default similarSlider;