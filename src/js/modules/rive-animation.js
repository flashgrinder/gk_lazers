import * as rive from "@rive-app/canvas";
import $ from "jquery";
function riveAnimation() {


    const animationPath = '/img/anime/';
    $(function() {

        if ($('[data-animation]').length > 0) {

            $('[data-animation]').each(function(el) {

                let $this = $(this);
                let id = $this.attr('id');

                let fileName = $this.attr('data-animation');
                $this.attr('id', id);
                let r = new rive.Rive({
                    src: animationPath + fileName,
                    canvas: document.getElementById(id),
                    autoplay: true,
                });
            });

        }
    });

}

export default riveAnimation;