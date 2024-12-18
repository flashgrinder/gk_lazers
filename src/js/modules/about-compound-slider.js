import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
function aboutCompoundSlider () {

    const aboutCompoundSliderTrue = document.querySelector('.js-about-compound-slider-init');
    if (aboutCompoundSliderTrue) {
        const aboutCompoundSlider = new Splide( '.js-about-compound-slider-init', {
            type   : 'carousel',
            height: 'auto',
            perPage: 2,
            perMove: 1,
            autoplay: true,
            arrows: false,
            gap: '32px',
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
            breakpoints: {
                768: {
                    perPage: 1,
                    gap: '8px',
                },
            }
        } );

        aboutCompoundSlider.mount();

    }

}

export default aboutCompoundSlider;