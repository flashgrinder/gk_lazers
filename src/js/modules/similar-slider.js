import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

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
                1024: {
                    perPage: 2,
                    gap: '16px',
                    arrows: false,
                },
                768: {
                    perPage: 1,
                    gap: '8px',
                    arrows: false,
                },
            }
        } );

        similarSlider.on( 'mounted', function () {
            let items = similarSlider.length;
            let perPage = similarSlider.options.perPage;
            if ( items <= perPage ) {
                similarSlider.options = {
                    drag: false,
                    arrows: false, // If you're not using the CSS method above you can use this to hide arrows
                };
            }
        });

        similarSlider.mount();
    }

}

export default similarSlider;