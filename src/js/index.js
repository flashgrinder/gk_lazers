import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import featuresSlider from "./modules/features-slider";
import mobileNav from './modules/mobile-nav.js';
document.addEventListener('DOMContentLoaded', ()=> {

    // mobileNav();
    featuresSlider();
    Fancybox.bind('[data-fancybox]');

})
// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });
