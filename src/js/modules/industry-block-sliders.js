import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

function industryMobileSliders () {
    const allSliders = document.querySelectorAll('.js-industry-block-slider-init');
    if (allSliders) {
        const buildCatalogSlider = sliderElm => {
            const sliderIdentifier = sliderElm.dataset.id;
            return new Splide(`#${sliderElm.id}`, {
                type   : 'slide',
                height: '336px',
                perPage: 2,
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
                    768: {
                        height: '296px',
                        destroy: false,
                        perPage: 1,
                    }
                }
            } );
        }

        allSliders.forEach(slider => buildCatalogSlider(slider).mount());

    }

}

export default industryMobileSliders;