function showMoreText() {
    const showMoreTrue = document.querySelector('.js-about-show-text');
    if (showMoreTrue) {
        const showMoreButton = document.querySelector('.js-about-show-more-text');
        const showText = document.querySelector('.js-about-show-text');

        showMoreButton.addEventListener('click', ()=> {
            showText.classList.add('is-open');
            showMoreButton.classList.add('none');
        })
    }
}

export default showMoreText;