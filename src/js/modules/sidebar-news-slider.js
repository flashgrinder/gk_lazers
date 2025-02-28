import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function sidebarNewsSlider () {

    const newsSidebarSliderTrue = document.querySelector('.js-sidebar-news-slider');
    if (newsSidebarSliderTrue) {
        const sidebarNewsSlider = new Splide( '.js-sidebar-news-slider', {
            type   : 'loop',
            height: 'auto',
            perPage: 1,
            perMove: 1,
            gap: '16px',
            autoplay: true,
            arrows: false,
            destroy: true,
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                1024: {
                    perPage: 2,
                    destroy: false,
                },
                768: {
                    perPage: 1,
                }
            }
        } );

        sidebarNewsSlider.mount();
    }

}

export default sidebarNewsSlider;