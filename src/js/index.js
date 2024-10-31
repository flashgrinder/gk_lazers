import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import gsReveal from "./modules/gs-reveal";
import buttonsFixedInit from "./modules/buttons-fixed";
import upToTop from "./modules/up-to-top";
import featuresSlider from "./modules/features-slider";
import popularSlider from "./modules/popular-slider";
import technologySlider from "./modules/technology-slider";
import newsSliders from "./modules/news-sliders";
import purchaseSlider from "./modules/purchase-slider";
import industrySliders from "./modules/industry-sliders";
import searchActionMobile from "./modules/show-hide-form-search";
import mobileNav from './modules/mobile-nav.js';
import sidebarNewsSlider from "./modules/sidebar-news-slider";
import serviceMobileSlider from "./modules/service-mobile-slider";
import catalogSlidersMobile from "./modules/catalog-sliders-mobile";
import customSelect from "./modules/custom-select";
import departmentsSlider from "./modules/departments-slider";
document.addEventListener('DOMContentLoaded', ()=> {

    const mediaQuery = window.matchMedia('(min-width: 768px)');

    if(mediaQuery.matches) {
        buttonsFixedInit();
        upToTop();
    }

    mobileNav();
    gsReveal.init();
    searchActionMobile();
    featuresSlider();
    popularSlider();
    industrySliders();
    technologySlider();
    newsSliders();
    purchaseSlider();
    sidebarNewsSlider();
    serviceMobileSlider();
    catalogSlidersMobile();
    customSelect();
    departmentsSlider();
    Fancybox.bind('[data-fancybox]');

})
// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });
