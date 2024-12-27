import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import gsReveal from "./modules/gs-reveal";
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
import showMoreText from "./modules/show-more-text";
import aboutSlider from "./modules/about-slider";
import similarSlider from "./modules/similar-slider";
import dragAndDrop from "./modules/drag-and-drop";
import { modalWindow } from "./modules/modal";
import { modalThanks } from "./modules/modal";
import selectForm from "./modules/select-form";
import placeholderInputs from "./modules/placeholder-inputs";
import productSlider from "./modules/product-slider";
import customTabs from "./modules/tabs";
import productContentSlider from "./modules/product-content-slider";
import $ from "jquery";
import aboutSliderAnimation from "./modules/about-slider-animation";
import aboutCompoundSlider from "./modules/about-compound-slider";
import initAcc from "./modules/accordion";
// import modalThanks from "./modules/modalThanks";
document.addEventListener('DOMContentLoaded', ()=> {

    const mediaQuery = window.matchMedia('(min-width: 768px)');

    if(mediaQuery.matches) {
        buttonsFixedInit();
        upToTop();
    }

    mobileNav();
    // gsReveal.init();
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
    showMoreText();
    aboutSlider();
    similarSlider();
    dragAndDrop();
    modalWindow();
    window.modalThanks = modalThanks;
    selectForm();
    placeholderInputs();
    productSlider();
    customTabs();
    productContentSlider();
    aboutSliderAnimation();
    aboutCompoundSlider();
    initAcc('.js-accordion', false);
    Fancybox.bind('[data-fancybox]');

})
// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });
