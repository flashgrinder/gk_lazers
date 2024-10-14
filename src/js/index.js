import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import featuresSlider from "./modules/features-slider";
import popularSlider from "./modules/popular-slider";
import technologySlider from "./modules/technology-slider";
import newsSliders from "./modules/news-sliders";
import mobileNav from './modules/mobile-nav.js';
document.addEventListener('DOMContentLoaded', ()=> {

    // mobileNav();
    featuresSlider();
    popularSlider();
    technologySlider();
    newsSliders();
    Fancybox.bind('[data-fancybox]');

})
// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });
