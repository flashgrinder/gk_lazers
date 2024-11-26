import 'dropzone/dist/basic.css';
import 'dropzone/dist/dropzone.css';
import Dropzone from "dropzone";

function dragAndDrop() {

    Dropzone.autoDiscover = false;
    let removeSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                        '<path d="M18 6L6 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                        '<path d="M6 6L18 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '</svg>';

    const allDropzones = document.querySelectorAll('.js-dropzone-form');

    const buildDropzone = (dropzoneElem, key) => {
        return new Dropzone(dropzoneElem, {
            url: window.location.pathname + /upload/,
            clickable: `.js-dropzone-${key}`,
            addRemoveLinks: true,
            autoProcessQueue: false,
            previewsContainer: `.js-dropzone-previews-${key}`,
            hiddenInputContainer: `.js-form-${key}`,
            acceptedFiles: ".jpeg,.jpg,.png,.pdf",
            uploadMultiple: true,
            // hiddenFileInput: "FILES",
            paramName: 'files',
            init: function() {
                    this.hiddenFileInput.setAttribute("name", "FILES[]");
                    // console.log(this.hiddenFileInput);

                    this.on("addedfiles", function(file) {
                        this.hiddenFileInput.setAttribute("name", "FILES[]");
                        // console.log(this.hiddenFileInput);
                    });
                    let setupHiddenFileInput = ()=> {
                        this.hiddenFileInput.setAttribute("name", "FILES[]");
                    }

            },
            accept: function(file, done) {
                //произвольная функция проверки загружаемых файлов
                if (file.type == "image/png") {
                    //сообщение без ошибки, если файл забракован
                    console.log("I don`t accept PNGs.");
                }
                //чтобы файл был принят, нужно вызвать done без параметров
                else { done(); }
            },
            previewTemplate: document.querySelector(`.js-form-dropzone-template-${key}`).innerHTML,
            dictRemoveFile: removeSvg,
        });
    }

    allDropzones.forEach((dropzone, key) => {
        buildDropzone(dropzone, key);
    });

}

export default dragAndDrop;