import { Rive } from "@rive-app/canvas";
function riveAnimation() {

        let r = new Rive({
            src: '/img/anime/purchase-1.riv',
            canvas: document.getElementById('purchase-1'),
            autoplay: true,
            onLoad: () => {
                r.resizeDrawingSurfaceToCanvas();
            },
        });

        // let r2 = new Rive({
        //     src: '/img/anime/purchase-2.riv',
        //     canvas: document.getElementById('purchase-2'),
        //     autoplay: true,
        //     onLoad: () => {
        //         r3.resizeDrawingSurfaceToCanvas();
        //     },
        // });

        let r3 = new Rive({
            src: '/img/anime/purchase-3.riv',
            canvas: document.getElementById('purchase-3'),
            autoplay: true,
            onLoad: () => {
                r3.resizeDrawingSurfaceToCanvas();
            },
        });

        // let r4 = new Rive({
        //     src: '/img/anime/purchase-4.riv',
        //     canvas: document.getElementById('purchase-4'),
        //     autoplay: true,
        //     onLoad: () => {
        //         r4.resizeDrawingSurfaceToCanvas();
        //     },
        // });

        let r5 = new Rive({
            src: '/img/anime/purchase-5.riv',
            canvas: document.getElementById('purchase-5'),
            autoplay: true,
            onLoad: () => {
                r5.resizeDrawingSurfaceToCanvas();
            },
        });

        let r6 = new Rive({
            src: '/img/anime/purchase-6.riv',
            canvas: document.getElementById('purchase-6'),
            autoplay: true,
            onLoad: () => {
                r6.resizeDrawingSurfaceToCanvas();
            },
        });

        window.addEventListener("resize", () => {
            r.resizeDrawingSurfaceToCanvas();
            // r2.resizeDrawingSurfaceToCanvas();
            r3.resizeDrawingSurfaceToCanvas();
            // r4.resizeDrawingSurfaceToCanvas();
            r5.resizeDrawingSurfaceToCanvas();
            r6.resizeDrawingSurfaceToCanvas();
        });

}

export default riveAnimation;