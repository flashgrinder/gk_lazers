import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function industrySliders () {

    const industrySliderTrue = document.querySelector('.js-industry-slider-init');
    const industryMobileSliderTrue = document.querySelector('.js-industry-mobile-slider-init');
    if (industrySliderTrue) {
        const industrySlider = new Splide( '.js-industry-slider-init', {
            type   : 'loop',
            height: 'auto',
            perPage: 2,
            autoWidth: true,
            perMove: 1,
            focus: 0,
            trimSpace: false,
            autoplay: false,
            arrows: true,
            gap: '32px',
            destroy: false,
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
                    perPage: 1,
                    gap: '16px',
                    arrows: false
                },
                576: {
                    destroy: true,
                },
            }
        } );

        industrySlider.on( 'mounted', function () {
            let items = industrySlider.length;
            let perPage = industrySlider.options.perPage;
            if ( items <= perPage ) {
                industrySlider.options = {
                    drag: false,
                    arrows: false, // If you're not using the CSS method above you can use this to hide arrows
                };
            }
        });

        industrySlider.mount();

    }
    if (industryMobileSliderTrue) {
        const industryMobileSlider = new Splide( '.js-industry-mobile-slider-init', {
            type   : 'loop',
            height: 'auto',
            perPage: 1,
            autoWidth: true,
            perMove: 1,
            focus: 0,
            trimSpace: false,
            autoplay: false,
            arrows: false,
            gap: '8px',
            destroy: true,
            classes: {
                pagination: 'splide__pagination slider-pagination-line',
                page      : 'splide__pagination__page slider-pagination-line__page',
            },
            breakpoints: {
                576: {
                    destroy: false,
                },
            }
        } );

        industryMobileSlider.mount();

    }

}

export default industrySliders;