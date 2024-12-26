import HystModal from "hystmodal";
function modalThanks(container = document) {

    const modalThanks = new HystModal({
        linkAttributeName: "data-hystmodal",
        catchFocus: false,
    })
    modalThanks.open('#thanks');
}

export default modalThanks;