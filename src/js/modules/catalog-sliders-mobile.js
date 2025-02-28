import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const mediaQuery = window.matchMedia('(max-width: 768px)')

function catalogMobileSlider () {
    const allSliders = document.querySelectorAll('.js-catalog-slider-init');
    if (allSliders) {
        const buildCatalogSlider = sliderElm => {
            const sliderIdentifier = sliderElm.dataset.id;
            return new Splide(`#${sliderElm.id}`, {
                type   : 'loop',
                height: 'auto',
                perPage: 2,
                perMove: 1,
                gap: '16px',
                autoplay: true,
                arrows: false,
                classes: {
                    pagination: 'splide__pagination slider-pagination-dotted',
                    page      : 'splide__pagination__page slider-pagination-dotted__page',
                },
                breakpoints: {
                    576: {
                        perPage: 1,
                    }
                }
            } );
        }

        const allSliders = document.querySelectorAll('.js-catalog-slider-init');

        if(mediaQuery.matches) {
            allSliders.forEach(slider => buildCatalogSlider(slider).mount());
        } else {
            allSliders.forEach(slider => buildCatalogSlider(slider).destroy());
        }
    }

}

export default catalogMobileSlider;