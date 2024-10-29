import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 768px)');
function newsSliders () {

    const newsBigSliderTrue = document.querySelector('.js-news-big-slider-init');
    const newsMiniSliderTrue = document.querySelector('.js-news-mini-slider-init');
    if (newsBigSliderTrue) {
        const newsBigSlider = new Splide('.js-news-big-slider-init', {
            type: 'fade',
            height: 'auto',
            rewind: true,
            perPage: 1,
            autoWidth: true,
            // perMove: 1,
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
            breakpoints: {
                768: {
                    isNavigation: false,
                    arrows: false,
                    pagination: true,
                    rewind: true,
                },
            }
        });

        const newsMiniSlider = new Splide( '.js-news-mini-slider-init', {
            height: 'auto',
            rewind: true,
            perPage: 4,
            isNavigation: true,
            arrows: false,
            gap: '16px',
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
                    arrows: false,
                    isNavigation: false,
                },
            }
        } );
        if(mediaQuery.matches) {
            newsBigSlider.mount();
            newsMiniSlider.destroy();

        } else {
            newsBigSlider.sync( newsMiniSlider );
            newsBigSlider.mount();
            newsMiniSlider.mount();
        }
    }



}

export default newsSliders;