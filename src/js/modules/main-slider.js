import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function mainSlider () {

    const mainSliderTrue = document.querySelector('.js-main-slider-init');
    if (mainSliderTrue) {
        const mainSlider = new Splide('.js-main-slider-init', {
            type: 'fade',
            height: 'auto',
            rewind: true,
            perPage: 1,
            autoWidth: true,
            autoplay: false,
            arrows: false,
            gap: 0,
            pagination: true,
            classes: {
                pagination: 'splide__pagination slider-pagination-dotted',
                page      : 'splide__pagination__page slider-pagination-dotted__page',
            },
        });
        mainSlider.on( 'mounted', function () {
            let items = mainSlider.length;
            let perPage = mainSlider.options.perPage;
            if ( items <= perPage ) {
                mainSlider.options = {
                    drag: false,
                    pagination: false,
                    arrows: false, // If you're not using the CSS method above you can use this to hide arrows
                };
            }
        });
        mainSlider.mount();
    }

}

export default mainSlider;