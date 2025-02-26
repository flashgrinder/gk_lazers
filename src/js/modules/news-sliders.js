import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 1024px)');
function newsSliders () {

    const newsBigSliderTrue = document.querySelector('.js-news-big-slider-init');
    if (newsBigSliderTrue) {
        if(mediaQuery.matches) {
            const newsBigSlider = new Splide('.js-news-big-slider-init', {
                type: 'slide',
                height: 'auto',
                rewind: true,
                perPage: 2,
                autoWidth: false,
                autoplay: false,
                arrows: false,
                gap: '8px',
                pagination: true,
                isNavigation: false,
                classes: {
                    arrows: 'splide__arrows slider-nav__splide-arrows',
                    arrow: 'splide__arrow slider-nav__splide-arrow',
                    prev: 'splide__arrow--prev slider-nav__splide-arrow--prev',
                    next: 'splide__arrow--next slider-nav__splide-arrow--next',
                    pagination: 'splide__pagination slider-pagination-dotted',
                    page      : 'splide__pagination__page slider-pagination-dotted__page',
                },
                breakpoints: {
                    576: {
                        perPage: 1,
                    }
                }
            });
            newsBigSlider.mount();
        } else {
            const newsBigSlider = new Splide('.js-news-big-slider-init', {
                type: 'fade',
                height: 'auto',
                rewind: true,
                perPage: 1,
                autoWidth: true,
                autoplay: false,
                arrows: true,
                gap: 0,
                pagination: false,
                classes: {
                    arrows: 'splide__arrows slider-nav__splide-arrows',
                    arrow: 'splide__arrow slider-nav__splide-arrow',
                    prev: 'splide__arrow--prev slider-nav__splide-arrow--prev',
                    next: 'splide__arrow--next slider-nav__splide-arrow--next',
                    pagination: 'splide__pagination slider-pagination-dotted',
                    page      : 'splide__pagination__page slider-pagination-dotted__page',
                },
            });

            const newsMiniSlider = new Splide( '.js-news-mini-slider-init', {
                height: 'auto',
                rewind: true,
                perPage: 4,
                isNavigation: true,
                arrows: false,
                gap: '16px',
                classes: {
                    pagination: 'splide__pagination slider-pagination-dotted',
                    page      : 'splide__pagination__page slider-pagination-dotted__page',
                },
                breakpoints: {
                    768: {
                        destroy: true
                    },
                }
            } );
            newsBigSlider.sync( newsMiniSlider );
            newsBigSlider.mount();
            newsMiniSlider.mount();
        }
    }
}

export default newsSliders;