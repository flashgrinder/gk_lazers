// import 'dropzone/dist/basic.css';
// import 'dropzone/dist/dropzone.css';
// import Dropzone from "dropzone";
import * as FilePond from 'filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import ru_RU from 'filepond/locale/ru-ru.js';

FilePond.registerPlugin(FilePondPluginFileValidateType);
function dragAndDrop() {

    const inputsDragAndDrop = document.querySelectorAll('.js-input-drag-adn-drop');

    const buildDragAndDrop = (dragAndDropElement, key) => {
        return FilePond.create(dragAndDropElement, {
            labelIdle: '<div class="form__dropzone-wrap d-flex flex-align-center">\n' +
                '\t\t\t\t\t\t\t\t\t<svg width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '\t\t\t\t\t\t\t\t\t\t<path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M28.4689 57.6273C44.1919 57.6273 56.9379 44.8813 56.9379 29.1584C56.9379 13.4354 44.1919 0.689453 28.4689 0.689453C12.746 0.689453 0 13.4354 0 29.1584C0 44.8813 12.746 57.6273 28.4689 57.6273Z" fill="#699E4A"/>\n' +
                '\t\t\t\t\t\t\t\t\t\t<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M28.4688 49.1582C39.5144 49.1582 48.4688 40.2039 48.4688 29.1582C48.4688 18.1125 39.5144 9.1582 28.4688 9.1582C17.4231 9.1582 8.46875 18.1125 8.46875 29.1582C8.46875 40.2039 17.4231 49.1582 28.4688 49.1582Z" fill="#699E4A"/>\n' +
                '\t\t\t\t\t\t\t\t\t\t<path d="M20.4688 29.1582V37.1582C20.4688 38.2628 21.3642 39.1582 22.4688 39.1582H34.4688C35.5733 39.1582 36.4688 38.2628 36.4688 37.1582V29.1582" stroke="#005339" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '\t\t\t\t\t\t\t\t\t\t<path d="M32.4688 23.1582L28.4688 19.1582L24.4688 23.1582" stroke="#005339" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '\t\t\t\t\t\t\t\t\t\t<path d="M28.4688 19.1582V32.1582" stroke="#005339" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '\t\t\t\t\t\t\t\t\t</svg>\n' +
                '\t\t\t\t\t\t\t\t\t<div class="form__dropzone-text-wrap">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form__dropzone-text text text--normal text--primary text--w-bold">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="filepond--label-action">Нажмите для загрузки</span> <span>или перетащите в эту область</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="form__dropzone-subtext text text--small text--secondary text--w-regular">\n' +
                '\t\t\t\t\t\t\t\t\t\t\tPDF, PNG, JPEG, AVI, MP4 (максимальный размер - 25 MB)\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>',
            storeAsFile: true,
            credits: false,
            acceptedFileTypes: ['image/png', 'image/jpg', 'image/jpeg', 'video/avi', 'video/mp4', 'application/pdf'],
            dropValidation: true,
            allowProcess: true,
            allowMultiple: true,
            styleProgressIndicatorPosition: 'center',
            styleButtonRemoveItemPosition: 'right',
            iconRemove: '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<path d="M18 6.81396L6 18.814" stroke="#5A5F61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                            '<path d="M6 6.81396L18 18.814" stroke="#5A5F61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                        '</svg>',
            fileValidateTypeDetectType: (source, type) =>
                new Promise((resolve, reject) => {
                    if (/\.xls$/.test(source.name)) return resolve('application/vnd.ms-excel');
                    resolve(type);
                }),
        })
    }

    inputsDragAndDrop.forEach((DragAndDrop, key) => {
        buildDragAndDrop(DragAndDrop, key, () => {
            this.setOptions(ru_RU);
            const date = this.getFile()
            console.log(this);
        });
    });


    // Dropzone.autoDiscover = false;
    // let removeSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    //                     '<path d="M18 6L6 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
    //                     '<path d="M6 6L18 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
    //                 '</svg>';
    //
    // const allDropzones = document.querySelectorAll('.js-dropzone-form');
    //
    // const buildDropzone = (dropzoneElem, key) => {
    //     return new Dropzone(dropzoneElem, {
    //         url: window.location.pathname + /upload/,
    //         clickable: `.js-dropzone-${key}`,
    //         addRemoveLinks: true,
    //         autoProcessQueue: false,
    //         previewsContainer: `.js-dropzone-previews-${key}`,
    //         hiddenInputContainer: `.js-form-${key}`,
    //         acceptedFiles: ".jpeg,.jpg,.png,.pdf",
    //         uploadMultiple: true,
    //         // hiddenFileInput: "FILES",
    //         paramName: 'files',
    //         init: function() {
    //                 this.hiddenFileInput.setAttribute("name", "FILES[]");
    //                 // console.log(this.hiddenFileInput);
    //
    //                 this.on("addedfiles", function(file) {
    //                     this.hiddenFileInput.setAttribute("name", "FILES[]");
    //                     // console.log(this.hiddenFileInput);
    //                 });
    //                 let setupHiddenFileInput = ()=> {
    //                     this.hiddenFileInput.setAttribute("name", "FILES[]");
    //                 }
    //
    //         },
    //         accept: function(file, done) {
    //             //произвольная функция проверки загружаемых файлов
    //             if (file.type == "image/png") {
    //                 //сообщение без ошибки, если файл забракован
    //                 console.log("I don`t accept PNGs.");
    //             }
    //             //чтобы файл был принят, нужно вызвать done без параметров
    //             else { done(); }
    //         },
    //         previewTemplate: document.querySelector(`.js-form-dropzone-template-${key}`).innerHTML,
    //         dictRemoveFile: removeSvg,
    //     });
    // }
    //
    // allDropzones.forEach((dropzone, key) => {
    //     buildDropzone(dropzone, key);
    // });

}

export default dragAndDrop;