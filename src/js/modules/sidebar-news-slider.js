import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 768px)')

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
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
        } );

        if(mediaQuery.matches) {
            sidebarNewsSlider.mount();
        } else {
            sidebarNewsSlider.destroy();
        }
    }

}

export default sidebarNewsSlider;